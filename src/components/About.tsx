import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import AboutTimeline from "@/components/AboutTimeline";
import AboutValues from "@/components/AboutValues";
import { useLanguage } from "@/hooks/useLanguage";
import { getPageSEOPropsWithDefault } from "@/lib/seo-utils";

export default function About() {
  const { langKey } = useLanguage();
  const seoProps = getPageSEOPropsWithDefault('about', langKey);

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoProps} />
      <ResizableNavbarDemo />
      <HeroParallaxDemo />
      <AboutTimeline />
      <AboutValues />
      <Footer />
    </div>
  );
}
