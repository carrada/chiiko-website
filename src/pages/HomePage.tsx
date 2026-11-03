import HeroScrollDemo from "@/components/HeroScrollDemo";
import ValuePropositions from "@/components/ValuePropositions";
import WorkProcess from "@/components/WorkProcess";
import CometCardDemo from "@/components/CometCardDemo";
import ServicesCards from "@/components/ServicesCards";
import WhoWeWorkWithDemo from "@/components/WhoWeWorkWithDemo";
import { ProjectInitButton } from "@/components/ProjectInitButton";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { generateHomeSchemas } from "@/lib/seo";
import { getStudioSeoMeta } from "@/lib/seo-studio";
import { getPageSeo } from "@/lib/seo-meta";
import { buildHreflangs } from "@/lib/seo-i18n";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useLocation } from "react-router-dom";
import { LandingSectionHeader } from "@/components/landing/LandingSectionHeader";
import { LandingAccentText } from "@/components/landing/LandingAccentText";
import {
  landingSection,
  landingDisplaySection,
} from "@/components/landing/landingStyles";

function LandingSection({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`border-t border-neutral-100 bg-white ${landingSection} ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export default function HomePage() {
  const { t } = useTranslation();
  const { language } = useAppLanguage();
  const location = useLocation();
  const seo = getPageSeo("home", language);
  const studioSeo = getStudioSeoMeta(language);

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={studioSeo.keywords}
        url="/"
        schema={generateHomeSchemas(language)}
        hreflangs={buildHreflangs(location.pathname)}
      />

      <div className="w-full bg-white">
        <section id="home" className="bg-white">
          <HeroScrollDemo />
          <ValuePropositions />
        </section>

        <LandingSection id="method">
          <LandingSectionHeader
            titleBefore={t("section.method.titleBefore")}
            titleAccent={t("section.method.titleAccent")}
            titleAfter={t("section.method.titleAfter")}
            lead={t("section.methodLead")}
          />
          <WorkProcess />
        </LandingSection>

        <LandingSection id="projects">
          <LandingSectionHeader
            titleBefore={t("section.projects.titleBefore")}
            titleAccent={t("section.projects.titleAccent")}
            titleAfter={t("section.projects.titleAfter")}
            lead={t("section.projectsLead")}
          />
          <CometCardDemo />
        </LandingSection>

        <LandingSection id="services">
          <LandingSectionHeader
            titleBefore={t("section.services.titleBefore")}
            titleAccent={t("section.services.titleAccent")}
            titleAfter={t("section.services.titleAfter")}
            lead={t("section.servicesLead")}
          />
          <ServicesCards />
        </LandingSection>

        <LandingSection id="who-we-work">
          <LandingSectionHeader
            titleBefore={t("section.whoWeWork.titleBefore")}
            titleAccent={t("section.whoWeWork.titleAccent")}
            titleAfter={t("section.whoWeWork.titleAfter")}
          />
          <WhoWeWorkWithDemo />
        </LandingSection>

        <LandingSection id="contact" className="pb-20 md:pb-28">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center md:gap-10">
            <h2 className={landingDisplaySection}>
              {t("cta.ready.before")}
              <LandingAccentText>{t("cta.ready.accent")}</LandingAccentText>
              {t("cta.ready.after")}
            </h2>
            <ProjectInitButton />
          </div>
        </LandingSection>

        <Footer />
      </div>
    </>
  );
}
