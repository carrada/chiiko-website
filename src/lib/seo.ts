// SEO Configuration and utilities
import { 
  OrganizationSchemaBuilder, 
  LocalBusinessSchemaBuilder, 
  BreadcrumbSchemaBuilder 
} from "./seo-builders";
import { Validator } from "./validators";

export interface SEOConfig {
  title: string;
  description: string;
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
export const SITE_URL = "https://www.chiiko.design";
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
    },
    en: {
      title: "Chiiko | Strategic Design and Development",
      description: "Creative studio specializing in strategic design and web development. We collaborate with brands seeking digital impact.",
    },
  },
  about: {
    es: {
      title: "Sobre Chiiko | Historia y Visión",
      description: "Conoce nuestra historia, misión y el equipo detrás de Chiiko. Un estudio dedicado al diseño estratégico desde 2020.",
    },
    en: {
      title: "About Chiiko | Our Story and Vision",
      description: "Learn about our story, mission, and the team behind Chiiko. A studio dedicated to strategic design since 2020.",
    },
  },
  plans: {
    es: {
      title: "Planes | Precios y Servicios de Chiiko",
      description: "Explora nuestros planes de diseño y desarrollo. Desde sitios web hasta branding completo. Presupuestos en MXN.",
    },
    en: {
      title: "Plans | Pricing and Services",
      description: "Explore our design and development plans. From websites to complete branding. Pricing in USD.",
    },
  },
  contact: {
    es: {
      title: "Contacto | Comienza tu Proyecto",
      description: "¿Tienes un proyecto en mente? Contáctanos y cuéntanos sobre tu visión. Respondemos en 48 horas.",
    },
    en: {
      title: "Contact | Start Your Project",
      description: "Have a project in mind? Contact us and tell us about your vision. We respond within 48 hours.",
    },
  },
  faq: {
    es: {
      title: "Preguntas Frecuentes | Chiiko",
      description: "Respuestas a las preguntas más comunes sobre nuestros servicios, procesos y garantías.",
    },
    en: {
      title: "FAQ | Frequently Asked Questions",
      description: "Answers to common questions about our services, processes, and guarantees.",
    },
  },
  help: {
    es: {
      title: "Centro de Ayuda | Soporte de Chiiko",
      description: "Encuentra respuestas rápidas y acceso a nuestros canales de soporte.",
    },
    en: {
      title: "Help Center | Chiiko Support",
      description: "Find quick answers and access to our support channels.",
    },
  },
  privacy: {
    es: {
      title: "Política de Privacidad | Chiiko",
      description: "Política de privacidad de Chiiko. Conoce cómo protegemos tus datos.",
      url: "/privacidad",
    },
    en: {
      title: "Privacy Policy | Chiiko",
      description: "Chiiko's privacy policy. Learn how we protect your data.",
      url: "/privacy",
    },
  },
  terms: {
    es: {
      title: "Términos y Condiciones | Chiiko",
      description: "Términos y condiciones de uso de los servicios de Chiiko.",
      url: "/terminos",
    },
    en: {
      title: "Terms and Conditions | Chiiko",
      description: "Terms and conditions for using Chiiko's services.",
      url: "/terms",
    },
  },
  cookies: {
    es: {
      title: "Política de Cookies | Chiiko",
      description: "Nuestra política de cookies. Conoce cómo usamos cookies en el sitio.",
      url: "/politica-cookies",
    },
    en: {
      title: "Cookie Policy | Chiiko",
      description: "Our cookie policy. Learn how we use cookies on our site.",
      url: "/cookie-policy",
    },
  },
  legal: {
    es: {
      title: "Aviso Legal | Chiiko",
      description: "Aviso legal de Chiiko. Información legal importante.",
      url: "/aviso-legal",
    },
    en: {
      title: "Legal Notice | Chiiko",
      description: "Chiiko's legal notice. Important legal information.",
      url: "/legal",
    },
  },
};

// Generate structured data (Schema.org JSON-LD) using Builder Pattern
export const generateOrganizationSchema = () => {
  return new OrganizationSchemaBuilder()
    .setName(SITE_NAME)
    .setUrl(SITE_URL)
    .setLogo(`${SITE_URL}/logo.png`)
    .setDescription(SITE_DESCRIPTION)
    .addSocialProfile("https://www.linkedin.com/company/chiiko/")
    .addSocialProfile("https://www.behance.net/chiiko")
    .addSocialProfile("https://instagram.com/chiiko.design")
    .setContactPoint("hola@chiiko.design", "+52-MX", ["es", "en"])
    .setAddress("Ciudad de México", "CDMX", "MX")
    .build();
};

export const generateLocalBusinessSchema = () => {
  return new LocalBusinessSchemaBuilder()
    .setName(SITE_NAME)
    .setUrl(SITE_URL)
    .setImage(`${SITE_URL}/logo.png`)
    .setDescription(SITE_DESCRIPTION)
    .setPriceRange("$$$")
    .setAreaServed("MX", "Mexico")
    .setAddress("Ciudad de México", "CDMX", "MX")
    .addSocialProfile("https://www.linkedin.com/company/chiiko/")
    .addSocialProfile("https://www.behance.net/chiiko")
    .build();
};

export const generateBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => {
  // Defensive programming: fail fast with clear error messages (Preconditions)
  Validator.requireNonNull(breadcrumbs, "Breadcrumbs");
  Validator.require(Array.isArray(breadcrumbs), "Breadcrumbs must be an array");
  Validator.requireNonEmptyArray(breadcrumbs, "Breadcrumbs");

  const builder = new BreadcrumbSchemaBuilder();
  
  breadcrumbs.forEach((item, index) => {
    Validator.require(
      item && typeof item === 'object',
      `Invalid breadcrumb at position ${index}: must be an object`
    );
    Validator.require(
      Boolean(item.name && item.url),
      `Invalid breadcrumb at position ${index}: name and url are required`
    );
    builder.addBreadcrumb(item.name, item.url);
  });

  return builder.build();
};
