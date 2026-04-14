export default function sitemap() {
  const base = "https://www.thedigifac.com";

  return [
    "",
    "/about",
    "/services",
    "/industries",
    "/client-stories",
    "/insights",
    "/contact",
    "/careers"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));
}
