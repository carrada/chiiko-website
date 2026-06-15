import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useFaqContent } from "@/hooks/usePageContent";
import { ResizableNavbarDemo } from "./ResizableNavbarDemo";
import Footer from "./Footer";
import SEO from "./SEO";
import { generateFAQSchema } from "@/lib/seo";
import { getPageSeo } from "@/lib/seo-meta";
import { buildHreflangs } from "@/lib/seo-i18n";
import { useLocation } from "react-router-dom";

export default function FAQ() {
  const { language } = useAppLanguage();
  const location = useLocation();
  const seo = getPageSeo("faq", language);
  const faq = useFaqContent();

  return (
    <div className="w-full bg-white">
      <SEO
        title={seo.title}
        description={seo.description}
        url="/faq"
        schema={generateFAQSchema(faq.items)}
        hreflangs={buildHreflangs(location.pathname)}
      />
      <ResizableNavbarDemo />
      <div className="py-12 tablet:py-16 md:py-24"></div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">{faq.title}</h1>
          <p className="text-sm md:text-base text-gray-500 font-light">{faq.subtitle}</p>
        </div>

        <div className="mb-12 md:mb-16">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            {faq.intro}{" "}
            <a
              href={`mailto:${faq.introEmailLabel}`}
              className="text-gray-900 underline hover:opacity-70 transition-opacity"
            >
              {faq.introEmailLabel}
            </a>
            .
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {faq.items.map((item) => (
            <section key={item.question} className="pb-12 md:pb-16 border-b border-gray-200">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
                {item.question}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                {item.answer}
              </p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
