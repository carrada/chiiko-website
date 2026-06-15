import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { ProjectDetailContent } from "@/data/projectDetails";
import {
  PROJECT_SLUGS,
  type ProjectMeta,
  PROJECT_META,
} from "@/data/projects";
import { normalizeLanguage } from "@/lib/i18n";

export interface LocalizedProject extends ProjectMeta {
  title: string;
  description: string;
  services: string;
  client: string;
}

export function useProjectTranslations() {
  const { t, i18n } = useTranslation();
  const lang = normalizeLanguage(i18n.language);

  const page = useMemo(
    () => ({
      title: t("projects.page.title"),
      description: t("projects.page.description"),
      seoDescription: t("projects.page.seoDescription"),
      back: t("projects.page.back"),
      visitWebsite: t("projects.page.visitWebsite"),
    }),
    [t, i18n.language]
  );

  const labels = useMemo(
    () => ({
      services: t("projects.labels.services"),
      client: t("projects.labels.client"),
      context: t("projects.labels.context"),
      impact: t("projects.labels.impact"),
      uiComponent: t("projects.labels.uiComponent"),
      engineering: t("projects.labels.engineering"),
    }),
    [t, i18n.language]
  );

  const projects = useMemo<LocalizedProject[]>(
    () =>
      PROJECT_SLUGS.map((slug) => ({
        ...PROJECT_META[slug],
        title: t(`projects.items.${slug}.title`),
        description: t(`projects.items.${slug}.description`),
        services: t(`projects.items.${slug}.services`),
        client: t(`projects.items.${slug}.client`),
      })),
    [t, i18n.language]
  );

  const getProject = (slug: string | undefined) =>
    projects.find((project) => project.slug === slug);

  const getProjectDetail = (slug: string | undefined) => {
    if (!slug) return undefined;
    return t(`projects.details.${slug}`, {
      returnObjects: true,
    }) as ProjectDetailContent;
  };

  return {
    lang,
    page,
    labels,
    projects,
    getProject,
    getProjectDetail,
  };
}
