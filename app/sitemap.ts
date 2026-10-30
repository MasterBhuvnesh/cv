import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://resume.bhuvneshverma.dev/", lastModified: new Date() }];
}
