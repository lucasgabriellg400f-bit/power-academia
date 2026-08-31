import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://poweracademia.com.br",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

