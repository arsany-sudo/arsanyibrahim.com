import type { MetadataRoute } from "next";
import { COMPANIES, POSTS, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/writing`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/press`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const companyRoutes: MetadataRoute.Sitemap = COMPANIES.map((c) => ({
    url: `${base}/companies/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const postRoutes: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${base}/writing/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...companyRoutes, ...postRoutes];
}
