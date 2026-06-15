import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LegalDocumentView from "@/components/LegalDocumentView";
import { useLocation } from "react-router-dom";
import { buildHreflangs } from "@/lib/seo-i18n";
import { useI18nBundle } from "@/hooks/useI18nBundle";
import type { LegalPageContent } from "@/i18n/locales/shared/types";

export default function PrivacyPolicy() {
  const location = useLocation();
  const content = useI18nBundle<LegalPageContent>("privacyPage");

  return (
    <div className="w-full bg-white">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        url={location.pathname}
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
