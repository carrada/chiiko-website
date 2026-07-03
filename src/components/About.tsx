import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getPageSeo } from "@/lib/seo-meta";
import { buildHreflangs } from "@/lib/seo-i18n";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import AboutTimeline from "@/components/AboutTimeline";
import AboutValues from "@/components/AboutValues";

export default function About() {
  const { language, usesSpanishRoutes } = useAppLanguage();
  const location = useLocation();
  const { t } = useTranslation();
  const seo = getPageSeo("about", language);
  const aboutPath = usesSpanishRoutes ? "/nosotros" : "/about";

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={seo.title}
        description={seo.description}
        url={aboutPath}
        hreflangs={buildHreflangs(location.pathname)}
        schema={buildBreadcrumbSchema([
          { name: t("nav.home"), path: "/" },
          { name: t("nav.about"), path: aboutPath },
        ])}
      />
      <ResizableNavbarDemo />
      <HeroParallaxDemo />
      <AboutTimeline />
      <AboutValues />
      <Footer />
    </div>
  );
}
