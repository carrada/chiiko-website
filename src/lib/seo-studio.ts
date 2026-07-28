import type { AppLanguage } from "@/lib/i18n";
import { CDMX_COORDINATES, SITE_NAME, SITE_URL } from "@/lib/seo";

export interface StudioSeoMeta {
  organizationDescription: string;
  localBusinessDescription: string;
  slogan: string;
  knowsAbout: string[];
  serviceTypes: string[];
  keywords: string;
}

const STUDIO_SEO: Record<AppLanguage, StudioSeoMeta> = {
  es: {
    slogan: "Artesanía digital en Ciudad de México",
    organizationDescription:
      "Chiikö es un estudio de diseño web y desarrollo en CDMX (Ciudad de México). Creamos sitios, productos digitales y experiencias UX/UI con diseño estratégico para marcas en México, LATAM y mercados globales.",
    localBusinessDescription:
      "Estudio de diseño web en CDMX: UX/UI, desarrollo frontend avanzado, branding digital, motion y casos como Veraz, EAMX y Compufest. Atendemos Ciudad de México, México y clientes internacionales.",
    knowsAbout: [
      "Diseño web CDMX",
      "Desarrollo web Ciudad de México",
      "UX/UI México",
      "Diseño estratégico",
      "Producto digital",
      "Branding digital",
      "Next.js",
      "React",
      "Motion design",
      "WebGL y 3D",
    ],
    serviceTypes: [
      "Diseño web",
      "Desarrollo web",
      "Diseño UX/UI",
      "Branding digital",
      "Consultoría de producto",
    ],
    keywords:
      "diseño web CDMX, desarrollo web Ciudad de México, estudio diseño web México, agencia UX UI CDMX, diseño estratégico, Chiikö, Chiiko design",
  },
  en: {
    slogan: "Digital craftsmanship in Mexico City",
    organizationDescription:
      "Chiikö is a web design and development studio in Mexico City (CDMX). We build websites, digital products, and UX/UI experiences with strategic design for brands in Mexico, LATAM, and global markets.",
    localBusinessDescription:
      "Web design studio in CDMX: UX/UI, advanced frontend development, digital branding, motion, and case studies including Veraz, EAMX, and Compufest. Serving Mexico City, Mexico, and international clients.",
    knowsAbout: [
      "Web design Mexico City",
      "Web development CDMX",
      "UX/UI Mexico",
      "Strategic design",
      "Digital product design",
      "Digital branding",
      "Next.js",
      "React",
      "Motion design",
      "WebGL and 3D",
    ],
    serviceTypes: [
      "Web design",
      "Web development",
      "UX/UI design",
      "Digital branding",
      "Product consulting",
    ],
    keywords:
      "web design Mexico City, web development CDMX, UX UI studio Mexico, strategic design agency, Chiikö, Chiiko design",
  },
  fr: {
    slogan: "Artisanat digital à Mexico",
    organizationDescription:
      "Chiikö est un studio de design web et de développement à Mexico (CDMX). Sites, produits digitaux et UX/UI avec une approche stratégique pour le Mexique, l’Amérique latine et l’international.",
    localBusinessDescription:
      "Studio de design web à CDMX : UX/UI, frontend avancé, branding, motion et études de cas (Veraz, EAMX, Compufest). Mexico et clients internationaux.",
    knowsAbout: [
      "Design web Mexico",
      "Développement web CDMX",
      "UX/UI Mexique",
      "Design stratégique",
      "Produit digital",
    ],
    serviceTypes: [
      "Design web",
      "Développement web",
      "UX/UI",
      "Branding digital",
    ],
    keywords:
      "design web Mexico, studio web CDMX, UX UI Mexique, Chiikö",
  },
  de: {
    slogan: "Digitales Handwerk in Mexico City",
    organizationDescription:
      "Chiikö ist ein Webdesign- und Entwicklungsstudio in Mexico City (CDMX). Websites, digitale Produkte und UX/UI mit strategischem Design für Mexiko, LATAM und weltweite Marken.",
    localBusinessDescription:
      "Webdesign-Studio in CDMX: UX/UI, Frontend, Branding, Motion und Cases wie Veraz, EAMX, Compufest.",
    knowsAbout: [
      "Webdesign Mexico City",
      "Webentwicklung CDMX",
      "UX/UI Mexiko",
      "Strategisches Design",
    ],
    serviceTypes: [
      "Webdesign",
      "Webentwicklung",
      "UX/UI Design",
      "Digitales Branding",
    ],
    keywords:
      "Webdesign Mexico City, Webentwicklung CDMX, UX Studio Mexiko, Chiikö",
  },
  pt: {
    slogan: "Artesanato digital na Cidade do México",
    organizationDescription:
      "Chiikö é um estúdio de design web e desenvolvimento na CDMX. Sites, produtos digitais e UX/UI com design estratégico para México, LATAM e mercados globais.",
    localBusinessDescription:
      "Estúdio de design web na CDMX: UX/UI, frontend avançado, branding e cases Veraz, EAMX e Compufest.",
    knowsAbout: [
      "Design web CDMX",
      "Desenvolvimento web Cidade do México",
      "UX/UI México",
      "Design estratégico",
    ],
    serviceTypes: [
      "Design web",
      "Desenvolvimento web",
      "UX/UI",
      "Branding digital",
    ],
    keywords:
      "design web CDMX, desenvolvimento web Cidade do México, estúdio UX México, Chiikö",
  },
  it: {
    slogan: "Artigianato digitale a Città del Messico",
    organizationDescription:
      "Chiikö è uno studio di web design e sviluppo a Città del Messico (CDMX). Siti, prodotti digitali ed esperienze UX/UI con design strategico.",
    localBusinessDescription:
      "Studio web a CDMX: UX/UI, frontend avanzato, branding, motion e case study Veraz, EAMX, Compufest.",
    knowsAbout: [
      "Web design Città del Messico",
      "Sviluppo web CDMX",
      "UX/UI Messico",
      "Design strategico",
    ],
    serviceTypes: [
      "Web design",
      "Sviluppo web",
      "UX/UI",
      "Branding digitale",
    ],
    keywords:
      "web design Città del Messico, studio web CDMX, UX Messico, Chiikö",
  },
  ja: {
    slogan: "メキシコシティのデジタルクラフト",
    organizationDescription:
      "Chiiköはメキシコシティ（CDMX）のWebデザイン・開発スタジオです。戦略的デザインでWebサイト、デジタルプロダクト、UX/UIを提供します。",
    localBusinessDescription:
      "CDMXのWebデザインスタジオ：UX/UI、高度なフロントエンド、ブランディング、Veraz・EAMX・Compufestなどの事例。",
    knowsAbout: [
      "メキシコシティ Webデザイン",
      "CDMX Web開発",
      "UX/UI メキシコ",
      "戦略的デザイン",
    ],
    serviceTypes: ["Webデザイン", "Web開発", "UX/UI", "デジタルブランディング"],
    keywords:
      "メキシコシティ Webデザイン, CDMX Web開発, UXスタジオ, Chiikö",
  },
  ko: {
    slogan: "멕시코시티의 디지털 장인정신",
    organizationDescription:
      "Chiikö는 멕시코시티(CDMX)의 웹 디자인·개발 스튜디오입니다. 전략적 디자인으로 웹사이트, 디지털 제품, UX/UI를 만듭니다.",
    localBusinessDescription:
      "CDMX 웹 디자인 스튜디오: UX/UI, 고급 프론트엔드, 브랜딩, Veraz·EAMX·Compufest 사례.",
    knowsAbout: [
      "멕시코시티 웹 디자인",
      "CDMX 웹 개발",
      "UX/UI 멕시코",
      "전략적 디자인",
    ],
    serviceTypes: ["웹 디자인", "웹 개발", "UX/UI", "디지털 브랜딩"],
    keywords:
      "멕시코시티 웹 디자인, CDMX 웹 개발, UX 스튜디오, Chiikö",
  },
  nl: {
    slogan: "Digitaal vakmanschap in Mexico-Stad",
    organizationDescription:
      "Chiikö is een webdesign- en developmentstudio in Mexico-Stad (CDMX). Websites, digitale producten en UX/UI met strategisch design.",
    localBusinessDescription:
      "Webdesignstudio CDMX: UX/UI, advanced frontend, branding, cases Veraz, EAMX, Compufest.",
    knowsAbout: [
      "Webdesign Mexico-Stad",
      "Webdevelopment CDMX",
      "UX/UI Mexico",
      "Strategisch design",
    ],
    serviceTypes: [
      "Webdesign",
      "Webdevelopment",
      "UX/UI",
      "Digitaal branding",
    ],
    keywords:
      "webdesign Mexico-Stad, webdevelopment CDMX, UX studio Mexico, Chiikö",
  },
  zh: {
    slogan: "墨西哥城的数字工艺",
    organizationDescription:
      "Chiikö 是位于墨西哥城（CDMX）的网站设计与开发工作室，以战略设计打造网站、数字产品与 UX/UI 体验。",
    localBusinessDescription:
      "CDMX 网站设计工作室：UX/UI、高级前端、品牌与 Veraz、EAMX、Compufest 等案例。",
    knowsAbout: [
      "墨西哥城网站设计",
      "CDMX 网站开发",
      "UX/UI 墨西哥",
      "战略设计",
    ],
    serviceTypes: ["网站设计", "网站开发", "UX/UI", "数字品牌"],
    keywords:
      "墨西哥城网站设计, CDMX 网站开发, UX 工作室, Chiikö",
  },
};

export function getStudioSeoMeta(lang: AppLanguage): StudioSeoMeta {
  return STUDIO_SEO[lang];
}

export function generateProfessionalServiceSchema(lang: AppLanguage) {
  const meta = getStudioSeoMeta(lang);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_NAME} — Web design & development`,
    alternateName: ["Chiikö", "Chiiko design"],
    description: meta.localBusinessDescription,
    url: SITE_URL,
    slogan: meta.slogan,
    knowsAbout: meta.knowsAbout,
    serviceType: meta.serviceTypes,
    areaServed: [
      { "@type": "City", name: "Ciudad de México", containedInPlace: { "@type": "Country", name: "Mexico" } },
      { "@type": "Country", name: "Mexico" },
      { "@type": "AdministrativeArea", name: "LATAM" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CDMX_COORDINATES.latitude,
      longitude: CDMX_COORDINATES.longitude,
    },
    image: `${SITE_URL}/logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/chiiko/",
      "https://www.behance.net/chiiko",
      "https://instagram.com/chiiko.design",
    ],
  };
}
