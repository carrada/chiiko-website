import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { getProjectPath, getProjectsListPath } from "@/data/projects";
import { usePageSeo } from "@/hooks/usePageSeo";
import { useProjectTranslations } from "@/hooks/useProjectTranslations";
import {
  buildBreadcrumbSchema,
  generateProjectsListSchema,
} from "@/lib/seo";
import { getStudioSeoMeta } from "@/lib/seo-studio";

export default function ProjectsPage() {
  const { lang, page, labels, projects } = useProjectTranslations();
  const { hreflangs, canonicalPath } = usePageSeo();
  const { t } = useTranslation();
  const listPath = getProjectsListPath(lang);
  const studioSeo = getStudioSeoMeta(lang);

  const projectsListSchema = generateProjectsListSchema(
    projects.map((project) => ({
      title: project.title,
      slug: project.slug,
      description: project.description,
    })),
    listPath,
    page.title,
    lang
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

      <div className="w-full min-h-screen bg-white flex flex-col">
        <div className="flex-grow py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-8">
              {page.title}
            </h1>
            <p className="text-lg text-gray-600 mb-16">{page.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  to={getProjectPath(project.slug, lang)}
                  className="w-full flex justify-center"
                >
                  <DirectionAwareHover
                    imageUrl={project.image}
                    className="w-full max-w-md h-72 md:h-96 md:w-full md:max-w-none"
                    childrenClassName="max-w-sm"
                  >
                    <p className="font-bold text-xl">{project.title}</p>
                    <p className="font-normal text-sm mt-1">
                      {project.description}
                    </p>
                    <p className="font-normal text-xs mt-3 opacity-90">
                      <span className="font-semibold">{labels.services}:</span>{" "}
                      {project.services}
                    </p>
                    <p className="font-normal text-xs mt-1 opacity-90">
                      <span className="font-semibold">{labels.client}:</span>{" "}
                      {project.client}
                    </p>
                  </DirectionAwareHover>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
