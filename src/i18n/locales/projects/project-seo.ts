import type { AppLanguage } from "@/lib/i18n";

type PageSeo = { seoTitle: string; seoDescription: string };

export const projectsPageSeo: Record<AppLanguage, PageSeo> = {
  es: {
    seoTitle: "Proyectos y casos de estudio | Diseño web CDMX | Chiikö",
    seoDescription:
      "Casos de estudio de diseño web y producto digital en Ciudad de México: Veraz (noticias + 3D), EAMX, Compufest, portafolios y más. Estudio Chiikö en CDMX.",
  },
  en: {
    seoTitle: "Projects & case studies | Web design Mexico City | Chiikö",
    seoDescription:
      "Web design and digital product case studies from our Mexico City studio: Veraz, EAMX, Compufest, portfolios, and more. Chiikö, CDMX.",
  },
  fr: {
    seoTitle: "Projets et études de cas | Design web Mexico | Chiikö",
    seoDescription:
      "Études de cas design web et produit digital depuis Mexico (CDMX) : Veraz, EAMX, Compufest. Studio Chiikö.",
  },
  de: {
    seoTitle: "Projekte & Fallstudien | Webdesign Mexico City | Chiikö",
    seoDescription:
      "Fallstudien Webdesign und digitale Produkte aus Mexico City (CDMX): Veraz, EAMX, Compufest. Studio Chiikö.",
  },
  pt: {
    seoTitle: "Projetos e cases | Design web CDMX | Chiikö",
    seoDescription:
      "Cases de design web e produto digital na Cidade do México: Veraz, EAMX, Compufest. Estúdio Chiikö.",
  },
  it: {
    seoTitle: "Progetti e case study | Web design CDMX | Chiikö",
    seoDescription:
      "Case study di web design e prodotto digitale a Città del Messico: Veraz, EAMX, Compufest. Studio Chiikö.",
  },
  ja: {
    seoTitle: "プロジェクト・事例 | CDMX Webデザイン | Chiikö",
    seoDescription:
      "メキシコシティのWebデザイン事例：Veraz、EAMX、Compufestなど。Chiiköスタジオ。",
  },
  ko: {
    seoTitle: "프로젝트·사례 | CDMX 웹 디자인 | Chiikö",
    seoDescription:
      "멕시코시티 웹 디자인 사례: Veraz, EAMX, Compufest. Chiikö 스튜디오.",
  },
  nl: {
    seoTitle: "Projecten & cases | Webdesign CDMX | Chiikö",
    seoDescription:
      "Webdesign cases uit Mexico-Stad: Veraz, EAMX, Compufest. Studio Chiikö.",
  },
  zh: {
    seoTitle: "项目与案例 | CDMX 网站设计 | Chiikö",
    seoDescription:
      "墨西哥城网站设计案例：Veraz、EAMX、Compufest 等。Chiikö 工作室。",
  },
};

export type ProjectSlugSeo =
  | "veraz"
  | "eamx"
  | "compufest"
  | "emicarrada"
  | "alancrespo_ai";

export const projectSlugSeo: Record<
  ProjectSlugSeo,
  Record<AppLanguage, PageSeo>
> = {
  veraz: {
    es: {
      seoTitle: "Veraz | Caso diseño web, producto y 3D | Chiikö CDMX",
      seoDescription:
        "Caso Veraz: plataforma de noticias con design system, landing GSAP, globo 3D (React Three Fiber), Next.js, Supabase e ingesta RSS. Diseño e ingeniería por Chiikö en Ciudad de México.",
    },
    en: {
      seoTitle: "Veraz | Web design, product & 3D case study | Chiikö CDMX",
      seoDescription:
        "Veraz case study: news platform with tokenized design system, GSAP landing, 3D globe (React Three Fiber), Next.js, Supabase, RSS ingestion. Design and engineering by Chiikö in Mexico City.",
    },
    fr: {
      seoTitle: "Veraz | Étude de cas design web, produit et 3D | Chiikö",
      seoDescription:
        "Veraz : plateforme d’actualités, design system, landing GSAP, globe 3D (R3F), Next.js et Supabase. Réalisé par Chiikö à Mexico.",
    },
    de: {
      seoTitle: "Veraz | Fallstudie Webdesign, Produkt & 3D | Chiikö",
      seoDescription:
        "Veraz: Nachrichtenplattform mit Design System, GSAP-Landing, 3D-Globus (R3F), Next.js, Supabase. Von Chiikö in Mexico City.",
    },
    pt: {
      seoTitle: "Veraz | Case design web, produto e 3D | Chiikö",
      seoDescription:
        "Veraz: plataforma de notícias, design system, landing GSAP, globo 3D, Next.js e Supabase. Chiikö na CDMX.",
    },
    it: {
      seoTitle: "Veraz | Case study web design, prodotto e 3D | Chiikö",
      seoDescription:
        "Veraz: piattaforma news, design system, landing GSAP, globo 3D, Next.js e Supabase. Chiikö a Città del Messico.",
    },
    ja: {
      seoTitle: "Veraz | Webデザイン・プロダクト・3D事例 | Chiikö",
      seoDescription:
        "Veraz：ニュースプラットフォーム、デザインシステム、GSAP、3Dグローブ、Next.js、Supabase。Chiikö（CDMX）。",
    },
    ko: {
      seoTitle: "Veraz | 웹 디자인·제품·3D 사례 | Chiikö",
      seoDescription:
        "Veraz: 뉴스 플랫폼, 디자인 시스템, GSAP, 3D, Next.js, Supabase. Chiikö CDMX.",
    },
    nl: {
      seoTitle: "Veraz | Case webdesign, product & 3D | Chiikö",
      seoDescription:
        "Veraz: nieuwsplatform, design system, GSAP, 3D-globe, Next.js, Supabase. Chiikö Mexico-Stad.",
    },
    zh: {
      seoTitle: "Veraz | 网站设计·产品·3D 案例 | Chiikö",
      seoDescription:
        "Veraz：新闻平台、设计系统、GSAP、3D 地球、Next.js、Supabase。Chiikö 墨西哥城工作室。",
    },
  },
  eamx: {
    es: {
      seoTitle: "EAMX | Caso diseño web interactivo CDMX | Chiikö",
      seoDescription:
        "Caso EAMX: arquitectura digital con física 3D, Next.js y motion. Diseño web de alto impacto por Chiikö en Ciudad de México.",
    },
    en: {
      seoTitle: "EAMX | Interactive web design case | Chiikö CDMX",
      seoDescription:
        "EAMX case: digital architecture with 3D physics, Next.js, and motion. High-impact web design by Chiikö in Mexico City.",
    },
    fr: {
      seoTitle: "EAMX | Cas design web interactif | Chiikö",
      seoDescription: "EAMX : architecture digitale, 3D, Next.js. Chiikö Mexico.",
    },
    de: {
      seoTitle: "EAMX | Interaktives Webdesign | Chiikö",
      seoDescription: "EAMX: digitale Architektur, 3D, Next.js. Chiikö CDMX.",
    },
    pt: {
      seoTitle: "EAMX | Case web interativo | Chiikö",
      seoDescription: "EAMX: arquitetura digital, 3D, Next.js. Chiikö CDMX.",
    },
    it: {
      seoTitle: "EAMX | Case web interattivo | Chiikö",
      seoDescription: "EAMX: architettura digitale, 3D, Next.js. Chiikö.",
    },
    ja: {
      seoTitle: "EAMX | インタラクティブWeb事例 | Chiikö",
      seoDescription: "EAMX：3D、Next.js。Chiikö CDMX。",
    },
    ko: {
      seoTitle: "EAMX | 인터랙티브 웹 사례 | Chiikö",
      seoDescription: "EAMX: 3D, Next.js. Chiikö CDMX.",
    },
    nl: {
      seoTitle: "EAMX | Interactief webdesign | Chiikö",
      seoDescription: "EAMX: 3D, Next.js. Chiikö CDMX.",
    },
    zh: {
      seoTitle: "EAMX | 互动网站案例 | Chiikö",
      seoDescription: "EAMX：3D、Next.js。Chiikö 墨西哥城。",
    },
  },
  compufest: {
    es: {
      seoTitle: "Compufest | Caso diseño web evento UNAM | Chiikö",
      seoDescription:
        "Compufest: identidad y web para el hackathon estudiantil más grande de la UNAM. UI oscura, UX y desarrollo por Chiikö CDMX.",
    },
    en: {
      seoTitle: "Compufest | UNAM event web design case | Chiikö",
      seoDescription:
        "Compufest: brand and website for UNAM’s largest student hackathon. Dark UI, UX, and development by Chiikö CDMX.",
    },
    fr: {
      seoTitle: "Compufest | Cas web événement UNAM | Chiikö",
      seoDescription: "Compufest : hackathon UNAM, UI sombre. Chiikö CDMX.",
    },
    de: {
      seoTitle: "Compufest | UNAM Event Webdesign | Chiikö",
      seoDescription: "Compufest: UNAM-Hackathon, Dark UI. Chiikö CDMX.",
    },
    pt: {
      seoTitle: "Compufest | Case web UNAM | Chiikö",
      seoDescription: "Compufest: hackathon UNAM. Chiikö CDMX.",
    },
    it: {
      seoTitle: "Compufest | Case web UNAM | Chiikö",
      seoDescription: "Compufest: hackathon UNAM. Chiikö CDMX.",
    },
    ja: {
      seoTitle: "Compufest | UNAMイベントWeb | Chiikö",
      seoDescription: "Compufest：UNAM。Chiikö CDMX。",
    },
    ko: {
      seoTitle: "Compufest | UNAM 웹 사례 | Chiikö",
      seoDescription: "Compufest: UNAM. Chiikö CDMX.",
    },
    nl: {
      seoTitle: "Compufest | UNAM web case | Chiikö",
      seoDescription: "Compufest: UNAM hackathon. Chiikö CDMX.",
    },
    zh: {
      seoTitle: "Compufest | UNAM 活动网站 | Chiikö",
      seoDescription: "Compufest：UNAM。Chiikö CDMX。",
    },
  },
  emicarrada: {
    es: {
      seoTitle: "emicarrada.com | Portafolio WebGL CDMX | Chiikö",
      seoDescription:
        "Caso emicarrada.com: portafolio con WebGL 3D, terminal CLI y motion. Desarrollo frontend avanzado por Chiikö en Ciudad de México.",
    },
    en: {
      seoTitle: "emicarrada.com | WebGL portfolio case | Chiikö CDMX",
      seoDescription:
        "emicarrada.com: portfolio with WebGL 3D, CLI terminal, and motion. Advanced frontend by Chiikö in Mexico City.",
    },
    fr: {
      seoTitle: "emicarrada.com | Portfolio WebGL | Chiikö",
      seoDescription: "Portfolio WebGL et CLI. Chiikö CDMX.",
    },
    de: {
      seoTitle: "emicarrada.com | WebGL Portfolio | Chiikö",
      seoDescription: "WebGL-Portfolio. Chiikö CDMX.",
    },
    pt: {
      seoTitle: "emicarrada.com | Portfólio WebGL | Chiikö",
      seoDescription: "Portfólio WebGL. Chiikö CDMX.",
    },
    it: {
      seoTitle: "emicarrada.com | Portfolio WebGL | Chiikö",
      seoDescription: "Portfolio WebGL. Chiikö CDMX.",
    },
    ja: {
      seoTitle: "emicarrada.com | WebGLポートフォリオ | Chiikö",
      seoDescription: "WebGLポートフォリオ。Chiikö CDMX。",
    },
    ko: {
      seoTitle: "emicarrada.com | WebGL 포트폴리오 | Chiikö",
      seoDescription: "WebGL 포트폴리오. Chiikö CDMX.",
    },
    nl: {
      seoTitle: "emicarrada.com | WebGL portfolio | Chiikö",
      seoDescription: "WebGL portfolio. Chiikö CDMX.",
    },
    zh: {
      seoTitle: "emicarrada.com | WebGL 作品集 | Chiikö",
      seoDescription: "WebGL 作品集。Chiikö CDMX。",
    },
  },
  alancrespo_ai: {
    es: {
      seoTitle: "Alan Crespo | Identidad digital Deep Tech | Chiikö",
      seoDescription:
        "Caso Alan Crespo: branding, contenido y posicionamiento B2B en IA. Estrategia digital por Chiikö en CDMX.",
    },
    en: {
      seoTitle: "Alan Crespo | Deep Tech digital identity | Chiikö",
      seoDescription:
        "Alan Crespo case: branding, content, and B2B AI positioning. Digital strategy by Chiikö CDMX.",
    },
    fr: {
      seoTitle: "Alan Crespo | Identité Deep Tech | Chiikö",
      seoDescription: "Branding IA B2B. Chiikö CDMX.",
    },
    de: {
      seoTitle: "Alan Crespo | Deep-Tech Identität | Chiikö",
      seoDescription: "B2B KI-Branding. Chiikö CDMX.",
    },
    pt: {
      seoTitle: "Alan Crespo | Identidade Deep Tech | Chiikö",
      seoDescription: "Branding IA B2B. Chiikö CDMX.",
    },
    it: {
      seoTitle: "Alan Crespo | Identità Deep Tech | Chiikö",
      seoDescription: "Branding IA B2B. Chiikö CDMX.",
    },
    ja: {
      seoTitle: "Alan Crespo | Deep Techブランド | Chiikö",
      seoDescription: "B2B AI。Chiikö CDMX。",
    },
    ko: {
      seoTitle: "Alan Crespo | Deep Tech 아이덴티티 | Chiikö",
      seoDescription: "B2B AI. Chiikö CDMX.",
    },
    nl: {
      seoTitle: "Alan Crespo | Deep Tech identiteit | Chiikö",
      seoDescription: "B2B AI branding. Chiikö CDMX.",
    },
    zh: {
      seoTitle: "Alan Crespo | Deep Tech 品牌 | Chiikö",
      seoDescription: "B2B AI 定位。Chiikö CDMX。",
    },
  },
};

export function mergeProjectItemSeo<T extends Record<string, string>>(
  slug: ProjectSlugSeo,
  lang: AppLanguage,
  item: T
): T & PageSeo {
  return { ...item, ...projectSlugSeo[slug][lang] };
}
