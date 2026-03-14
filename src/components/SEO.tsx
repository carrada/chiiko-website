import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import type { SEOConfig } from "@/lib/seo";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

interface SEOProps extends SEOConfig {
  children?: React.ReactNode;
  hreflangs?: { lang: string; href: string }[];
}

export default function SEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  url,
  canonicalUrl,
  author = SITE_NAME,
  schema,
  hreflangs,
  noindex = false,
}: SEOProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "es";
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const fullUrl = url ? (url.startsWith("http") ? url : `${SITE_URL}${url}`) : SITE_URL;
  const canonical = canonicalUrl ? (canonicalUrl.startsWith("http") ? canonicalUrl : `${SITE_URL}${canonicalUrl}`) : fullUrl;

  // Determine locale dynamically
  const ogLocale = currentLang === "en" ? "en_US" : "es_MX";
  const alternateLocale = currentLang === "en" ? "es_MX" : "en_US";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* hreflang for alternate language versions */}
      {hreflangs &&
        hreflangs.map((item) => (
          <link key={item.lang} rel="alternate" hrefLang={item.lang} href={item.href} />
        ))}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={SITE_NAME} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={alternateLocale} />

      {/* Twitter Card (universal standard for all platforms) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chiiko_design" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {/* LinkedIn & Behance Profile Links */}
      <link rel="me" href="https://www.linkedin.com/company/chiiko/" />
      <link rel="me" href="https://www.behance.net/chiiko" />

      {/* Geo targeting — Ciudad de México */}
      <meta name="geo.region" content="MX-CMX" />
      <meta name="geo.placename" content="Ciudad de México" />
      <meta name="geo.position" content="19.4326;-99.1332" />
      <meta name="ICBM" content="19.4326, -99.1332" />

      {/* Additional Meta Tags */}
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}
      />
      <meta name="theme-color" content="#1a1a2e" />

      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
}
