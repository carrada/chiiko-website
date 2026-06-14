import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { generatePlansSchema } from "@/lib/seo";
import PixelCard from "@/components/ui/PixelCard";
import { useLanguage } from "@/hooks/useLanguage";
import { getPageSEOPropsWithDefault } from "@/lib/seo-utils";

type Plan = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  priceLabel: string;
  price: string;
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
  colors: string;
  cardClassName: string;
  cardTextClassName: string;
  buttonClassName: string;
  buttonHoverTextClassName: string;
};

const buildPlans = (language: "es" | "en"): Plan[] => {
  if (language === "es") {
    return [
      {
        title: "Sitio Esencial",
        subtitle: "Presencia sólida. Sin ruido.",
        description:
          "Un sitio web bien diseñado para marcas que entienden que menos es más y necesitan verse profesionales desde el día uno.",
        features: [
          "Sitio web informativo (3–5 secciones)",
          "Diseño UI limpio y personalizado",
          "Desarrollo rápido y optimizado",
          "Diseño responsive + accesibilidad básica",
          "SEO técnico base",
        ],
        priceLabel: "Inversión desde",
        price: "$25,000 – $35,000 MXN",
        ctaText: "Ver si es para mí",
        ctaHref: "https://cal.com/chiiko.design/sitio-esencial-llamada-de-alineacion",
        colors: "#73C2FB,#3A3F87,#FFFFFF",
        cardClassName: "pixel-card--maya",
        cardTextClassName: "text-[#3A3F87]",
        buttonClassName: "bg-white border border-[#3A3F87] text-[#3A3F87]",
        buttonHoverTextClassName: "hover:bg-[#3A3F87] hover:text-white",
      },
      {
        title: "Sitio Estratégico",
        subtitle: "El corazón de chiikö. Donde el diseño empieza a vender.",
        description: "No es solo un sitio web. Es una herramienta pensada para comunicar mejor, convertir y crecer.",
        features: [
          "Fase estratégica previa (marca, objetivos y usuario)",
          "Diseño UX/UI completo y 100% personalizado",
          "Desarrollo a medida (sin themes)",
          "Animaciones sutiles con intención",
          "SEO técnico + performance",
          "Acompañamiento post-entrega",
        ],
        priceLabel: "Inversión desde",
        price: "$40,000 – $60,000 MXN",
        ctaText: "Agendar llamada estratégica",
        ctaHref: "https://cal.com/chiiko.design/sitio-estrategico-llamada-de-descubrimiento",
        featured: true,
        badge: "Recomendado",
        colors: "#E4007C,#D71919,#FFFFFF",
        cardClassName: "pixel-card--rosa pixel-card--featured lg:scale-105",
        cardTextClassName: "text-[#E4007C]",
        buttonClassName: "bg-[#E4007C] border border-[#E4007C] text-white",
        buttonHoverTextClassName: "hover:bg-[#c9006f] hover:text-white",
      },
      {
        title: "Artesanía Digital",
        subtitle: "Diseño hecho con intención. Pensado para durar.",
        description:
          "Para marcas que no quieren parecerse a nadie y entienden el valor de una experiencia digital bien construida.",
        features: [
          "Todo lo del Sitio Estratégico",
          "Dirección creativa completa",
          "Experiencia visual diseñada a medida",
          "Detalles artesanales: microinteracciones",
          "Casos de estudio documentados",
          "Arquitectura pensada para escalar",
        ],
        priceLabel: "Inversión desde",
        price: "$70,000 – $120,000+ MXN",
        ctaText: "Hablemos del proyecto",
        ctaHref: "https://cal.com/chiiko.design/artesania-digital-llamada-de-exploracion",
        colors: "#3A3F87,#F0983E,#FFFFFF",
        cardClassName: "pixel-card--cobalto",
        cardTextClassName: "text-[#3A3F87]",
        buttonClassName: "bg-white border border-[#3A3F87] text-[#3A3F87]",
        buttonHoverTextClassName: "hover:bg-[#3A3F87] hover:text-white",
      },
    ];
  }

  return [
    {
      title: "Essential Site",
      subtitle: "Solid presence. No noise.",
      description:
        "A well-designed website for brands that understand less is more and need to look professional from day one.",
      features: [
        "Informational website (3–5 sections)",
        "Clean, custom UI design",
        "Fast, optimized development",
        "Responsive design + basic accessibility",
        "Technical SEO foundation",
      ],
      priceLabel: "Starting at",
      price: "$1,400 – $1,950 USD",
      ctaText: "See if it's right for me",
      ctaHref: "https://cal.com/chiiko.design/essential-website-alignment-call",
      colors: "#73C2FB,#3A3F87,#FFFFFF",
      cardClassName: "pixel-card--maya",
      cardTextClassName: "text-[#3A3F87]",
      buttonClassName: "bg-white border border-[#3A3F87] text-[#3A3F87]",
      buttonHoverTextClassName: "hover:bg-[#3A3F87] hover:text-white",
    },
    {
      title: "Strategic Site",
      subtitle: "The heart of chiikö. Where design starts to sell.",
      description: "Not just a website. It's a tool designed to communicate better, convert, and grow.",
      features: [
        "Strategic phase (brand, goals, and user)",
        "Complete, 100% custom UX/UI design",
        "Custom development (no themes)",
        "Intentional subtle animations",
        "Technical SEO + performance",
        "Post-launch support",
      ],
      priceLabel: "Starting at",
      price: "$2,200 – $3,350 USD",
      ctaText: "Schedule strategic call",
      ctaHref: "https://cal.com/chiiko.design/digital-craft-exploration-call",
      featured: true,
      badge: "Recommended",
      colors: "#E4007C,#D71919,#FFFFFF",
      cardClassName: "pixel-card--rosa pixel-card--featured lg:scale-105",
      cardTextClassName: "text-[#E4007C]",
      buttonClassName: "bg-[#E4007C] border border-[#E4007C] text-white",
      buttonHoverTextClassName: "hover:bg-[#c9006f] hover:text-white",
    },
    {
      title: "Digital Craftsmanship",
      subtitle: "Design made with intention. Built to last.",
      description:
        "For brands that don't want to look like anyone else and understand the value of a well-crafted digital experience.",
      features: [
        "Everything from Strategic Site",
        "Complete creative direction",
        "Custom-designed visual experience",
        "Artisanal details: micro-interactions",
        "Documented case studies",
        "Architecture built to scale",
      ],
      priceLabel: "Starting at",
      price: "$3,900 – $6,700+ USD",
      ctaText: "Let's talk about your project",
      ctaHref: "https://cal.com/chiiko.design/digital-craft-exploration-call",
      colors: "#3A3F87,#F0983E,#FFFFFF",
      cardClassName: "pixel-card--cobalto",
      cardTextClassName: "text-[#3A3F87]",
      buttonClassName: "bg-white border border-[#3A3F87] text-[#3A3F87]",
      buttonHoverTextClassName: "hover:bg-[#3A3F87] hover:text-white",
    },
  ];
};

const PlanCard = ({ plan }: { plan: Plan }) => (
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
        <h3 className={`font-semibold mb-3 ${plan.featured ? "text-2xl md:text-3xl" : "text-2xl"} ${plan.cardTextClassName}`}>
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
        <p className={`font-semibold text-slate-900 mb-6 ${plan.featured ? "text-2xl md:text-3xl" : "text-2xl"}`}>
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

const SpanishContent = () => {
  const plans = buildPlans("es");

  return (
  <>
    {/* Header Section */}
    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Elige cómo quieres crecer
      </h1>
      <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
        Sitios web pensados para comunicar mejor, convertir y escalar. Cada plan está diseñado para un objetivo distinto.
      </p>
    </div>

    {/* Plans Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
      {plans.map((plan) => (
        <PlanCard key={plan.title} plan={plan} />
      ))}
    </div>

    {/* Closing Statement */}
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
        Trabajamos con cupos limitados para garantizar calidad en cada proyecto. Seleccionamos cuidadosamente con quién colaboramos porque creemos en crear relaciones duraderas, no solo entregar sitios.
      </p>
    </div>
  </>
  );
};

const EnglishContent = () => {
  const plans = buildPlans("en");

  return (
  <>
    {/* Header Section */}
    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Choose how you want to grow
      </h1>
      <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
        Websites designed to communicate better, convert, and scale. Each plan is built for a different goal.
      </p>
    </div>

    {/* Plans Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
      {plans.map((plan) => (
        <PlanCard key={plan.title} plan={plan} />
      ))}
    </div>

    {/* Closing Statement */}
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
        We work with limited slots to guarantee quality in every project. We carefully select who we collaborate with because we believe in building lasting relationships, not just delivering websites.
      </p>
    </div>
  </>
  );
};

export default function Plans() {
  const { isSpanish, langKey } = useLanguage();
  const seoProps = getPageSEOPropsWithDefault('plans', langKey);

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoProps} schema={generatePlansSchema(langKey)} />
      <ResizableNavbarDemo />
      <div className="py-12 tablet:py-16 md:py-24"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {isSpanish ? <SpanishContent /> : <EnglishContent />}
      </div>
      <Footer />
    </div>
  );
}
