export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://policies.yourbrand.com/sitemap.xml",
  };
}
