#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://www.chiiko.design";
const DEFAULT_LASTMOD = "2026-06-14";

const LANGS = ["es", "en", "fr", "de", "pt", "it", "ja", "ko", "nl", "zh"];

const BLOG_SLUGS = [
  "google-ecosystem-visit",
  "pinterest-visual-culture-visit",
  "sophie-gomez-digital-identity",
  "unam-democratic-design-workshop",
  "anti-marketing-unam",
  "compufest-2026-sponsors",
];

const BLOG_DATES = {
  "google-ecosystem-visit": "2026-04-07",
  "pinterest-visual-culture-visit": "2026-01-13",
  "sophie-gomez-digital-identity": "2026-06-29",
  "unam-democratic-design-workshop": "2026-05-07",
  "anti-marketing-unam": "2026-06-25",
  "compufest-2026-sponsors": "2026-04-23",
};

const PROJECT_SLUGS = ["eamx", "compufest", "emicarrada", "alancrespo_ai"];

const entries = [
  { loc: "/", esPath: "/", enPath: "/", changefreq: "monthly", priority: "1.0" },
  { loc: "/nosotros", esPath: "/nosotros", enPath: "/about", changefreq: "monthly", priority: "0.8" },
  { loc: "/about", esPath: "/nosotros", enPath: "/about", changefreq: "monthly", priority: "0.8" },
  { loc: "/planes", esPath: "/planes", enPath: "/plans", changefreq: "monthly", priority: "0.9" },
  { loc: "/plans", esPath: "/planes", enPath: "/plans", changefreq: "monthly", priority: "0.9" },
  { loc: "/contacto", esPath: "/contacto", enPath: "/contact", changefreq: "yearly", priority: "0.8" },
  { loc: "/contact", esPath: "/contacto", enPath: "/contact", changefreq: "yearly", priority: "0.8" },
  { loc: "/faq", esPath: "/faq", enPath: "/faq", changefreq: "monthly", priority: "0.7" },
  { loc: "/ayuda", esPath: "/ayuda", enPath: "/help", changefreq: "monthly", priority: "0.6" },
  { loc: "/help", esPath: "/ayuda", enPath: "/help", changefreq: "monthly", priority: "0.6" },
  { loc: "/como-trabajamos", esPath: "/como-trabajamos", enPath: "/how-we-work", changefreq: "monthly", priority: "0.7" },
  { loc: "/how-we-work", esPath: "/como-trabajamos", enPath: "/how-we-work", changefreq: "monthly", priority: "0.7" },
  { loc: "/privacidad", esPath: "/privacidad", enPath: "/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/privacy", esPath: "/privacidad", enPath: "/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/terminos", esPath: "/terminos", enPath: "/terms", changefreq: "yearly", priority: "0.3" },
  { loc: "/terms", esPath: "/terminos", enPath: "/terms", changefreq: "yearly", priority: "0.3" },
  { loc: "/politica-cookies", esPath: "/politica-cookies", enPath: "/cookie-policy", changefreq: "yearly", priority: "0.3" },
  { loc: "/cookie-policy", esPath: "/politica-cookies", enPath: "/cookie-policy", changefreq: "yearly", priority: "0.3" },
  { loc: "/aviso-legal", esPath: "/aviso-legal", enPath: "/legal", changefreq: "yearly", priority: "0.3" },
  { loc: "/legal", esPath: "/aviso-legal", enPath: "/legal", changefreq: "yearly", priority: "0.3" },
  { loc: "/blog", esPath: "/blog", enPath: "/blog", changefreq: "weekly", priority: "0.8", lastmod: "2026-06-29" },
  { loc: "/proyectos", esPath: "/proyectos", enPath: "/projects", changefreq: "monthly", priority: "0.8" },
  { loc: "/projects", esPath: "/proyectos", enPath: "/projects", changefreq: "monthly", priority: "0.8" },
];

for (const slug of BLOG_SLUGS) {
  entries.push({
    loc: `/blog/${slug}`,
    esPath: `/blog/${slug}`,
    enPath: `/blog/${slug}`,
    changefreq: "monthly",
    priority: "0.7",
    lastmod: BLOG_DATES[slug],
  });
}

for (const slug of PROJECT_SLUGS) {
  entries.push({
    loc: `/proyectos/${slug}`,
    esPath: `/proyectos/${slug}`,
    enPath: `/projects/${slug}`,
    changefreq: "monthly",
    priority: "0.7",
  });
  entries.push({
    loc: `/projects/${slug}`,
    esPath: `/proyectos/${slug}`,
    enPath: `/projects/${slug}`,
    changefreq: "monthly",
    priority: "0.7",
  });
}

function hreflangLinks(esPath, enPath) {
  const esHref = `${SITE_URL}${esPath}`;
  const enHref = `${SITE_URL}${enPath}`;
  const lines = LANGS.map((lang) => {
    const href = lang === "es" ? esHref : enHref;
    return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`;
  });
  lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${esHref}" />`);
  return lines.join("\n");
}

const body = entries
  .map(
    (entry) => `  <url>
    <loc>${SITE_URL}${entry.loc}</loc>
    <lastmod>${entry.lastmod ?? DEFAULT_LASTMOD}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
${hreflangLinks(entry.esPath, entry.enPath)}
  </url>`
  )
  .join("\n\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;

writeFileSync(join(__dirname, "../public/sitemap.xml"), xml);
console.log("Generated public/sitemap.xml with", entries.length, "URLs and", LANGS.length, "hreflang alternates per URL");
