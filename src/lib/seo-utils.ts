import { SEO_PAGES, SITE_URL } from "./seo";

export type SEOPageKey = keyof typeof SEO_PAGES;

const PAGE_ROUTES: Record<SEOPageKey, { es: string; en: string }> = {
  home: { es: "/", en: "/" },
  about: { es: "/nosotros", en: "/about" },
  plans: { es: "/planes", en: "/plans" },
  contact: { es: "/contacto", en: "/contact" },
  faq: { es: "/faq", en: "/faq" },
  help: { es: "/ayuda", en: "/help" },
  privacy: { es: "/privacidad", en: "/privacy" },
  terms: { es: "/terminos", en: "/terms" },
  cookies: { es: "/politica-cookies", en: "/cookie-policy" },
  legal: { es: "/aviso-legal", en: "/legal" },
  how_we_work: { es: "/como-trabajamos", en: "/how-we-work" },
};

export function getPageSEOProps(pageKey: SEOPageKey, langKey: "es" | "en") {
  const pageSeo = SEO_PAGES[pageKey][langKey];
  const routes = PAGE_ROUTES[pageKey];

  return {
    title: pageSeo.title,
    description: pageSeo.description,
    url: routes[langKey],
    hreflangs: [
      { lang: "es", href: `${SITE_URL}${routes.es}` },
      { lang: "en", href: `${SITE_URL}${routes.en}` },
    ],
  };
}

export function getPageSEOPropsWithDefault(pageKey: SEOPageKey, langKey: "es" | "en") {
  const base = getPageSEOProps(pageKey, langKey);
  return {
    ...base,
    hreflangs: [
      ...base.hreflangs,
      { lang: "x-default", href: `${SITE_URL}${PAGE_ROUTES[pageKey].es}` },
    ],
  };
}
