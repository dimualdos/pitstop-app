import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://pitstop-online.ru/sitemap.xml",
    host: "https://pitstop-online.ru",
  };
}
