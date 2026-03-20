import { apps } from "@/app/data/app";

export default function sitemap() {
  const baseUrl = "https://policies.yourbrand.com";

  const appRoutes = Object.keys(apps).map((key) => ({
    url: `${baseUrl}/${key}/privacy`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...appRoutes,
  ];
}
