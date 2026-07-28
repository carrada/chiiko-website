import type { AppLanguage } from "@/lib/i18n";
import { getRouteLanguage } from "@/lib/i18n";

export const PROJECT_SLUGS = [
  "veraz",
  "eamx",
  "compufest",
  "emicarrada",
  "alancrespo_ai",
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export interface ProjectMeta {
  slug: ProjectSlug;
  image: string;
  websiteUrl?: string;
}

export const PROJECT_META: Record<ProjectSlug, ProjectMeta> = {
  veraz: {
    slug: "veraz",
    image: "/VerazMedia/Verazcover.jpg",
    websiteUrl: "https://veraz.app",
  },
  eamx: {
    slug: "eamx",
    image: "/EAMX.png",
    websiteUrl: "https://eamx-website.vercel.app/",
  },
  compufest: {
    slug: "compufest",
    image: "/COMPUFEST.png",
    websiteUrl: "https://www.compufest.cc/",
  },
  emicarrada: {
    slug: "emicarrada",
    image: "/EMICARRADA.png",
    websiteUrl: "https://www.emicarrada.com/",
  },
  alancrespo_ai: {
    slug: "alancrespo_ai",
    image: "/ALANCRESPOMURILLO.png",
  },
};

export function getProjectPath(slug: string, lang: AppLanguage): string {
  return getRouteLanguage(lang) === "es"
    ? `/proyectos/${slug}`
    : `/projects/${slug}`;
}

export function getProjectsListPath(lang: AppLanguage): string {
  return getRouteLanguage(lang) === "es" ? "/proyectos" : "/projects";
}
