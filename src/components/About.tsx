import { useTranslation } from "react-i18next";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SEO_PAGES } from "@/lib/seo";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import AboutTimeline from "@/components/AboutTimeline";
import AboutValues from "@/components/AboutValues";

export default function About() {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={SEO_PAGES.about[i18n.language === "es" ? "es" : "en"].title}
        description={SEO_PAGES.about[i18n.language === "es" ? "es" : "en"].description}
        url={i18n.language === "es" ? "/nosotros" : "/about"}
        hreflangs={[
          { lang: "es", href: "https://www.chiiko.design/nosotros" },
          { lang: "en", href: "https://www.chiiko.design/about" },
          { lang: "x-default", href: "https://www.chiiko.design/nosotros" },
        ]}
      />
      <ResizableNavbarDemo />
      <HeroParallaxDemo />
      <AboutTimeline />
      <AboutValues />
      <Footer />
    </div>
  );
}
