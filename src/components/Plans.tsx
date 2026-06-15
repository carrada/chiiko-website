import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { generatePlansSchema } from "@/lib/seo";
import { buildHreflangs } from "@/lib/seo-i18n";
import PixelCard from "@/components/ui/PixelCard";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { usePlansPage } from "@/hooks/usePlansPage";
import type { PlanItemContent } from "@/i18n/locales/plans/types";
import { useLocation } from "react-router-dom";

const CARD_STYLES = [
  {
    colors: "#73C2FB,#3A3F87,#FFFFFF",
    cardClassName: "pixel-card--maya",
    cardTextClassName: "text-[#3A3F87]",
    buttonClassName: "bg-white border border-[#3A3F87] text-[#3A3F87]",
    buttonHoverTextClassName: "hover:bg-[#3A3F87] hover:text-white",
  },
  {
    colors: "#E4007C,#D71919,#FFFFFF",
    cardClassName: "pixel-card--rosa pixel-card--featured lg:scale-105",
    cardTextClassName: "text-[#E4007C]",
    buttonClassName: "bg-[#E4007C] border border-[#E4007C] text-white",
    buttonHoverTextClassName: "hover:bg-[#c9006f] hover:text-white",
  },
  {
    colors: "#3A3F87,#F0983E,#FFFFFF",
    cardClassName: "pixel-card--cobalto",
    cardTextClassName: "text-[#3A3F87]",
    buttonClassName: "bg-white border border-[#3A3F87] text-[#3A3F87]",
    buttonHoverTextClassName: "hover:bg-[#3A3F87] hover:text-white",
  },
] as const;

type StyledPlan = PlanItemContent & (typeof CARD_STYLES)[number];

const PlanCard = ({ plan }: { plan: StyledPlan }) => (
  <PixelCard variant="default" colors={plan.colors} className={`${plan.cardClassName} h-full`}>
    <div className="relative z-10 flex h-full flex-col p-7 md:p-8 lg:p-10">
      {plan.badge ? (
        <div className="absolute top-5 left-1/2 -translate-x-1/2">
          <span className="bg-white/92 text-[#E4007C] px-4 py-1 text-sm font-medium rounded-full border border-[#E4007C]/20 shadow-sm">
            {plan.badge}
          </span>
        </div>
      ) : null}

      <div className="mb-6 pt-10 md:pt-12">
        <h3
          className={`font-semibold mb-3 ${plan.featured ? "text-2xl md:text-3xl" : "text-2xl"} ${plan.cardTextClassName}`}
        >
          {plan.title}
        </h3>
        <p className="text-sm md:text-base font-light text-slate-700">{plan.subtitle}</p>
      </div>

      <p className="text-base text-slate-700 font-light mb-6 leading-relaxed">{plan.description}</p>

      <div className="mb-6 grow">
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="text-sm md:text-base text-slate-700 font-light flex items-start">
              <span className={`mr-2 ${plan.featured ? "text-[#D71919]" : "text-[#E4007C]"}`}>•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6 border-t border-black/10">
        <p className="text-sm text-slate-600 font-light mb-1">{plan.priceLabel}</p>
        <p
          className={`font-semibold text-slate-900 mb-6 ${plan.featured ? "text-2xl md:text-3xl" : "text-2xl"}`}
        >
          {plan.price}
        </p>
        <a
          href={plan.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center px-6 py-3 font-medium rounded-full transition-colors ${plan.buttonClassName} ${plan.buttonHoverTextClassName}`}
        >
          {plan.ctaText}
        </a>
      </div>
    </div>
  </PixelCard>
);

export default function Plans() {
  const { usesSpanishRoutes } = useAppLanguage();
  const plansPage = usePlansPage();
  const location = useLocation();
  const pageUrl = usesSpanishRoutes ? "/planes" : "/plans";

  const styledPlans: StyledPlan[] = plansPage.items.map((item, index) => ({
    ...item,
    ...CARD_STYLES[index],
  }));

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={plansPage.seoTitle}
        description={plansPage.seoDescription}
        url={pageUrl}
        schema={generatePlansSchema(plansPage, pageUrl)}
        hreflangs={buildHreflangs(location.pathname)}
      />
      <ResizableNavbarDemo />
      <div className="py-12 tablet:py-16 md:py-24"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">{plansPage.headerTitle}</h1>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
            {plansPage.headerDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
          {styledPlans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} />
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
            {plansPage.closingStatement}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
