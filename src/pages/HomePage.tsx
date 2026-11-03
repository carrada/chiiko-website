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
import { COLORS } from "@/constants";
import { LandingSectionHeader } from "@/components/landing/LandingSectionHeader";
import {
  landingSection,
  landingBody,
  landingDisplayAccent,
  landingDisplaySection,
  landingDisplayKicker,
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
            title={t("section.method")}
            lead={t("section.methodLead")}
          />
          <WorkProcess />
        </LandingSection>

        <LandingSection id="projects">
          <LandingSectionHeader
            title={t("section.projects")}
            lead={t("section.projectsLead")}
          />
          <CometCardDemo />
        </LandingSection>

        <LandingSection id="services">
          <LandingSectionHeader
            title={t("section.services")}
            lead={t("section.servicesLead")}
          />
          <ServicesCards />
        </LandingSection>

        <LandingSection id="who-we-work">
          <LandingSectionHeader title={t("section.whoWeWork")} />
          <WhoWeWorkWithDemo />
        </LandingSection>

        <LandingSection id="contact" className="pb-20 md:pb-28">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
            <p className={`${landingDisplayAccent} max-w-4xl text-black`}>
              <span style={{ color: COLORS.PRIMARY }}>No,</span>{" "}
              {t("cta.notForEveryone")}
            </p>
            <p className={landingBody}>{t("cta.aligned")}</p>
            <p className={`${landingDisplayKicker} max-w-3xl font-bold text-black`}>
              {t("cta.whatWeDo")}
            </p>
            <h2 className={`${landingDisplaySection} mt-2 md:mt-4`}>
              {t("cta.ready")}
            </h2>
            <ProjectInitButton />
          </div>
        </LandingSection>

        <Footer />
      </div>
    </>
  );
}
