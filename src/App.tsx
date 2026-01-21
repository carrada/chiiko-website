import HeroScrollDemo from "@/components/HeroScrollDemo";
import ValuePropositions from "@/components/ValuePropositions";
import LoaderTwoDemo from "@/components/LoaderTwoDemo";
import WorkProcess from "@/components/WorkProcess";
import CometCardDemo from "@/components/CometCardDemo";
import ServicesCards from "@/components/ServicesCards";
import WhoWeWorkWithDemo from "@/components/WhoWeWorkWithDemo";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import { ProjectInitButton } from "@/components/ProjectInitButton";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import FAQ from "@/components/FAQ";
import Help from "@/components/Help";
import TermsAndConditions from "@/components/TermsAndConditions";
import CookiePolicy from "@/components/CookiePolicy";
import LegalNotice from "@/components/LegalNotice";
import Plans from "@/components/Plans";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SEO_PAGES, generateOrganizationSchema } from "@/lib/seo";
import '@/i18n/config';

// Componente que hace scroll al top cuando cambia la ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    // Forzar scroll al inicio al cargar la página
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/ayuda" element={<Help />} />
        <Route path="/terminos" element={<TermsAndConditions />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/legal" element={<LegalNotice />} />
        <Route path="/planes" element={<Plans />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/" element={
          <>
            <SEO
              title={SEO_PAGES.home.es.title}
              description={SEO_PAGES.home.es.description}
              keywords={SEO_PAGES.home.es.keywords}
              url="/"
              schema={generateOrganizationSchema()}
            />
            <AnimatePresence>
              {loading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-white"
                >
                  <LoaderTwoDemo />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: loading ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
            <ResizableNavbarDemo />
            <div className="py-12 tablet:py-16 md:py-24"></div>
            <HeroScrollDemo />
            <ValuePropositions />
            
            <div className="w-full flex justify-center items-center px-4" style={{marginTop: '100px', marginBottom: '100px'}}>
              <h2 className="text-6xl tablet:text-[9rem] md:text-[14rem] font-inter font-bold text-black text-center">
                {t('section.method')}
              </h2>
            </div>
            
            <WorkProcess />
            
            <div className="w-full flex justify-center items-center px-4" style={{marginTop: '100px', marginBottom: '100px'}}>
              <h2 className="text-6xl tablet:text-[9rem] md:text-[14rem] font-inter font-bold text-black text-center">
                {t('section.projects')}
              </h2>
            </div>
            
            <CometCardDemo />
            
            <div className="w-full flex justify-center items-center px-4" style={{marginTop: '100px', marginBottom: '100px'}}>
              <h2 className="text-6xl tablet:text-[9rem] md:text-[14rem] font-inter font-bold text-black text-center">
                {t('section.services')}
              </h2>
            </div>
            
            <ServicesCards />
            
            <div className="w-full flex justify-center items-center px-4" style={{marginTop: '100px', marginBottom: '40px'}}>
              <h2 className="text-5xl tablet:text-7xl md:text-[14rem] font-inter font-bold text-black text-center">
                {t('section.whoWeWork')}
              </h2>
            </div>
            
            <WhoWeWorkWithDemo />
            
            <div className="w-full flex justify-center items-center px-4" style={{marginTop: '100px', marginBottom: '0px'}}>
              <div className="flex flex-col items-center gap-6 tablet:gap-7 md:gap-8">
                <p className="text-5xl tablet:text-6xl md:text-7xl font-inter font-bold text-black text-center max-w-4xl tablet:max-w-5xl md:max-w-6xl leading-relaxed">
                  <span style={{color: "#ce4676"}}>No</span> {t('cta.notForEveryone')}
                </p>
                <p className="text-lg tablet:text-xl md:text-3xl font-inter font-bold text-black text-center max-w-3xl tablet:max-w-4xl md:max-w-5xl leading-relaxed">
                  {t('cta.aligned')}
                </p>
              </div>
            </div>
            
            <div className="w-full flex justify-center items-center px-4" style={{marginTop: '100px', marginBottom: '100px'}}>
              <div className="flex flex-col items-center gap-8 tablet:gap-10 md:gap-12">
                <h2 className="text-6xl tablet:text-[9rem] md:text-[14rem] font-inter font-bold text-black text-center">
                  {t('cta.whyChooseUs')}
                </h2>
                <p className="text-lg tablet:text-2xl md:text-4xl font-inter font-bold text-black text-center max-w-4xl tablet:max-w-5xl">
                  {t('cta.whatWeDo')}
                </p>
              </div>
            </div>
            
            <div className="w-full flex justify-center items-center px-4 py-24 tablet:py-32">
              <div className="max-w-7xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 tablet:gap-16 md:gap-20">
                  <div className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
                    <div className="text-[8rem] tablet:text-[10rem] md:text-[12rem] font-bold" style={{color: "#ce4676"}}>
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
                    <div className="text-[8rem] tablet:text-[10rem] md:text-[12rem] font-bold" style={{color: "#ce4676"}}>
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
                    <div className="text-[8rem] tablet:text-[10rem] md:text-[12rem] font-bold" style={{color: "#ce4676"}}>
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
            
            <div className="w-full flex justify-center items-center px-4 py-28" style={{marginTop: '160px', marginBottom: '140px'}}>
              <div className="flex flex-col items-center gap-12">
                <h2 className="text-6xl md:text-[14rem] font-inter font-bold text-black text-center">
                  {t('cta.ready')}
                </h2>
                <ProjectInitButton />
              </div>
            </div>
            
            <Footer />
            </motion.div>
          </>
        } />
      </Routes>
    </Router>
    </HelmetProvider>
  )
}

export default App
