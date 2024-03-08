import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sharon-fitness.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://sharon-fitness.vercel.app/admin",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0,
    },
    {
      url: "https://sharon-fitness.vercel.app/admin/dashboard",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0,
    },
    {
      url: "https://sharon-fitness.vercel.app/admin/dashboard/offers",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0,
    },
    {
      url: "https://sharon-fitness.vercel.app/admin/dashboard/images",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0,
    },
    {
      url: "https://sharon-fitness.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.33,
    },
    {
      url: "https://sharon-fitness.vercel.app/rooms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.33,
    },
    {
      url: "https://sharon-fitness.vercel.app/location",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.33,
    },
  ];
}
