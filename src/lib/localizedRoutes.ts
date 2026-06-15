import {
  getRouteLanguage,
  normalizeLanguage,
  type AppLanguage,
} from "@/lib/i18n";

type RouteLang = "es" | "en";

const ROUTE_PAIRS: Array<{ es: string; en: string }> = [
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

function detectRouteLang(pathname: string): RouteLang | null {
  for (const pair of ROUTE_PAIRS) {
    if (pathname === pair.es || pathname.startsWith(`${pair.es}/`)) {
      return "es";
    }
    if (pathname === pair.en || pathname.startsWith(`${pair.en}/`)) {
      return "en";
    }
  }
  return null;
}

export function getLocalizedPath(pathname: string, targetLang: AppLanguage): string {
  const targetRouteLang = getRouteLanguage(targetLang);
  const currentRouteLang = detectRouteLang(pathname);

  if (!currentRouteLang || currentRouteLang === targetRouteLang) {
    return pathname;
  }

  for (const pair of ROUTE_PAIRS) {
    if (pathname === pair[currentRouteLang]) {
      return pair[targetRouteLang];
    }
    if (pathname.startsWith(`${pair[currentRouteLang]}/`)) {
      return pathname.replace(pair[currentRouteLang], pair[targetRouteLang]);
    }
  }

  return pathname;
}

export function getRouteType(pathname: string): string | null {
  const routeMap: Record<string, string> = {
    "/nosotros": "about",
    "/about": "about",
    "/planes": "plans",
    "/plans": "plans",
    "/contacto": "contact",
    "/contact": "contact",
    "/proyectos": "projects",
    "/projects": "projects",
    "/como-trabajamos": "method",
    "/how-we-work": "method",
    "/blog": "blog",
  };

  if (routeMap[pathname]) return routeMap[pathname];

  if (pathname.startsWith("/proyectos/") || pathname.startsWith("/projects/")) {
    return "projects";
  }

  return null;
}

export function syncPathWithLanguage(
  pathname: string,
  language: string
): string {
  return getLocalizedPath(pathname, normalizeLanguage(language));
}
