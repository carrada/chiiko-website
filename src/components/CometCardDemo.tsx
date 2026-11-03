import { CometCard } from "@/components/ui/comet-card";
import { LANDING_PROJECT_CARDS } from "@/data/landingProjectCards";
import { getProjectPath } from "@/data/projects";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useTranslation } from "react-i18next";

export default function CometCardDemo() {
  const { t } = useTranslation();
  const { language } = useAppLanguage();

  const openCard = (link: string, slug?: string) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }
    if (slug) {
      window.location.assign(getProjectPath(slug, language));
    }
  };

  return (
    <div className="mx-auto mt-12 max-w-7xl md:mt-16">
      <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 md:gap-12">
        {LANDING_PROJECT_CARDS.map((project) => {
          const title =
            project.title ??
            (project.slug ? t(`projects.items.${project.slug}.title`) : project.id);
          const hasImage = Boolean(project.image);
          const linkLabel = project.link
            .replace(/^https?:\/\//i, "")
            .replace(/\/$/, "");

          return (
            <CometCard key={project.id} className="mx-auto w-full max-w-xs">
              <div
                role="link"
                tabIndex={0}
                className="relative cursor-pointer overflow-hidden rounded-2xl"
                style={{ backgroundColor: project.backgroundColor }}
                onClick={() => openCard(project.link, project.slug)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openCard(project.link, project.slug);
                  }
                }}
              >
                {hasImage ? (
                  <img
                    src={project.image}
                    alt={title}
                    className={`h-72 w-full md:h-80 ${
                      project.imageFit === "cover"
                        ? "object-cover"
                        : "object-contain p-10 md:p-12"
                    }`}
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-72 flex-col items-center justify-center gap-2 px-6 text-center md:h-80">
                    <p className="font-inter text-xl font-bold text-black md:text-2xl">
                      {title}
                    </p>
                    <p className="font-inter text-sm text-neutral-500 md:text-base">
                      {linkLabel}
                    </p>
                  </div>
                )}
              </div>
            </CometCard>
          );
        })}
      </div>
    </div>
  );
}
