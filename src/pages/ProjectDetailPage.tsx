import { IconArrowUpRight } from "@tabler/icons-react";
import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import Masonry from "@/components/ui/Masonry";
import { getProjectPath, getProjectsListPath } from "@/data/projects";
import { getProjectMasonryItems } from "@/data/projectGallery";
import { usePageSeo } from "@/hooks/usePageSeo";
import { useProjectTranslations } from "@/hooks/useProjectTranslations";
import {
  buildBreadcrumbSchema,
  generateCreativeWorkSchema,
  toAbsoluteUrl,
} from "@/lib/seo";
import { getStudioSeoMeta } from "@/lib/seo-studio";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, page, getProject, getProjectDetail } = useProjectTranslations();
  const { hreflangs, canonicalPath } = usePageSeo();
  const { t } = useTranslation();
  const project = getProject(slug);
  const detail = getProjectDetail(slug);
  const masonryItems = slug ? getProjectMasonryItems(slug) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project || !detail) {
    return <Navigate to={getProjectsListPath(lang)} replace />;
  }

  const projectPath = getProjectPath(project.slug, lang);
  const studioSeo = getStudioSeoMeta(lang);
  const creativeWorkSchema = generateCreativeWorkSchema(
    {
      title: project.title,
      description: project.description,
      image: project.image,
      slug: project.slug,
      seoDescription: project.seoDescription,
    },
    projectPath,
    lang
  );
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: t("nav.home"), path: "/" },
    { name: page.title, path: getProjectsListPath(lang) },
    { name: project.title, path: projectPath },
  ]);

  return (
    <>
      <SEO
        title={project.seoTitle ?? project.title}
        description={project.seoDescription ?? project.description}
        keywords={studioSeo.keywords}
        url={projectPath}
        canonicalUrl={canonicalPath}
        hreflangs={hreflangs}
        ogImage={toAbsoluteUrl(project.image)}
        ogImageAlt={project.title}
        schema={[creativeWorkSchema, breadcrumbSchema]}
      />

      <div className="w-full min-h-screen bg-white flex flex-col">
        <div className="flex-grow py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to={getProjectsListPath(lang)}
              className="inline-block text-gray-500 hover:text-black mb-8 transition-colors"
            >
              {page.back}
            </Link>

            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg mb-8 object-cover max-h-[28rem]"
            />

            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.description}
            </p>

            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-black text-black text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#ce4676] hover:border-[#ce4676] hover:text-white group"
              >
                {page.visitWebsite}
                <IconArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}

            <ProjectCaseStudy content={detail} />
          </div>

          <div className="max-w-6xl mx-auto mt-20 px-0">
            <Masonry
              items={masonryItems}
              ease="power3.out"
              duration={0.4}
              stagger={0.03}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.97}
              blurToFocus={false}
              colorShiftOnHover={false}
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
