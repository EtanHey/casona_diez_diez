import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "casona-diez-diez.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "casona-diez-diez.vercel.app/admin",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0,
    },
    {
      url: "casona-diez-diez.vercel.app/admin/dashboard",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0,
    },
    {
      url: "casona-diez-diez.vercel.app/admin/dashboard/offers",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0,
    },
    {
      url: "casona-diez-diez.vercel.app/admin/dashboard/images",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0,
    },
    {
      url: "casona-diez-diez.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.33,
    },
    {
      url: "casona-diez-diez.vercel.app/rooms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.33,
    },
    {
      url: "casona-diez-diez.vercel.app/location",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.33,
    },
  ];
}
