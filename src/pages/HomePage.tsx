import HeroScrollDemo from "@/components/HeroScrollDemo";
import ValuePropositions from "@/components/ValuePropositions";
import WorkProcess from "@/components/WorkProcess";
import CometCardDemo from "@/components/CometCardDemo";
import ServicesCards from "@/components/ServicesCards";
import WhoWeWorkWithDemo from "@/components/WhoWeWorkWithDemo";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import { ProjectInitButton } from "@/components/ProjectInitButton";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { generateHomeSchemas } from "@/lib/seo";
import { getStudioSeoMeta } from "@/lib/seo-studio";
import { getPageSeo } from "@/lib/seo-meta";
import { buildHreflangs } from "@/lib/seo-i18n";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useLocation } from "react-router-dom";
import { LAYOUT_SPACING, COLORS } from "@/constants";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center items-center px-4" style={{marginTop: LAYOUT_SPACING.SECTION_GAP.marginTop, marginBottom: LAYOUT_SPACING.SECTION_GAP.marginBottom}}>
      <h2 className="text-6xl tablet:text-[9rem] md:text-[14rem] font-inter font-bold text-black text-center leading-[0.9] md:leading-none">
        {children}
      </h2>
    </div>
  );
}

function CallToActionSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center items-center px-4" style={{marginTop: LAYOUT_SPACING.SECTION_GAP.marginTop, marginBottom: LAYOUT_SPACING.SECTION_GAP.marginBottom}}>
      {children}
    </div>
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
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <ResizableNavbarDemo />
        <div className="py-10 tablet:py-16 md:py-24"></div>

        <section id="home">
          <HeroScrollDemo />
          <ValuePropositions />
        </section>

        <section id="method">
          <SectionTitle>{t('section.method')}</SectionTitle>
          <WorkProcess />
        </section>

        <section id="projects">
          <SectionTitle>{t('section.projects')}</SectionTitle>
          <CometCardDemo />
        </section>

        <section id="services">
          <SectionTitle>{t('section.services')}</SectionTitle>
          <ServicesCards />
        </section>

        <section id="who-we-work">
          <div className="w-full flex justify-center items-center px-4" style={{marginTop: LAYOUT_SPACING.SECTION_GAP.marginTop, marginBottom: LAYOUT_SPACING.SECTION_GAP_SMALL.marginBottom}}>
            <h2 className="text-5xl tablet:text-7xl md:text-[14rem] font-inter font-bold text-black text-center leading-[0.9] md:leading-none">
              {t('section.whoWeWork')}
            </h2>
          </div>

          <WhoWeWorkWithDemo />
        </section>

        <section id="contact">
        <CallToActionSection>
          <div className="flex flex-col items-center gap-5 tablet:gap-7 md:gap-8 px-2 md:px-0">
            <p className="text-5xl tablet:text-6xl md:text-7xl font-inter font-bold text-black text-center max-w-4xl tablet:max-w-5xl md:max-w-6xl leading-[1.08] md:leading-relaxed">
              <span style={{color: COLORS.PRIMARY}}>No,</span> {t('cta.notForEveryone')}
            </p>
            <p className="text-lg tablet:text-xl md:text-3xl font-inter font-bold text-black text-center max-w-3xl tablet:max-w-4xl md:max-w-5xl leading-[1.35] md:leading-relaxed px-2 md:px-0">
              {t('cta.aligned')}
            </p>
          </div>
        </CallToActionSection>
        
        <CallToActionSection>
          <div className="flex flex-col items-center gap-7 tablet:gap-10 md:gap-12 px-2 md:px-0">
            <h2 className="text-6xl tablet:text-[9rem] md:text-[14rem] font-inter font-bold text-black text-center leading-[0.88] md:leading-none">
              {t('cta.whyChooseUs')}
            </h2>
            <p className="text-lg tablet:text-2xl md:text-4xl font-inter font-bold text-black text-center max-w-4xl tablet:max-w-5xl leading-[1.3] md:leading-normal px-2 md:px-0">
              {t('cta.whatWeDo')}
            </p>
          </div>
        </CallToActionSection>
        
        <div className="w-full flex justify-center items-center px-4 py-20 tablet:py-32">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 tablet:gap-16 md:gap-20">
              <div className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
                <div className="text-[8rem] tablet:text-[10rem] md:text-[12rem] font-bold" style={{color: COLORS.PRIMARY}}>
                  01
                </div>
                <h3 className="text-4xl tablet:text-5xl md:text-5xl font-bold text-black">
                  {t('benefit1.title')}
                </h3>
                <p className="text-xl tablet:text-xl md:text-2xl text-gray-700 leading-relaxed">
                  {t('benefit1.desc')}
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
                <div className="text-[8rem] tablet:text-[10rem] md:text-[12rem] font-bold" style={{color: COLORS.PRIMARY}}>
                  02
                </div>
                <h3 className="text-4xl tablet:text-5xl md:text-5xl font-bold text-black">
                  {t('benefit2.title')}
                </h3>
                <p className="text-xl tablet:text-xl md:text-2xl text-gray-700 leading-relaxed">
                  {t('benefit2.desc')}
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
                <div className="text-[8rem] tablet:text-[10rem] md:text-[12rem] font-bold" style={{color: COLORS.PRIMARY}}>
                  03
                </div>
                <h3 className="text-4xl tablet:text-5xl md:text-5xl font-bold text-black">
                  {t('benefit3.title')}
                </h3>
                <p className="text-xl tablet:text-xl md:text-2xl text-gray-700 leading-relaxed">
                  {t('benefit3.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full flex justify-center items-center px-4 py-28" style={{marginTop: LAYOUT_SPACING.SECTION_GAP_LARGE.marginTop, marginBottom: LAYOUT_SPACING.SECTION_GAP_LARGE.marginBottom}}>
          <div className="flex flex-col items-center gap-12">
            <h2 className="text-6xl md:text-[14rem] font-inter font-bold text-black text-center leading-[0.9] md:leading-none">
              {t('cta.ready')}
            </h2>
            <ProjectInitButton />
          </div>
        </div>
        </section>
        
        <Footer />
      </motion.div>
    </>
  );
}
