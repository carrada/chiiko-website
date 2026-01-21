// SEO Configuration and utilities

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  url?: string;
  canonicalUrl?: string;
  author?: string;
  schema?: object;
}

// Base URL for the site
export const SITE_URL = "https://chiiko.vercel.app";
export const SITE_NAME = "Chiiko";
export const SITE_DESCRIPTION = "Strategic design and development studio. We create thoughtful digital experiences for brands that matter.";

// Default OG Image
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// SEO metadata by page
export const SEO_PAGES = {
  home: {
    es: {
      title: "Chiiko | Diseño y Desarrollo Estratégico",
      description: "Estudio creativo especializado en diseño estratégico y desarrollo web. Colaboramos con marcas que buscan impacto digital.",
      keywords: ["diseño", "desarrollo", "agencia", "creatividad", "branding"],
    },
    en: {
      title: "Chiiko | Strategic Design and Development",
      description: "Creative studio specializing in strategic design and web development. We collaborate with brands seeking digital impact.",
      keywords: ["design", "development", "agency", "creativity", "branding"],
    },
  },
  about: {
    es: {
      title: "Sobre Chiiko | Historia y Visión",
      description: "Conoce nuestra historia, misión y el equipo detrás de Chiiko. Un estudio dedicado al diseño estratégico desde 2020.",
      keywords: ["sobre nosotros", "equipo", "historia", "misión", "chiiko"],
    },
    en: {
      title: "About Chiiko | Our Story and Vision",
      description: "Learn about our story, mission, and the team behind Chiiko. A studio dedicated to strategic design since 2020.",
      keywords: ["about us", "team", "story", "mission", "chiiko"],
    },
  },
  plans: {
    es: {
      title: "Planes | Precios y Servicios de Chiiko",
      description: "Explora nuestros planes de diseño y desarrollo. Desde sitios web hasta branding completo. Presupuestos en MXN.",
      keywords: ["planes", "precios", "servicios", "paquetes", "desarrollo web"],
    },
    en: {
      title: "Plans | Pricing and Services",
      description: "Explore our design and development plans. From websites to complete branding. Pricing in USD.",
      keywords: ["plans", "pricing", "services", "packages", "web development"],
    },
  },
  contact: {
    es: {
      title: "Contacto | Comienza tu Proyecto",
      description: "¿Tienes un proyecto en mente? Contáctanos y cuéntanos sobre tu visión. Respondemos en 48 horas.",
      keywords: ["contacto", "proyecto", "propuesta", "colaborar", "consulta"],
    },
    en: {
      title: "Contact | Start Your Project",
      description: "Have a project in mind? Contact us and tell us about your vision. We respond within 48 hours.",
      keywords: ["contact", "project", "proposal", "collaborate", "inquiry"],
    },
  },
  faq: {
    es: {
      title: "Preguntas Frecuentes | Chiiko",
      description: "Respuestas a las preguntas más comunes sobre nuestros servicios, procesos y garantías.",
      keywords: ["faq", "preguntas", "respuestas", "ayuda", "dudas"],
    },
    en: {
      title: "FAQ | Frequently Asked Questions",
      description: "Answers to common questions about our services, processes, and guarantees.",
      keywords: ["faq", "questions", "answers", "help", "support"],
    },
  },
  help: {
    es: {
      title: "Centro de Ayuda | Soporte de Chiiko",
      description: "Encuentra respuestas rápidas y acceso a nuestros canales de soporte.",
      keywords: ["ayuda", "soporte", "centro de ayuda", "contacto", "asistencia"],
    },
    en: {
      title: "Help Center | Chiiko Support",
      description: "Find quick answers and access to our support channels.",
      keywords: ["help", "support", "help center", "contact", "assistance"],
    },
  },
  privacy: {
    es: {
      title: "Política de Privacidad | Chiiko",
      description: "Política de privacidad de Chiiko. Conoce cómo protegemos tus datos.",
      keywords: ["privacidad", "política", "datos", "protección"],
    },
    en: {
      title: "Privacy Policy | Chiiko",
      description: "Chiiko's privacy policy. Learn how we protect your data.",
      keywords: ["privacy", "policy", "data", "protection"],
    },
  },
  terms: {
    es: {
      title: "Términos y Condiciones | Chiiko",
      description: "Términos y condiciones de uso de los servicios de Chiiko.",
      keywords: ["términos", "condiciones", "legal", "uso"],
    },
    en: {
      title: "Terms and Conditions | Chiiko",
      description: "Terms and conditions for using Chiiko's services.",
      keywords: ["terms", "conditions", "legal", "use"],
    },
  },
};

// Generate structured data (Schema.org JSON-LD)
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  sameAs: [
    "https://instagram.com/chiiko.design",
    "https://twitter.com/chiiko",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hola@chiiko.design",
    availableLanguage: ["es", "en"],
  },
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  priceRange: "$$$",
  areaServed: {
    "@type": "Country",
    name: "MX",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressCountry: "MX",
  },
});

export const generateBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
