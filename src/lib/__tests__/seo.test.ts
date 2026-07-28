import {
  buildPageTitle,
  buildBreadcrumbSchema,
  generateBlogListSchema,
  generateBlogPostingSchema,
  generateCreativeWorkSchema,
  generateHomeSchemas,
  generateProjectsListSchema,
  generateWebSiteSchema,
  toAbsoluteUrl,
  SITE_URL,
} from "../seo";

describe("SEO schema generators", () => {
  it("buildPageTitle avoids duplicate brand suffix", () => {
    expect(buildPageTitle("Blog | Chiikö")).toBe("Blog | Chiikö");
    expect(buildPageTitle("About")).toBe("About | Chiiko");
  });

  it("toAbsoluteUrl resolves relative paths", () => {
    expect(toAbsoluteUrl("/blog/test.jpg")).toBe(`${SITE_URL}/blog/test.jpg`);
    expect(toAbsoluteUrl("https://example.com/a.jpg")).toBe("https://example.com/a.jpg");
  });

  it("generateWebSiteSchema includes all supported languages", () => {
    const schema = generateWebSiteSchema();
    expect(schema.inLanguage).toHaveLength(10);
    expect(schema.inLanguage).toContain("es");
    expect(schema.inLanguage).toContain("zh-CN");
  });

  it("generateHomeSchemas returns organization, local business and website", () => {
    const schemas = generateHomeSchemas();
    expect(schemas).toHaveLength(4);
    expect(schemas[0]["@type"]).toBe("Organization");
    expect(schemas[1]["@type"]).toBe("LocalBusiness");
    expect(schemas[2]["@type"]).toBe("WebSite");
    expect(schemas[0].geo).toEqual({
      "@type": "GeoCoordinates",
      latitude: 19.4326,
      longitude: -99.1332,
    });
  });

  it("generateBlogPostingSchema builds article metadata", () => {
    const schema = generateBlogPostingSchema(
      {
        title: "Test Post",
        description: "Test excerpt",
        slug: "test-post",
        image: "/blog/test/inicio.jpg",
        datePublished: "2026-06-01",
        section: "Culture",
      },
      "es"
    );

    expect(schema["@type"]).toBe("BlogPosting");
    expect(schema.headline).toBe("Test Post");
    expect(schema.image).toBe(`${SITE_URL}/blog/test/inicio.jpg`);
    expect(schema.inLanguage).toBe("es");
    expect(schema.articleSection).toBe("Culture");
  });

  it("generateBlogListSchema builds collection page with item list", () => {
    const schema = generateBlogListSchema(
      [{ title: "Post A", slug: "post-a", datePublished: "2026-06-01" }],
      "/blog",
      "Blog"
    );

    expect(schema["@type"]).toBe("CollectionPage");
    expect(schema.mainEntity.itemListElement).toHaveLength(1);
    expect(schema.mainEntity.itemListElement[0].url).toBe(`${SITE_URL}/blog/post-a`);
  });

  it("generateCreativeWorkSchema builds project detail metadata", () => {
    const schema = generateCreativeWorkSchema(
      {
        title: "EAMX",
        description: "Project description",
        image: "/EAMX.png",
        slug: "eamx",
      },
      "/proyectos/eamx",
      "es"
    );

    expect(schema["@type"]).toBe("CreativeWork");
    expect(schema.url).toBe(`${SITE_URL}/proyectos/eamx`);
    expect(schema.inLanguage).toBe("es");
  });

  it("generateProjectsListSchema builds localized project URLs", () => {
    const schema = generateProjectsListSchema(
      [{ title: "EAMX", slug: "eamx", description: "Project description" }],
      "/projects",
      "Projects",
      "en"
    );

    expect(schema.mainEntity.itemListElement[0].url).toBe(`${SITE_URL}/projects/eamx`);
  });

  it("buildBreadcrumbSchema converts paths to absolute URLs", () => {
    const schema = buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]);

    expect(schema["@type"]).toBe("BreadcrumbList");
    expect(schema.itemListElement[1].item).toBe(`${SITE_URL}/blog`);
  });
});
