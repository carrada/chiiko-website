import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import { buildHreflangs } from "@/lib/seo-i18n";
import { useLocation } from "react-router-dom";

function BlogPage() {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white">
      <SEO
        title={`${t("nav.blog")} | Chiikö`}
        description={t("blog.comingSoon")}
        ogType="website"
        url="/blog"
        hreflangs={buildHreflangs(location.pathname)}
      />
      <ResizableNavbarDemo />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">{t("nav.blog")}</h1>
        <p className="text-lg text-center">{t("blog.comingSoon")}</p>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
