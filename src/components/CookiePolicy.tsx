import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useI18nBundle } from "@/hooks/useI18nBundle";
import { ResizableNavbarDemo } from "./ResizableNavbarDemo";
import Footer from "./Footer";
import SEO from "./SEO";
import LegalDocumentView from "./LegalDocumentView";
import { buildHreflangs } from "@/lib/seo-i18n";
import { useLocation } from "react-router-dom";
import type { LegalPageContent } from "@/i18n/locales/shared/types";

export default function CookiePolicy() {
  const { usesSpanishRoutes } = useAppLanguage();
  const location = useLocation();
  const content = useI18nBundle<LegalPageContent>("cookiePage");

  return (
    <div className="w-full bg-white">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        url={usesSpanishRoutes ? "/politica-cookies" : "/cookie-policy"}
        noindex
        hreflangs={buildHreflangs(location.pathname)}
      />
      <ResizableNavbarDemo />
      <div className="py-12 tablet:py-16 md:py-24"></div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <LegalDocumentView content={content} />
      </div>
      <Footer />
    </div>
  );
}
