import { Helmet } from "react-helmet-async";
import type { SEOConfig } from "@/lib/seo";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

interface SEOProps extends SEOConfig {
  children?: React.ReactNode;
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
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const fullUrl = url ? (url.startsWith("http") ? url : `${SITE_URL}${url}`) : SITE_URL;
  const canonical = canonicalUrl ? (canonicalUrl.startsWith("http") ? canonicalUrl : `${SITE_URL}${canonicalUrl}`) : fullUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Social Media - LinkedIn & Behance */}
      <meta property="og:see_also" content="https://www.linkedin.com/company/chiiko/" />
      <meta property="og:see_also" content="https://www.behance.net/chiiko" />
      <link rel="me" href="https://www.linkedin.com/company/chiiko/" />
      <link rel="me" href="https://www.behance.net/chiiko" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish, English" />
      <meta httpEquiv="content-language" content="es, en" />
      <meta name="theme-color" content="#ffffff" />

      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
