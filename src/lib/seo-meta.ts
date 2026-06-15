import type { AppLanguage } from "@/lib/i18n";
import { getLegalContentLanguage } from "@/lib/i18n";

type SeoEntry = { title: string; description: string };

const HOME: Record<AppLanguage, SeoEntry> = {
  es: {
    title: "Chiiko | Diseño y Desarrollo Estratégico",
    description:
      "Estudio creativo especializado en diseño estratégico y desarrollo web. Colaboramos con marcas que buscan impacto digital.",
  },
  en: {
    title: "Chiiko | Strategic Design and Development",
    description:
      "Creative studio specializing in strategic design and web development. We collaborate with brands seeking digital impact.",
  },
  fr: {
    title: "Chiiko | Design et développement stratégique",
    description:
      "Studio créatif spécialisé en design stratégique et développement web. Nous collaborons avec des marques en quête d'impact digital.",
  },
  de: {
    title: "Chiiko | Strategisches Design und Entwicklung",
    description:
      "Kreativstudio für strategisches Design und Webentwicklung. Wir arbeiten mit Marken, die digitalen Impact suchen.",
  },
  pt: {
    title: "Chiiko | Design e desenvolvimento estratégico",
    description:
      "Estúdio criativo especializado em design estratégico e desenvolvimento web. Colaboramos com marcas que buscam impacto digital.",
  },
  it: {
    title: "Chiiko | Design e sviluppo strategico",
    description:
      "Studio creativo specializzato in design strategico e sviluppo web. Collaboriamo con brand che cercano impatto digitale.",
  },
  ja: {
    title: "Chiiko | 戦略的デザインと開発",
    description:
      "戦略的デザインとウェブ開発に特化したクリエイティブスタジオ。デジタルインパクトを求めるブランドと協働します。",
  },
  ko: {
    title: "Chiiko | 전략적 디자인과 개발",
    description:
      "전략적 디자인과 웹 개발에 특화된 크리에이티브 스튜디오. 디지털 임팩트를 추구하는 브랜드와 협업합니다.",
  },
  nl: {
    title: "Chiiko | Strategisch design en ontwikkeling",
    description:
      "Creatief studio gespecialiseerd in strategisch design en webontwikkeling. We werken met merken die digital impact zoeken.",
  },
  zh: {
    title: "Chiiko | 战略设计与开发",
    description:
      "专注于战略设计与网站开发的创意工作室。与追求数字影响力的品牌合作。",
  },
};

const ABOUT: Record<AppLanguage, SeoEntry> = {
  es: {
    title: "Sobre Chiiko | Historia y Visión",
    description:
      "Conoce nuestra historia, misión y el equipo detrás de Chiiko. Un estudio dedicado al diseño estratégico desde 2020.",
  },
  en: {
    title: "About Chiiko | Our Story and Vision",
    description:
      "Learn about our story, mission, and the team behind Chiiko. A studio dedicated to strategic design since 2020.",
  },
  fr: {
    title: "À propos de Chiiko | Histoire et vision",
    description:
      "Découvrez notre histoire, notre mission et l'équipe derrière Chiiko. Un studio dédié au design stratégique depuis 2020.",
  },
  de: {
    title: "Über Chiiko | Geschichte und Vision",
    description:
      "Erfahren Sie mehr über unsere Geschichte, Mission und das Team hinter Chiiko. Ein Studio für strategisches Design seit 2020.",
  },
  pt: {
    title: "Sobre a Chiiko | História e visão",
    description:
      "Conheça nossa história, missão e a equipe por trás da Chiiko. Um estúdio dedicado ao design estratégico desde 2020.",
  },
  it: {
    title: "Chi siamo | Storia e visione di Chiiko",
    description:
      "Scopri la nostra storia, missione e il team dietro Chiiko. Uno studio dedicato al design strategico dal 2020.",
  },
  ja: {
    title: "Chiiko について | ストーリーとビジョン",
    description:
      "Chiiko のストーリー、ミッション、チームをご紹介。2020年から戦略的デザインに取り組むスタジオです。",
  },
  ko: {
    title: "Chiiko 소개 | 스토리와 비전",
    description:
      "Chiiko의 스토리, 미션, 팀을 소개합니다. 2020년부터 전략적 디자인에 전념하는 스튜디오입니다.",
  },
  nl: {
    title: "Over Chiiko | Ons verhaal en visie",
    description:
      "Leer ons verhaal, missie en het team achter Chiiko kennen. Een studio voor strategisch design sinds 2020.",
  },
  zh: {
    title: "关于 Chiiko | 故事与愿景",
    description:
      "了解 Chiiko 的故事、使命与团队。自 2020 年起专注于战略设计的工作室。",
  },
};

const CONTACT: Record<AppLanguage, SeoEntry> = {
  es: {
    title: "Contacto | Comienza tu Proyecto",
    description:
      "¿Tienes un proyecto en mente? Contáctanos y cuéntanos sobre tu visión. Respondemos en 48 horas.",
  },
  en: {
    title: "Contact | Start Your Project",
    description:
      "Have a project in mind? Contact us and tell us about your vision. We respond within 48 hours.",
  },
  fr: {
    title: "Contact | Lancez votre projet",
    description:
      "Un projet en tête ? Contactez-nous et partagez votre vision. Nous répondons sous 48 heures.",
  },
  de: {
    title: "Kontakt | Starten Sie Ihr Projekt",
    description:
      "Haben Sie ein Projekt im Sinn? Kontaktieren Sie uns. Wir antworten innerhalb von 48 Stunden.",
  },
  pt: {
    title: "Contato | Comece seu projeto",
    description:
      "Tem um projeto em mente? Fale conosco. Respondemos em até 48 horas.",
  },
  it: {
    title: "Contatto | Inizia il tuo progetto",
    description:
      "Hai un progetto in mente? Contattaci. Rispondiamo entro 48 ore.",
  },
  ja: {
    title: "お問い合わせ | プロジェクトを始める",
    description:
      "プロジェクトをお考えですか？ご連絡ください。48時間以内に返信します。",
  },
  ko: {
    title: "문의 | 프로젝트 시작하기",
    description:
      "프로젝트가 있으신가요? 연락 주세요. 48시간 내에 답변드립니다.",
  },
  nl: {
    title: "Contact | Start je project",
    description:
      "Heb je een project in gedachten? Neem contact op. We reageren binnen 48 uur.",
  },
  zh: {
    title: "联系 | 开始您的项目",
    description: "有项目想法？联系我们。我们会在 48 小时内回复。",
  },
};

const FAQ: Record<AppLanguage, SeoEntry> = {
  es: {
    title: "Preguntas Frecuentes | Chiiko",
    description:
      "Respuestas a las preguntas más comunes sobre nuestros servicios, procesos y garantías.",
  },
  en: {
    title: "FAQ | Frequently Asked Questions",
    description:
      "Answers to common questions about our services, processes, and guarantees.",
  },
  fr: {
    title: "FAQ | Questions fréquentes",
    description:
      "Réponses aux questions les plus courantes sur nos services, processus et garanties.",
  },
  de: {
    title: "FAQ | Häufig gestellte Fragen",
    description:
      "Antworten auf häufige Fragen zu unseren Services, Prozessen und Garantien.",
  },
  pt: {
    title: "FAQ | Perguntas frequentes",
    description:
      "Respostas às perguntas mais comuns sobre nossos serviços, processos e garantias.",
  },
  it: {
    title: "FAQ | Domande frequenti",
    description:
      "Risposte alle domande più comuni su servizi, processi e garanzie.",
  },
  ja: {
    title: "FAQ | よくある質問",
    description: "サービス、プロセス、保証に関するよくある質問への回答。",
  },
  ko: {
    title: "FAQ | 자주 묻는 질문",
    description: "서비스, 프로세스, 보증에 관한 자주 묻는 질문에 대한 답변.",
  },
  nl: {
    title: "FAQ | Veelgestelde vragen",
    description:
      "Antwoorden op veelgestelde vragen over onze diensten, processen en garanties.",
  },
  zh: {
    title: "常见问题 | Chiiko",
    description: "关于我们的服务、流程和保障的常见问答。",
  },
};

const HELP: Record<AppLanguage, SeoEntry> = {
  es: {
    title: "Centro de Ayuda | Soporte de Chiiko",
    description: "Encuentra respuestas rápidas y acceso a nuestros canales de soporte.",
  },
  en: {
    title: "Help Center | Chiiko Support",
    description: "Find quick answers and access to our support channels.",
  },
  fr: {
    title: "Centre d'aide | Support Chiiko",
    description: "Trouvez des réponses rapides et accédez à nos canaux de support.",
  },
  de: {
    title: "Hilfezentrum | Chiiko Support",
    description: "Schnelle Antworten und Zugang zu unseren Support-Kanälen.",
  },
  pt: {
    title: "Central de ajuda | Suporte Chiiko",
    description: "Encontre respostas rápidas e acesse nossos canais de suporte.",
  },
  it: {
    title: "Centro assistenza | Supporto Chiiko",
    description: "Trova risposte rapide e accedi ai nostri canali di supporto.",
  },
  ja: {
    title: "ヘルプセンター | Chiiko サポート",
    description: "迅速な回答とサポートチャネルへのアクセス。",
  },
  ko: {
    title: "고객센터 | Chiiko 지원",
    description: "빠른 답변과 지원 채널을 확인하세요.",
  },
  nl: {
    title: "Helpcentrum | Chiiko Support",
    description: "Vind snelle antwoorden en toegang tot onze supportkanalen.",
  },
  zh: {
    title: "帮助中心 | Chiiko 支持",
    description: "快速找到答案并访问我们的支持渠道。",
  },
};

const LEGAL_ES_EN = {
  privacy: {
    es: {
      title: "Política de Privacidad | Chiiko",
      description: "Política de privacidad de Chiiko. Conoce cómo protegemos tus datos.",
    },
    en: {
      title: "Privacy Policy | Chiiko",
      description: "Chiiko's privacy policy. Learn how we protect your data.",
    },
  },
  terms: {
    es: {
      title: "Términos y Condiciones | Chiiko",
      description: "Términos y condiciones de uso de los servicios de Chiiko.",
    },
    en: {
      title: "Terms and Conditions | Chiiko",
      description: "Terms and conditions for using Chiiko's services.",
    },
  },
} as const;

export type SeoPageKey =
  | "home"
  | "about"
  | "contact"
  | "faq"
  | "help"
  | "privacy"
  | "terms";

const PAGE_MAP: Record<
  Exclude<SeoPageKey, "privacy" | "terms">,
  Record<AppLanguage, SeoEntry>
> = {
  home: HOME,
  about: ABOUT,
  contact: CONTACT,
  faq: FAQ,
  help: HELP,
};

export function getPageSeo(page: SeoPageKey, lang: AppLanguage): SeoEntry {
  if (page === "privacy" || page === "terms") {
    return LEGAL_ES_EN[page][getLegalContentLanguage(lang)];
  }
  return PAGE_MAP[page][lang];
}
