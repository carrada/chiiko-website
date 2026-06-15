#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://www.chiiko.design";
const LASTMOD = "2026-06-14";

const LANGS = ["es", "en", "fr", "de", "pt", "it", "ja", "ko", "nl", "zh"];

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
];

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
    <lastmod>${LASTMOD}</lastmod>
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
console.log("Generated public/sitemap.xml with", LANGS.length, "hreflang alternates per URL");
