import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.susansapkota.com.np",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}