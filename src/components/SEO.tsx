import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import type { SEOConfig } from "@/lib/seo";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, buildPageTitle, toAbsoluteUrl } from "@/lib/seo";
import {
  GEO_PLACE,
  GEO_REGION,
  HTML_LANG,
  normalizeLanguage,
  OG_LOCALE,
} from "@/lib/i18n";

interface SEOProps extends SEOConfig {
  children?: React.ReactNode;
  hreflangs?: { lang: string; href: string }[];
}

function resolveAbsoluteUrl(url?: string): string {
  if (!url) return SITE_URL;
  return toAbsoluteUrl(url);
}

export default function SEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt,
  ogType = "website",
  url,
  canonicalUrl,
  author = SITE_NAME,
  publishedTime,
  modifiedTime,
  articleSection,
  articleAuthor,
  keywords,
  schema,
  hreflangs,
  noindex = false,
}: SEOProps) {
  const { i18n } = useTranslation();
  const currentLang = normalizeLanguage(i18n.language || "es");
  const htmlLang = HTML_LANG[currentLang];
  const fullTitle = buildPageTitle(title);
  const fullUrl = resolveAbsoluteUrl(url);
  const canonical = canonicalUrl ? resolveAbsoluteUrl(canonicalUrl) : fullUrl;
  const absoluteOgImage = toAbsoluteUrl(ogImage);
  const imageAlt = ogImageAlt || ogTitle || fullTitle;

  const ogLocale = OG_LOCALE[currentLang];
  const alternateLocales = Object.entries(OG_LOCALE)
    .filter(([code]) => code !== currentLang)
    .map(([, locale]) => locale);

  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta httpEquiv="content-language" content={htmlLang} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />

      {hreflangs?.map((item) => (
        <link key={item.lang} rel="alternate" hrefLang={item.lang} href={item.href} />
      ))}

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={ogLocale} />
      {alternateLocales.map((locale) => (
        <meta key={locale} property="og:locale:alternate" content={locale} />
      ))}

      {ogType === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === "article" && articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      {ogType === "article" && articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chiiko_design" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      <link rel="me" href="https://www.linkedin.com/company/chiiko/" />
      <link rel="me" href="https://www.behance.net/chiiko" />

      <meta name="geo.region" content={GEO_REGION[currentLang]} />
      <meta name="geo.placename" content={GEO_PLACE[currentLang]} />
      <meta name="geo.position" content="19.4326;-99.1332" />
      <meta name="ICBM" content="19.4326, -99.1332" />

      <meta
        name="robots"
        content={
          noindex
            ? "noindex, follow"
            : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        }
      />
      <meta name="theme-color" content="#1a1a2e" />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
}
