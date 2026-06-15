import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getPageSeo } from "@/lib/seo-meta";
import { buildHreflangs } from "@/lib/seo-i18n";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useLocation } from "react-router-dom";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import AboutTimeline from "@/components/AboutTimeline";
import AboutValues from "@/components/AboutValues";

export default function About() {
  const { language, usesSpanishRoutes } = useAppLanguage();
  const location = useLocation();
  const seo = getPageSeo("about", language);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={seo.title}
        description={seo.description}
        url={usesSpanishRoutes ? "/nosotros" : "/about"}
        hreflangs={buildHreflangs(location.pathname)}
      />
      <ResizableNavbarDemo />
      <HeroParallaxDemo />
      <AboutTimeline />
      <AboutValues />
      <Footer />
    </div>
  );
}
