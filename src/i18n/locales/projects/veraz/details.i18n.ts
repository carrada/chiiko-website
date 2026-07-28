import type { ProjectDetailContent } from "@/data/projectDetails";

type VerazLocaleStrings = {
  tagline: string;
  services: string;
  client: string;
  contextTitle: string;
  context: [string, string, string];
  steps: Array<{
    number: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    bulletLabel?: string;
    bulletText?: string;
    table?: Array<{ component: string; description: string }>;
  }>;
  impactQuote: string;
  impactAttribution: string;
};

function buildVerazDetails(strings: VerazLocaleStrings): ProjectDetailContent {
  return {
    tagline: strings.tagline,
    services: strings.services,
    client: strings.client,
    contextTitle: strings.contextTitle,
    contextParagraphs: [...strings.context],
    steps: strings.steps.map((step) => ({
      number: step.number,
      title: step.title,
      subtitle: step.subtitle,
      paragraphs: step.paragraphs,
      ...(step.bulletLabel && step.bulletText
        ? { bullets: [{ label: step.bulletLabel, text: step.bulletText }] }
        : {}),
      ...(step.table ? { table: step.table } : {}),
    })),
    impactQuote: strings.impactQuote,
    impactAttribution: strings.impactAttribution,
  };
}

const FR: VerazLocaleStrings = {
  tagline:
    "Plateforme d’actualités · Produit + design + ingénierie — informer sans influencer.",
  services:
    "Design system, direction produit, frontend (Next.js), motion (GSAP), 3D (React Three Fiber), architecture et ingestion.",
  client: "Veraz · veraz.app",
  contextTitle: "Résumé exécutif",
  context: [
    "Veraz est une plateforme d’actualités dont la devise est « informer sans influencer » : sources vérifiables, titres et extraits avec attribution claire, lien vers le média original sans republier l’article complet. L’IA est optionnelle et ne bloque jamais la publication ni la lecture.",
    "Pour Chiikö, le projet combine un design system tokenisé (thème sombre, typographie dédiée), une landing GSAP avec globe 3D interactif (React Three Fiber), un produit de lecture bilingue (es/en) avec fils par verticales et bannière de confiance, et un backend modulaire (Next.js + Supabase) avec ingestion RSS et diffusion sociale. Production sur Vercel et AWS EC2 (social via Playwright).",
    "Ce que Veraz fait : curation RSS et catalogue médias, fiches article avec SEO et JSON-LD. Ce qu’elle ne fait pas : inventer des faits, dépendre de l’IA, remplacer le média source. Public : lecteurs ES (LATAM) et EN ; marque sobre, lisible, transparente sur les sources.",
  ],
  steps: [
    {
      number: "01",
      title: "Produit et principes",
      subtitle: "L’actualité d’abord, traçabilité et neutralité.",
      paragraphs: [
        "Publier et lire sans IA. Toute enrichissement futur cite des sources réelles. La plateforme informe sans récit éditorial imposé. Aucun appel synchrone aux modèles sur le parcours critique.",
        "Monolithe modulaire Next.js 15 (App Router) : app/ compose ; domaine pur ; IA et RSS via @/lib/ai-engine et @/lib/news-ingestion.",
      ],
    },
    {
      number: "02",
      title: "Design web : système, landing et 3D",
      subtitle: "Identité éditoriale scalable.",
      paragraphs: [
        "Tokens CSS, typographie sémantique, thème sombre, accessibilité AA, composants primitifs réutilisables.",
        "Landing modulaire, motion GSAP, PillNav, switcher de locale, hero 3D (globe, shaders, marqueurs HTML, R3F + drei).",
      ],
      bulletLabel: "Apport Chiikö",
      bulletText:
        "Un focal point 3D évite le site d’actualités générique et renforce l’idée de couverture globale multi-sources.",
    },
    {
      number: "03",
      title: "Produit de lecture et i18n",
      subtitle: "Verticales, confiance et bilinguisme.",
      paragraphs: [
        "/noticias : onglets par vertical, filtres tags, bannière de confiance, cartes sécurisées, détail avec JSON-LD, load more, shell produit distinct.",
        "Routes /es et /en avec next-intl ; catalogues RSS par langue ; PostHog optionnel.",
      ],
    },
    {
      number: "04",
      title: "Backend, ingestion et IA optionnelle",
      subtitle: "Pipeline par étapes, fail-open.",
      paragraphs: [
        "Moteur d’ingestion RSS, Supabase idempotent, cron API, catalogues médias internationaux. Un fournisseur en panne n’arrête pas le reste.",
        "Entités Source, Article, Story ; IA désactivée par défaut, providers multiples, Config Engine centralisé.",
      ],
      table: [
        { component: "Web + cron ingestion", description: "Vercel" },
        { component: "PostgreSQL + auth", description: "Supabase" },
        { component: "Social X / IG / Telegram", description: "AWS EC2 + Playwright" },
      ],
    },
    {
      number: "05",
      title: "Diffusion sociale",
      subtitle: "Cartes éditoriales et score d’audience.",
      paragraphs: [
        "X et Instagram via Playwright ; PNG 1080×1080 ; TikTok/Reels via MP4 et Telegram ; sélection par reach score.",
        "Stack : Next.js 15, React 19, Tailwind, R3F, GSAP, next-intl, Supabase, Vitest.",
      ],
    },
    {
      number: "06",
      title: "Angles narratifs Chiikö",
      subtitle: "Confiance, système, produit honnête.",
      paragraphs: [
        "Marque = confiance : UI sombre, typo forte, contenu first. Système tokenisé jusqu’aux cartes sociales.",
        "Veraz est une plateforme médias, pas un wrapper ChatGPT. Ingestion 24/7 = produit moderne.",
      ],
    },
  ],
  impactQuote:
    "Veraz montre que design stratégique et ingénierie produit peuvent aligner sur un média digital : identité tokenisée, hero 3D mémorable, architecture qui privilégie la lecture et la source plutôt que le hype IA.",
  impactAttribution: "Chiikö · Cas Veraz",
};

const DE: VerazLocaleStrings = {
  tagline:
    "Nachrichtenplattform · Produkt + Design + Engineering — informieren ohne zu beeinflussen.",
  services:
    "Design System, Produktdirection, Frontend (Next.js), Motion (GSAP), 3D (R3F), Architektur und Ingestion.",
  client: "Veraz · veraz.app",
  contextTitle: "Executive Summary",
  context: [
    "Veraz ist eine Nachrichtenplattform mit dem Leitsatz „informieren ohne zu beeinflussen“: verifizierbare Quellen, klare Attribution, Link zum Original ohne Volltext-Republish. KI ist optional und blockiert nie Lesen oder Publish.",
    "Chiikö kombiniert tokenisiertes Design System, GSAP-Landing mit 3D-Globus (R3F), bilingualen Leseprodukt (es/en) und modulares Backend (Next.js + Supabase) mit RSS-Ingestion und Social-Automation. Produktion auf Vercel und AWS EC2.",
    "Zielgruppe: ES (LATAM) und EN; vertikale Themen; Marke: nüchtern, lesbar, quellentransparent.",
  ],
  steps: [
    {
      number: "01",
      title: "Produkt und Prinzipien",
      subtitle: "News first, Nachvollziehbarkeit, Neutralität.",
      paragraphs: [
        "Kein KI-Zwang für Publish/Lesen. Modularer Next.js-15-Monolith mit klaren Dependency-Regeln.",
        "Domain rein; KI/RSS nur über dedizierte Libs.",
      ],
    },
    {
      number: "02",
      title: "Webdesign: System, Landing, 3D",
      subtitle: "Skalierbare Editorial-Identität.",
      paragraphs: [
        "CSS-Tokens, Dark Theme, AA, Primitives.",
        "Modulares Landing, GSAP, 3D-Hero mit R3F.",
      ],
      bulletLabel: "Chiikö Learnings",
      bulletText: "Ein 3D-Fokus vermeidet generische News-Sites.",
    },
    {
      number: "03",
      title: "Leseprodukt und i18n",
      subtitle: "Vertikalen und Vertrauen.",
      paragraphs: ["/noticias mit Tabs, Trust-Banner, JSON-LD-Detail.", "next-intl /es /en, optional PostHog."],
    },
    {
      number: "04",
      title: "Backend und optionale KI",
      subtitle: "Pipeline, fail-open.",
      paragraphs: ["RSS-Ingestion, Supabase, Cron.", "KI default off, Config Engine."],
      table: [
        { component: "Web + Cron", description: "Vercel" },
        { component: "DB", description: "Supabase" },
        { component: "Social", description: "AWS EC2" },
      ],
    },
    {
      number: "05",
      title: "Social Distribution",
      subtitle: "Editorial Cards, Reach Score.",
      paragraphs: ["Playwright für X/IG.", "Next.js, R3F, GSAP Stack."],
    },
    {
      number: "06",
      title: "Chiikö Narrative",
      subtitle: "Vertrauen und ehrliches Produkt.",
      paragraphs: ["Tokens bis Social Cards.", "Medienplattform, kein ChatGPT-Wrapper."],
    },
  ],
  impactQuote:
    "Veraz zeigt, wie strategisches Design und Product Engineering in einem Medienprodukt zusammenwirken — ohne KI-Hype, mit echter Operation.",
  impactAttribution: "Chiikö · Veraz Case",
};

const PT: VerazLocaleStrings = {
  tagline:
    "Plataforma de notícias · Produto + design + engenharia — informar sem influenciar.",
  services:
    "Design system, produto, frontend (Next.js), motion (GSAP), 3D (R3F), arquitetura e ingestão.",
  client: "Veraz · veraz.app",
  contextTitle: "Resumo executivo",
  context: [
    "Veraz agrega fontes verificáveis, titulares e trechos com atribuição clara e link ao original. IA opcional, nunca bloqueia leitura ou publicação.",
    "Design system tokenizado, landing GSAP com globo 3D (R3F), produto bilíngue e backend Next.js + Supabase com RSS e social. Vercel + AWS EC2.",
    "Marca sóbria, confiança pela transparência de fontes; audiência ES (LATAM) e EN.",
  ],
  steps: [
    {
      number: "01",
      title: "Produto e princípios",
      subtitle: "Notícias primeiro, rastreabilidade.",
      paragraphs: ["Publicar e ler sem IA.", "Monolito modular Next.js 15."],
    },
    {
      number: "02",
      title: "Design web",
      subtitle: "Sistema, landing e 3D.",
      paragraphs: ["Tokens, dark theme, componentes.", "Hero 3D com R3F."],
      bulletLabel: "Aprendizado Chiikö",
      bulletText: "Globo 3D evita site genérico de notícias.",
    },
    {
      number: "03",
      title: "Leitura e i18n",
      subtitle: "Verticais e confiança.",
      paragraphs: ["/noticias com abas e JSON-LD.", "next-intl es/en."],
    },
    {
      number: "04",
      title: "Backend e IA opcional",
      subtitle: "Ingestão RSS, fail-open.",
      paragraphs: ["Supabase, cron, catálogo RSS.", "IA desligada por padrão."],
      table: [
        { component: "Web", description: "Vercel" },
        { component: "Dados", description: "Supabase" },
        { component: "Social", description: "AWS EC2" },
      ],
    },
    {
      number: "05",
      title: "Distribuição social",
      subtitle: "Cards e reach score.",
      paragraphs: ["X, Instagram, TikTok via Telegram.", "Stack Next.js + R3F."],
    },
    {
      number: "06",
      title: "Narrativa Chiikö",
      subtitle: "Confiança e produto honesto.",
      paragraphs: ["Identidade em tokens.", "Plataforma de mídia, não wrapper de IA."],
    },
  ],
  impactQuote:
    "Veraz prova que design estratégico e engenharia podem sustentar um produto de mídia real — informar sem influenciar.",
  impactAttribution: "Chiikö · Caso Veraz",
};

const IT: VerazLocaleStrings = {
  tagline:
    "Piattaforma news · Prodotto + design + ingegneria — informare senza influenzare.",
  services:
    "Design system, prodotto, frontend (Next.js), motion (GSAP), 3D (R3F), architettura e ingestion.",
  client: "Veraz · veraz.app",
  contextTitle: "Executive summary",
  context: [
    "Veraz cura fonti verificabili, titoli ed estratti con attribuzione chiara; IA opzionale.",
    "Design system, landing GSAP, globo 3D, backend Next.js + Supabase, RSS e social.",
    "Pubblico ES/EN; brand sobrio e trasparente sulle fonti.",
  ],
  steps: [
    { number: "01", title: "Prodotto e principi", subtitle: "News first.", paragraphs: ["Niente IA obbligatoria.", "Monolite modulare Next.js 15."] },
    { number: "02", title: "Design web", subtitle: "Sistema e 3D.", paragraphs: ["Token e dark theme.", "Hero R3F."], bulletLabel: "Chiikö", bulletText: "Globo 3D distintivo." },
    { number: "03", title: "Lettura e i18n", subtitle: "Verticali.", paragraphs: ["/noticias, JSON-LD.", "next-intl."] },
    { number: "04", title: "Backend", subtitle: "Ingestion.", paragraphs: ["RSS + Supabase.", "IA fail-open."], table: [{ component: "Web", description: "Vercel" }, { component: "DB", description: "Supabase" }, { component: "Social", description: "AWS" }] },
    { number: "05", title: "Social", subtitle: "Distribuzione.", paragraphs: ["Playwright, reach score."] },
    { number: "06", title: "Narrativa Chiikö", subtitle: "Fiducia.", paragraphs: ["Sistema tokenizzato.", "Non un wrapper ChatGPT."] },
  ],
  impactQuote: "Veraz unisce design strategico e product engineering in un media digitale credibile.",
  impactAttribution: "Chiikö · Caso Veraz",
};

const JA: VerazLocaleStrings = {
  tagline: "ニュースプラットフォーム · プロダクト + デザイン + エンジニアリング — 影響せずに伝える。",
  services: "デザインシステム、プロダクト、Next.js、GSAP、R3F、RSSインジェスト。",
  client: "Veraz · veraz.app",
  contextTitle: "エグゼクティブサマリー",
  context: [
    "Verazは検証可能なソースから見出しと抜粋を表示し、原文へリンク。AIは任意。",
    "トークン化デザインシステム、GSAPランディング、3D地球儀、Next.js + Supabase。",
    "ES/EN読者向け。落ち着いた編集トーンとソース透明性。",
  ],
  steps: [
    { number: "01", title: "プロダクト原則", subtitle: "ニュース優先。", paragraphs: ["AI不要で公開・閲覧。", "Next.js 15モジュラーモノリス。"] },
    { number: "02", title: "Webデザイン", subtitle: "システムと3D。", paragraphs: ["CSSトークン、ダークテーマ。", "R3F 3Dヒーロー。"], bulletLabel: "Chiikö", bulletText: "3Dで差別化。" },
    { number: "03", title: "読書体験とi18n", subtitle: "垂直カテゴリ。", paragraphs: ["/noticias、JSON-LD。", "next-intl。"] },
    { number: "04", title: "バックエンド", subtitle: "RSS。", paragraphs: ["Supabase、cron。", "AI fail-open。"], table: [{ component: "Web", description: "Vercel" }, { component: "DB", description: "Supabase" }, { component: "Social", description: "AWS" }] },
    { number: "05", title: "ソーシャル", subtitle: "配信。", paragraphs: ["Playwright、リーチスコア。"] },
    { number: "06", title: "Chiikö視点", subtitle: "信頼。", paragraphs: ["トークンでスケール。", "ChatGPTラッパーではない。"] },
  ],
  impactQuote: "Verazは戦略的デザインとプロダクト工学がメディアで両立する好例です。",
  impactAttribution: "Chiikö · Veraz事例",
};

const KO: VerazLocaleStrings = {
  tagline: "뉴스 플랫폼 · 제품 + 디자인 + 엔지니어링 — 영향 없이 inform.",
  services: "디자인 시스템, Next.js, GSAP, R3F, RSS 수집.",
  client: "Veraz · veraz.app",
  contextTitle: "요약",
  context: [
    "Veraz는 검증 가능한 출처, 명확한 출처 표기, 원문 링크. AI는 선택.",
    "디자인 시스템, GSAP, 3D 지구본, Next.js + Supabase.",
    "ES/EN 독자, 차분한 브랜드.",
  ],
  steps: [
    { number: "01", title: "제품 원칙", subtitle: "뉴스 우선.", paragraphs: ["AI 없이 읽기/발행.", "Next.js 15."] },
    { number: "02", title: "웹 디자인", subtitle: "3D.", paragraphs: ["토큰, 다크 UI.", "R3F."], bulletLabel: "Chiikö", bulletText: "3D 차별화." },
    { number: "03", title: "읽기·i18n", subtitle: "버티컬.", paragraphs: ["/noticias.", "next-intl."] },
    { number: "04", title: "백엔드", subtitle: "RSS.", paragraphs: ["Supabase.", "AI fail-open."], table: [{ component: "Web", description: "Vercel" }, { component: "DB", description: "Supabase" }, { component: "Social", description: "AWS" }] },
    { number: "05", title: "소셜", subtitle: "배포.", paragraphs: ["Playwright."] },
    { number: "06", title: "Chiikö", subtitle: "신뢰.", paragraphs: ["토큰 시스템.", "미디어 플랫폼."] },
  ],
  impactQuote: "Veraz는 전략적 디자인과 제품 엔지니어링이 만나는 사례입니다.",
  impactAttribution: "Chiikö · Veraz",
};

const NL: VerazLocaleStrings = {
  tagline: "Nieuwsplatform · Product + design + engineering — informeren zonder beïnvloeden.",
  services: "Design system, Next.js, GSAP, R3F, RSS-ingestie.",
  client: "Veraz · veraz.app",
  contextTitle: "Samenvatting",
  context: [
    "Veraz aggregeert verifieerbare bronnen met duidelijke attributie; AI is optioneel.",
    "Design system, GSAP-landing, 3D-globe, Next.js + Supabase.",
    "ES/EN publiek; sober merk.",
  ],
  steps: [
    { number: "01", title: "Product", subtitle: "News first.", paragraphs: ["Geen verplichte AI.", "Next.js 15."] },
    { number: "02", title: "Webdesign", subtitle: "3D.", paragraphs: ["Tokens.", "R3F hero."], bulletLabel: "Chiikö", bulletText: "3D onderscheidt." },
    { number: "03", title: "Lezen", subtitle: "i18n.", paragraphs: ["/noticias.", "next-intl."] },
    { number: "04", title: "Backend", subtitle: "RSS.", paragraphs: ["Supabase."], table: [{ component: "Web", description: "Vercel" }, { component: "DB", description: "Supabase" }, { component: "Social", description: "AWS" }] },
    { number: "05", title: "Social", subtitle: "Distributie.", paragraphs: ["Playwright."] },
    { number: "06", title: "Chiikö", subtitle: "Vertrouwen.", paragraphs: ["Tokens.", "Geen AI-wrapper."] },
  ],
  impactQuote: "Veraz toont strategisch design en product engineering in een echt mediaplatform.",
  impactAttribution: "Chiikö · Veraz case",
};

const ZH: VerazLocaleStrings = {
  tagline: "新闻平台 · 产品 + 设计 + 工程 —  inform 而不影响。",
  services: "设计系统、Next.js、GSAP、R3F、RSS 采集。",
  client: "Veraz · veraz.app",
  contextTitle: "执行摘要",
  context: [
    "Veraz 聚合可验证来源，清晰署名并链接原文；AI 可选，不阻碍阅读与发布。",
    "令牌化设计系统、GSAP 落地页、3D 地球、Next.js + Supabase。",
    "面向西语/英语读者； sober 品牌与来源透明。",
  ],
  steps: [
    { number: "01", title: "产品原则", subtitle: "新闻优先。", paragraphs: ["无需 AI 即可阅读发布。", "Next.js 15 模块化。"] },
    { number: "02", title: "网页设计", subtitle: "系统与 3D。", paragraphs: ["CSS 令牌、暗色主题。", "R3F 3D。"], bulletLabel: "Chiikö", bulletText: "3D 差异化。" },
    { number: "03", title: "阅读与 i18n", subtitle: "垂直领域。", paragraphs: ["/noticias、JSON-LD。", "next-intl。"] },
    { number: "04", title: "后端", subtitle: "RSS。", paragraphs: ["Supabase、cron。", "AI fail-open。"], table: [{ component: "Web", description: "Vercel" }, { component: "DB", description: "Supabase" }, { component: "Social", description: "AWS" }] },
    { number: "05", title: "社交分发", subtitle: "运营。", paragraphs: ["Playwright、reach score。"] },
    { number: "06", title: "Chiikö 视角", subtitle: "信任。", paragraphs: ["令牌系统扩展品牌。", "媒体平台而非 ChatGPT 外壳。"] },
  ],
  impactQuote: "Veraz 展示了战略设计与产品工程如何在数字媒体中协同。",
  impactAttribution: "Chiikö · Veraz 案例",
};

export const verazDetailsFr = buildVerazDetails(FR);
export const verazDetailsDe = buildVerazDetails(DE);
export const verazDetailsPt = buildVerazDetails(PT);
export const verazDetailsIt = buildVerazDetails(IT);
export const verazDetailsJa = buildVerazDetails(JA);
export const verazDetailsKo = buildVerazDetails(KO);
export const verazDetailsNl = buildVerazDetails(NL);
export const verazDetailsZh = buildVerazDetails(ZH);
