import type { AppLanguage } from "@/lib/i18n";

export const verazItems: Record<
  AppLanguage,
  {
    title: string;
    description: string;
    services: string;
    client: string;
  }
> = {
  es: {
    title: "Veraz",
    description:
      "Plataforma de noticias · Producto + diseño + ingeniería.",
    services:
      "Design system, producto, frontend avanzado, motion GSAP, 3D (R3F), arquitectura e ingesta.",
    client: "Veraz · veraz.app",
  },
  en: {
    title: "Veraz",
    description: "News platform · Product + design + engineering.",
    services:
      "Design system, product, advanced frontend, GSAP motion, 3D (R3F), architecture and ingestion.",
    client: "Veraz · veraz.app",
  },
  fr: {
    title: "Veraz",
    description: "Plateforme d’actualités · Produit + design + ingénierie.",
    services:
      "Design system, produit, frontend avancé, motion GSAP, 3D (R3F), architecture et ingestion.",
    client: "Veraz · veraz.app",
  },
  de: {
    title: "Veraz",
    description: "Nachrichtenplattform · Produkt + Design + Engineering.",
    services:
      "Design System, Produkt, Advanced Frontend, GSAP Motion, 3D (R3F), Architektur und Ingestion.",
    client: "Veraz · veraz.app",
  },
  pt: {
    title: "Veraz",
    description: "Plataforma de notícias · Produto + design + engenharia.",
    services:
      "Design system, produto, frontend avançado, motion GSAP, 3D (R3F), arquitetura e ingestão.",
    client: "Veraz · veraz.app",
  },
  it: {
    title: "Veraz",
    description: "Piattaforma di notizie · Prodotto + design + ingegneria.",
    services:
      "Design system, prodotto, frontend avanzato, motion GSAP, 3D (R3F), architettura e ingestion.",
    client: "Veraz · veraz.app",
  },
  ja: {
    title: "Veraz",
    description: "ニュースプラットフォーム · プロダクト + デザイン + エンジニアリング。",
    services:
      "デザインシステム、プロダクト、高度なフロントエンド、GSAPモーション、3D（R3F）、アーキテクチャとインジェスト。",
    client: "Veraz · veraz.app",
  },
  ko: {
    title: "Veraz",
    description: "뉴스 플랫폼 · 제품 + 디자인 + 엔지니어링.",
    services:
      "디자인 시스템, 제품, 고급 프론트엔드, GSAP 모션, 3D(R3F), 아키텍처 및 수집.",
    client: "Veraz · veraz.app",
  },
  nl: {
    title: "Veraz",
    description: "Nieuwsplatform · Product + design + engineering.",
    services:
      "Design system, product, advanced frontend, GSAP motion, 3D (R3F), architectuur en ingestie.",
    client: "Veraz · veraz.app",
  },
  zh: {
    title: "Veraz",
    description: "新闻平台 · 产品 + 设计 + 工程。",
    services:
      "设计系统、产品、高级前端、GSAP 动效、3D（R3F）、架构与采集。",
    client: "Veraz · veraz.app",
  },
};
