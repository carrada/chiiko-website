import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CardSwap from "@/components/ui/CardSwap";
import type { CardSwapItem } from "@/components/ui/CardSwap";
import { EXTERNAL_PROJECT_STACK } from "@/data/projectsPageStack";
import { getProjectPath, getProjectsListPath } from "@/data/projects";
import { usePageSeo } from "@/hooks/usePageSeo";
import { useProjectTranslations } from "@/hooks/useProjectTranslations";
import {
  buildBreadcrumbSchema,
  generateProjectsListSchema,
} from "@/lib/seo";
import { getStudioSeoMeta } from "@/lib/seo-studio";

type StackAction =
  | { type: "detail"; slug: string }
  | { type: "external"; href: string };

export default function ProjectsPage() {
  const { lang, page, projects } = useProjectTranslations();
  const { hreflangs, canonicalPath } = usePageSeo();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const listPath = getProjectsListPath(lang);
  const studioSeo = getStudioSeoMeta(lang);

  const { swapItems, stackActions } = useMemo(() => {
    const items: CardSwapItem[] = [];
    const actions: StackAction[] = [];

    for (const project of projects) {
      items.push({ image: project.image, alt: project.title });
      actions.push({ type: "detail", slug: project.slug });
    }

    for (const external of EXTERNAL_PROJECT_STACK) {
      items.push({
        image: external.image,
        alt: external.title,
        backgroundColor: external.backgroundColor,
      });
      actions.push({ type: "external", href: external.href });
    }

    return { swapItems: items, stackActions: actions };
  }, [projects]);

  const projectsListSchema = generateProjectsListSchema(
    projects.map((project) => ({
      title: project.title,
      slug: project.slug,
      description: project.description,
    })),
    listPath,
    page.title,
    lang,
  );
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: t("nav.home"), path: "/" },
    { name: page.title, path: listPath },
  ]);

  return (
    <>
      <SEO
        title={page.seoTitle}
        description={page.seoDescription}
        keywords={studioSeo.keywords}
        url={listPath}
        canonicalUrl={canonicalPath}
        hreflangs={hreflangs}
        schema={[projectsListSchema, breadcrumbSchema]}
      />

      <div className="flex min-h-screen w-full flex-col bg-white">
        <div className="flex-grow px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h1 className="mb-8 text-4xl font-bold text-black md:text-6xl">
              {page.title}
            </h1>
            <div className="mb-12 max-w-2xl md:mb-16">
              <p className="text-lg text-gray-600">{page.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {page.hints}
              </p>
            </div>

            <div className="relative mx-auto h-[min(72vh,580px)] w-full max-w-3xl">
              <CardSwap
                items={swapItems}
                theme="light"
                width={400}
                height={280}
                delay={4500}
                autoplay
                pauseOnHover
                draggable
                cardRadius={20}
                onCardClick={(index) => {
                  const action = stackActions[index];
                  if (!action) return;
                  if (action.type === "detail") {
                    navigate(getProjectPath(action.slug, lang));
                    return;
                  }
                  window.open(action.href, "_blank", "noopener,noreferrer");
                }}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
