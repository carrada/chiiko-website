import type { ProjectDetailContent } from "@/data/projectDetails";

export const verazDetailsEn = {
  tagline:
    "News platform · Product + design + engineering — inform without influencing.",
  services:
    "Design system, product direction, frontend (Next.js), motion (GSAP), 3D (React Three Fiber), architecture and ingestion.",
  client: "Veraz · veraz.app",
  contextTitle: "Executive summary",
  contextParagraphs: [
    "Veraz is a news platform whose operating motto is “inform without influencing”: it aggregates verifiable sources, shows headlines and excerpts with clear attribution, and links to the original outlet without republishing full articles. Artificial intelligence is optional and never blocks publishing or reading.",
    "From Chiikö’s perspective, the project combines a tokenized design system (dark theme, custom typography), a GSAP motion landing with an interactive 3D globe (React Three Fiber), a bilingual reading product (es/en) with vertical feeds and a trust banner for “prestigious” sources, and a modular backend (Next.js + Supabase) with multi-source RSS ingestion and automated social distribution. Veraz runs in production on Vercel (web + ingestion cron) and AWS EC2 (social publishing with Playwright, off the web hot path).",
    "What it does: curates and presents news from RSS and a media catalog; article detail with SEO, JSON-LD, and source references. What it does not do: invent facts, depend on AI to exist, or replace the original outlet. Audience: Spanish (LATAM-first) and English readers across economy, tech, sports, society. Brand: sober tone, high legibility, trust through source transparency.",
  ],
  steps: [
    {
      number: "01",
      title: "Product and principles",
      subtitle: "News first, traceability, and operational neutrality.",
      paragraphs: [
        "Core = news: publishing and reading do not require AI. Traceability: any future enrichment must cite real sources. Operational neutrality: the platform informs; it does not push its own editorial narrative. Reading first: no synchronous model calls on the critical user path.",
        "Architecture: modular monolith on Next.js 15 (App Router). Conscious dependency rules: app/ composes only; features do not import each other’s internals; pure domain without React or Supabase; AI and RSS enter only through @/lib/ai-engine and @/lib/news-ingestion.",
      ],
    },
    {
      number: "02",
      title: "Web design: system, landing, and 3D",
      subtitle: "Editorial identity that scales beyond one-off screens.",
      paragraphs: [
        "Tokenized design system in CSS tokens (color, space, radius, motion, z-index). Semantic typography (.text-display, .text-h1…) with Helvetica Now Display and Veraz Sans. Dark theme by default, AA accessibility, reusable primitives (Button, Card, Text, Container).",
        "Marketing landing / in modular sections: full-bleed hero, what Veraz is, how it works, features, categories, benefits, and CTA. Motion with CSS reveals and prefers-reduced-motion; GSAP PillNav; circular GSAP locale switcher. 3D hero: globe with textures, shader atmosphere, HTML markers on the sphere, and orbit controls (@react-three/fiber + drei), client-side without sacrificing SSR elsewhere.",
      ],
      bullets: [
        {
          label: "Chiikö takeaway",
          text: "An editorial product can keep a strong identity with tokens; a single 3D focal point avoids a generic news site and reinforces global reach and multi-source rigor.",
        },
      ],
    },
    {
      number: "03",
      title: "Reading product and i18n",
      subtitle: "Vertical feeds, source trust, and real bilingualism.",
      paragraphs: [
        "/noticias route: tabs by vertical (economy, tech, politics, sports…), tag filters (Messi, Trump, OpenAI, crypto…), trust banner on “prestigious” verticals (CNBC, Expansión, TechCrunch, Infobae by locale). Cards with safe images, category, source, and excerpt; detail with hero, metadata, body, references, and JSON-LD; load-more pagination; product shell distinct from marketing.",
        "Localized /es/... and /en/... routes with next-intl. RSS catalog differs by language; on /es, finance/tech may mix reference EN sources with user disclosure. Optional PostHog with App Router pageviews and focused events (locale change) without blocking UX.",
      ],
    },
    {
      number: "04",
      title: "Backend, ingestion, and optional AI",
      subtitle: "Staged pipeline, clear domain, fail-open.",
      paragraphs: [
        "News Ingestion Engine: discover → fetch → normalize → validate → dedupe → story → persist → publish. Operational today: RSS provider, idempotent Supabase persistence, scheduler via cron API (CRON_SECRET), broad catalog (Infobae, La Nación, El País, BBC Mundo, TechCrunch, CNBC…). One failed provider does not take down the rest; public reading does not wait on ingestion.",
        "Entities: Source, Article, Media, Reference, Story, optional AIAnalysis. Invariant: an article is valid without AI. Decoupled AI Engine, default disabled, provider pattern (OpenAI, Gemini, Anthropic, Ollama…) with failOpen. Config Engine centralizes env and feature flags (AI, premium, timeline, advanced search, maintenance).",
      ],
      table: [
        {
          component: "Web + ISR + ingestion cron",
          description: "Vercel",
        },
        {
          component: "PostgreSQL + auth",
          description: "Supabase",
        },
        {
          component: "X / IG / Telegram video delivery",
          description: "AWS EC2 + cron + Playwright",
        },
      ],
    },
    {
      number: "05",
      title: "Social distribution and 24/7 operations",
      subtitle: "Editorial cards, reach score, multichannel delivery.",
      paragraphs: [
        "X and Instagram: Playwright + persistent Chrome profile; 1080×1080 PNG cards (editorial, light-frame, hero-gradient variants). TikTok/Reels: 9:16 MP4 (Pexels + Veraz overlay + ffmpeg); Telegram delivery to operator; manual in-app publish. Selection via unified reach score (category, hero, headline hook, tier‑1 source, geo-local penalty).",
        "Reference stack: Next.js 15, React 19, strict TypeScript, Tailwind, Three.js/R3F, GSAP, next-intl, Supabase, Vitest, optional PostHog.",
      ],
    },
    {
      number: "06",
      title: "Chiikö narrative angles",
      subtitle: "Brand = trust, system = scale, honest product.",
      paragraphs: [
        "Brand = trust, not noise: dark UI, large type, minimal decoration; content leads. A memorable hero: the 3D globe signals global scope without stock newspaper photography. System, not isolated screens: tokens + social card variants scale identity across web and social.",
        "Honest product: architecture that does not sell AI hype—optional, traceable, fail-open. Veraz is a media platform, not a ChatGPT wrapper. 24/7 operations: ingestion + cron + reach score = modern media product, not a brochure site.",
      ],
    },
  ],
  impactQuote:
    "Veraz let us show that strategic design and product engineering can align in a digital media product: tokenized identity, a memorable 3D hero, and architecture that prioritizes reading and sources over AI hype. It is the kind of case where brand lives in every token and real operations back the promise to inform without influencing.",
  impactAttribution: "Chiikö · Veraz case study",
} satisfies ProjectDetailContent;
