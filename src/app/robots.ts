import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/search-var-vadhu/", "/download/", "/api/"],
    },
    sitemap: "https://www.ppjain.com/sitemap.xml",
  };
}
