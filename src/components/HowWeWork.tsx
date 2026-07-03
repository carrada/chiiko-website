import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useHowWeWorkContent } from "@/hooks/usePageContent";
import { buildHreflangs } from "@/lib/seo-i18n";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HowWeWork = () => {
  const { usesSpanishRoutes } = useAppLanguage();
  const location = useLocation();
  const { t } = useTranslation();
  const data = useHowWeWorkContent();
  const howWeWorkPath = usesSpanishRoutes ? "/como-trabajamos" : "/how-we-work";

  return (
    <>
      <SEO
        title={data.seoTitle}
        description={data.seoDescription}
        url={howWeWorkPath}
        hreflangs={buildHreflangs(location.pathname)}
        schema={buildBreadcrumbSchema([
          { name: t("nav.home"), path: "/" },
          { name: t("nav.method"), path: howWeWorkPath },
        ])}
      />
      <div className="relative w-full min-h-screen bg-white">
        <ResizableNavbarDemo />

        <div className="relative pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-inter font-bold text-black mb-12 text-center">
              {data.title}
            </h1>

            <div className="mb-20 space-y-4">
              {data.intro.map((line, index) => (
                <p
                  key={line}
                  className={`text-xl md:text-2xl font-inter font-light text-black text-center ${
                    index === data.intro.length - 1 ? "font-semibold mt-8" : ""
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="space-y-16 mb-24">
              {data.steps.map((step) => (
                <div key={step.number} className="border-l-4 border-black pl-8 py-4">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-5xl md:text-6xl font-inter font-bold text-black">
                      {step.number}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-inter font-bold text-black">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-lg md:text-xl font-inter font-semibold text-black mb-4">
                    {step.description}
                  </p>
                  <p className="text-base md:text-lg font-inter font-light text-neutral-700 leading-relaxed mb-2">
                    {step.detail}
                  </p>
                  {step.conclusion ? (
                    <p className="text-base md:text-lg font-inter font-medium text-black mt-4">
                      {step.conclusion}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="bg-black text-white p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-inter font-bold mb-8">
                {data.workingStyleTitle}
              </h2>
              <ul className="space-y-4">
                {data.workingStyleItems.map((item) => (
                  <li
                    key={item}
                    className="text-lg md:text-xl font-inter font-light flex items-start gap-3"
                  >
                    <span className="text-2xl">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HowWeWork;
