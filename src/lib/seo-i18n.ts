import { SITE_URL } from "@/lib/seo";
import {
  type AppLanguage,
  APP_LANGUAGES,
  usesSpanishRoutes,
} from "@/lib/i18n";

type RoutePair = { es: string; en: string };

const ROUTE_PAIRS: RoutePair[] = [
  { es: "/proyectos", en: "/projects" },
  { es: "/nosotros", en: "/about" },
  { es: "/como-trabajamos", en: "/how-we-work" },
  { es: "/planes", en: "/plans" },
  { es: "/contacto", en: "/contact" },
  { es: "/privacidad", en: "/privacy" },
  { es: "/ayuda", en: "/help" },
  { es: "/terminos", en: "/terms" },
  { es: "/politica-cookies", en: "/cookie-policy" },
  { es: "/aviso-legal", en: "/legal" },
];

function resolvePaths(pathname: string): { esPath: string; enPath: string } | null {
  for (const pair of ROUTE_PAIRS) {
    if (pathname === pair.es || pathname.startsWith(`${pair.es}/`)) {
      return { esPath: pathname, enPath: pathname.replace(pair.es, pair.en) };
    }
    if (pathname === pair.en || pathname.startsWith(`${pair.en}/`)) {
      return { esPath: pathname.replace(pair.en, pair.es), enPath: pathname };
    }
  }
  if (pathname === "/" || pathname === "/faq" || pathname === "/blog" || pathname.startsWith("/blog/")) {
    return { esPath: pathname, enPath: pathname };
  }
  return null;
}

export function buildHreflangs(pathname: string): { lang: string; href: string }[] {
  const paths = resolvePaths(pathname);
  const esHref = `${SITE_URL}${paths?.esPath ?? pathname}`;
  const enHref = `${SITE_URL}${paths?.enPath ?? pathname}`;

  const entries = APP_LANGUAGES.map((lang) => ({
    lang,
    href: usesSpanishRoutes(lang) ? esHref : enHref,
  }));

  return [
    ...entries,
    { lang: "x-default", href: esHref },
  ];
}

export function getCanonicalPath(pathname: string, lang: AppLanguage): string {
  const paths = resolvePaths(pathname);
  if (!paths) return pathname;
  return usesSpanishRoutes(lang) ? paths.esPath : paths.enPath;
}
