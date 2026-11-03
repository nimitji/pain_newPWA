import { MetadataRoute } from "next";
import { newsArticles, magazines, committeeMembers } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ppjain.com";

  const staticRoutes = [
    "",
    "/about-us",
    "/member-list",
    "/magazin",
    "/news",
    "/committees",
    "/login",
    "/register",
    "/forgot-password",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const newsRoutes = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const magazineRoutes = magazines.map((mag) => ({
    url: `${baseUrl}/magazine/${mag.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const committeeRoutes = committeeMembers.map((comm) => ({
    url: `${baseUrl}/committee/${comm.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes, ...magazineRoutes, ...committeeRoutes];
}
