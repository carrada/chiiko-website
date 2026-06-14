import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/hooks/useLanguage";
import { getPageSEOProps } from "@/lib/seo-utils";
import type { SEOPageKey } from "@/lib/seo-utils";

interface LegalPageLayoutProps {
  pageKey: SEOPageKey;
  spanishContent: React.ReactNode;
  englishContent: React.ReactNode;
  noindex?: boolean;
}

export function LegalPageContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="py-12 tablet:py-16 md:py-24"></div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {children}
      </div>
    </>
  );
}

export default function LegalPageLayout({
  pageKey,
  spanishContent,
  englishContent,
  noindex = true,
}: LegalPageLayoutProps) {
  const { langKey } = useLanguage();
  const seoProps = getPageSEOProps(pageKey, langKey);

  return (
    <div className="w-full bg-white">
      <SEO {...seoProps} noindex={noindex} />
      <ResizableNavbarDemo />
      {langKey === "es" ? spanishContent : englishContent}
      <Footer />
    </div>
  );
}
