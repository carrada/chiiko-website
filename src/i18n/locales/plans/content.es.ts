import type { PlansPageContent } from "./types";

export const plansPageContent: PlansPageContent = {
  seoTitle: "Planes | Precios y Servicios de Chiiko",
  seoDescription:
    "Explora nuestros planes de diseño y desarrollo. Desde sitios web hasta branding completo. Presupuestos en MXN.",
  headerTitle: "Elige cómo quieres crecer",
  headerDescription:
    "Sitios web pensados para comunicar mejor, convertir y escalar. Cada plan está diseñado para un objetivo distinto.",
  closingStatement:
    "Trabajamos con cupos limitados para garantizar calidad en cada proyecto. Seleccionamos cuidadosamente con quién colaboramos porque creemos en crear relaciones duraderas, no solo entregar sitios.",
  schemaListName: "Planes de Chiiko",
  areaServed: "MX",
  availableLanguage: "Spanish",
  items: [
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
      priceLow: 25000,
      priceHigh: 35000,
      currency: "MXN",
      ctaText: "Ver si es para mí",
      ctaHref:
        "https://cal.com/chiiko.design/sitio-esencial-llamada-de-alineacion",
    },
    {
      title: "Sitio Estratégico",
      subtitle: "El corazón de chiikö. Donde el diseño empieza a vender.",
      description:
        "No es solo un sitio web. Es una herramienta pensada para comunicar mejor, convertir y crecer.",
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
      priceLow: 40000,
      priceHigh: 60000,
      currency: "MXN",
      ctaText: "Agendar llamada estratégica",
      ctaHref:
        "https://cal.com/chiiko.design/sitio-estrategico-llamada-de-descubrimiento",
      featured: true,
      badge: "Recomendado",
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
      priceLow: 70000,
      priceHigh: 120000,
      currency: "MXN",
      ctaText: "Hablemos del proyecto",
      ctaHref:
        "https://cal.com/chiiko.design/artesania-digital-llamada-de-exploracion",
    },
  ],
};
