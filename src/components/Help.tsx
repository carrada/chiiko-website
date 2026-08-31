import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useHelpContent } from "@/hooks/usePageContent";
import Footer from "./Footer";
import SEO from "./SEO";
import { getPageSeo } from "@/lib/seo-meta";
import { buildHreflangs } from "@/lib/seo-i18n";
import { useLocation } from "react-router-dom";

export default function Help() {
  const { language, usesSpanishRoutes } = useAppLanguage();
  const location = useLocation();
  const seo = getPageSeo("help", language);
  const help = useHelpContent();

  return (
    <div className="w-full bg-white">
      <SEO
        title={seo.title}
        description={seo.description}
        url={usesSpanishRoutes ? "/ayuda" : "/help"}
        hreflangs={buildHreflangs(location.pathname)}
      />
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">{help.title}</h1>
          <p className="text-sm md:text-base text-gray-500 font-light">{help.subtitle}</p>
        </div>

        <div className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200 space-y-4">
          {help.intro.map((paragraph) => (
            <p key={paragraph} className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-12">{help.sectionTitle}</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-12">
            {help.sectionIntro}
          </p>

          {help.channels.map((channel) => (
            <section
              key={channel.title}
              className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">{channel.title}</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
                {channel.description}
              </p>
              <div className="mb-4">
                <p className="text-sm md:text-base text-gray-500 font-light mb-2">
                  {channel.emailLabel}
                </p>
                <p className="text-base md:text-lg font-medium">
                  <a
                    href={`mailto:${channel.email}`}
                    className="text-gray-900 underline hover:opacity-70 transition-opacity"
                  >
                    {channel.email}
                  </a>
                </p>
              </div>
            </section>
          ))}
        </div>

        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">{help.responseTitle}</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            {help.responseText}
          </p>
        </section>

        <div className="pt-12 md:pt-16 border-t border-gray-200">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">{help.closing}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
