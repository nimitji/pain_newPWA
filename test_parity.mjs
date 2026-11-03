// Functional Parity and Route Parity Test Suite
import http from "http";

const port = process.argv[2] || "3000";
const BASE_URL = `http://127.0.0.1:${port}`;

async function fetchRoute(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, { redirect: "manual", ...options });
  const text = await res.text();
  return {
    status: res.status,
    headers: res.headers,
    text,
  };
}

async function runTests() {
  console.log("==================================================");
  console.log("PPJAIN NEXT.JS REBUILD — FUNCTIONAL PARITY TEST SUITE");
  console.log("==================================================");

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`[PASS] ${message}`);
      passed++;
    } else {
      console.error(`[FAIL] ${message}`);
      failed++;
    }
  }

  // 1. Public Routes
  const publicRoutes = [
    "/",
    "/about-us",
    "/member-list",
    "/magazin",
    "/magazine/padmawati-purwal-kiran-may-2025",
    "/news",
    "/news/meeting-at-jaipur",
    "/committees",
    "/committee/sahas-kumar-jain",
    "/login",
    "/register",
    "/forgot-password",
    "/robots.txt",
    "/sitemap.xml",
  ];

  for (const route of publicRoutes) {
    try {
      const res = await fetchRoute(route);
      assert(res.status === 200, `Public route ${route} returns 200 OK (got ${res.status})`);
    } catch (err) {
      assert(false, `Public route ${route} failed with error: ${err.message}`);
    }
  }

  // 2. Protected Routes Redirect when unauthenticated
  const protectedRoutes = ["/search-var-vadhu", "/download", "/dashboard"];
  for (const route of protectedRoutes) {
    try {
      const res = await fetchRoute(route);
      const isRedirect = res.status === 307 || res.status === 302 || res.status === 303;
      const location = res.headers.get("location");
      assert(
        isRedirect && location && location.includes("/login"),
        `Protected route ${route} redirects unauthenticated visitor to /login (status: ${res.status}, location: ${location})`
      );
    } catch (err) {
      assert(false, `Protected route ${route} check failed: ${err.message}`);
    }
  }

  // 3. Member Directory Data, Search, Sort & Phone Masking
  try {
    const listRes = await fetchRoute("/member-list");
    const mIds = listRes.text.match(/PPJ\d+/gi);
    console.log("DEBUG: Found MIDs on /member-list:", mIds ? mIds.slice(0, 5) : "none");
    assert(listRes.text.includes("467") && listRes.text.includes("Registered Families"), "Member list displays exact families count 467");
    assert(listRes.text.includes("2180") && listRes.text.includes("Registered Members"), "Member list displays exact members count 2180");
    assert(mIds && mIds.length > 0, `Member list displays real MIDs (e.g. ${mIds ? mIds[0] : "none"})`);
    assert(listRes.text.includes("*********"), "Member directory properly masks phone numbers");

    // Search query
    const searchRes = await fetchRoute("/member-list?keyword=Firozabad");
    assert(searchRes.text.includes("Firozabad"), "Member search by city 'Firozabad' works");
  } catch (err) {
    assert(false, `Member directory tests failed: ${err.message}`);
  }

  // 4. Magazine FlipHTML5 Embed Verification
  try {
    const magRes = await fetchRoute("/magazine/padmawati-purwal-kiran-may-2025");
    assert(
      magRes.text.includes("online.fliphtml5.com"),
      "Magazine reader embeds authentic FlipHTML5 interactive viewer iframe"
    );
  } catch (err) {
    assert(false, `Magazine embed test failed: ${err.message}`);
  }

  // 5. Contact API Form Submission
  try {
    const contactRes = await fetchRoute("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        subject: "General Inquiry",
        message: "Hello PPJain Team",
      }),
    });
    assert(contactRes.status === 200, "Contact API endpoint successfully accepts valid submissions");
  } catch (err) {
    assert(false, `Contact API test failed: ${err.message}`);
  }

  // 6. Authentication & Protected Access
  try {
    const loginRes = await fetchRoute("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mobile: "9899805745",
        password: "123456",
        remember: true,
      }),
    });
    assert(loginRes.status === 200, "Login API accepts valid member credentials");
    const cookie = loginRes.headers.get("set-cookie");
    assert(cookie && cookie.includes("ppjain_session"), "Login API sets secure session cookie ppjain_session");

    // Access protected route with session cookie
    if (cookie) {
      const sessionHeader = cookie.split(";")[0];
      const protectedRes = await fetchRoute("/dashboard", {
        headers: { Cookie: sessionHeader },
      });
      assert(
        protectedRes.status === 200 && protectedRes.text.includes("पारिवारिक डैशबोर्ड"),
        "Authenticated member accesses dashboard successfully with session cookie"
      );
    }
  } catch (err) {
    assert(false, `Authentication tests failed: ${err.message}`);
  }

  console.log("==================================================");
  console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log("==================================================");

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((e) => {
  console.error("Test execution fatal error:", e);
  process.exit(1);
});
