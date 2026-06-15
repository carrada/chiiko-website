import { Link } from "react-router-dom";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { PROJECTS, getProjectPath } from "@/data/projects";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";

  return (
    <>
      <SEO
        title={lang === "en" ? "Projects" : "Proyectos"}
        description={
          lang === "en"
            ? "Explore our projects and case studies"
            : "Explora nuestros proyectos y casos de estudio"
        }
        url={lang === "en" ? "/projects" : "/proyectos"}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full min-h-screen bg-white flex flex-col"
      >
        <ResizableNavbarDemo />

        <div className="flex-grow py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-8">
              {lang === "en" ? "Projects" : "Proyectos"}
            </h1>
            <p className="text-lg text-gray-600 mb-16">
              {lang === "en"
                ? "Here you can see our latest projects and case studies."
                : "Aquí puedes ver nuestros últimos proyectos y casos de estudio."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
              {PROJECTS.map((project) => (
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
                    <p className="font-normal text-sm mt-1">{project.description}</p>
                    <p className="font-normal text-xs mt-3 opacity-90">
                      <span className="font-semibold">Servicios:</span>{" "}
                      {project.services}
                    </p>
                    <p className="font-normal text-xs mt-1 opacity-90">
                      <span className="font-semibold">Cliente:</span>{" "}
                      {project.client}
                    </p>
                  </DirectionAwareHover>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </motion.div>
    </>
  );
}
