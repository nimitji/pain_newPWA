import { cookies } from "next/headers";
import { UserSession } from "@/types";

const SESSION_COOKIE_NAME = "ppjain_session";

// Demo accounts for verified members
export const verifiedTestAccounts: Record<string, { pin: string; user: UserSession }> = {
  "9899805745": {
    pin: "123456",
    user: {
      id: "usr-1",
      fullname: "Shri Dinesh Jain",
      mobile: "9899805745",
      gender: "Male",
      mid: "PPJ0001",
      role: "ADMIN",
    },
  },
  "9837044877": {
    pin: "123456",
    user: {
      id: "usr-2",
      fullname: "Sahas Kumar Jain",
      mobile: "9837044877",
      gender: "Male",
      mid: "PPJ0002",
      role: "ADMIN",
    },
  },
  "9312237612": {
    pin: "123456",
    user: {
      id: "usr-3",
      fullname: "Atul Jain",
      mobile: "9312237612",
      gender: "Male",
      mid: "PPJ0003",
      role: "MEMBER",
    },
  },
};

export async function getSession(): Promise<UserSession | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

  if (!sessionCookie?.value) {
    return null;
  }

  try {
    const decoded = Buffer.from(sessionCookie.value, "base64").toString("utf-8");
    const parsed = JSON.parse(decoded) as UserSession;
    if (parsed && parsed.mobile) {
      return parsed;
    }
  } catch {
    return null;
  }

  return null;
}

export async function setSession(user: UserSession, remember: boolean = true) {
  const cookieStore = await cookies();
  const serialized = Buffer.from(JSON.stringify(user)).toString("base64");
  
  cookieStore.set(SESSION_COOKIE_NAME, serialized, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: remember ? 60 * 60 * 24 * 30 : 60 * 60 * 24, // 30 days or 1 day
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}
