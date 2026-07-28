import type { ProjectDetailContent } from "@/data/projectDetails";

export const verazDetailsEs = {
  tagline:
    "Plataforma de noticias · Producto + diseño + ingeniería — informar sin influenciar.",
  services:
    "Design system, dirección de producto, frontend (Next.js), motion (GSAP), 3D (React Three Fiber), arquitectura e ingesta.",
  client: "Veraz · veraz.app",
  contextTitle: "Resumen ejecutivo",
  contextParagraphs: [
    "Veraz es una plataforma de noticias cuyo lema operativo es «informar sin influenciar»: agrega fuentes verificables, muestra titulares y extractos con atribución clara y enlaza al medio original sin republicar el artículo completo. La inteligencia artificial es opcional y nunca bloquea la publicación ni la lectura.",
    "Desde Chiikö, el proyecto combina un design system tokenizado (tema oscuro, tipografía propia), una landing con motion GSAP y un globo 3D interactivo (React Three Fiber), un producto de lectura bilingüe (es/en) con feed por verticales y banner de confianza en fuentes «prestigiosas», y un backend modular (Next.js + Supabase) con ingesta RSS multi-fuente y distribución social automatizada. Veraz opera en producción en Vercel (web + cron de ingesta) y en AWS EC2 (publicación social con Playwright, fuera del hot path de la web).",
    "Qué hace: curación y presentación desde RSS y catálogo de medios; detalle con SEO, JSON-LD y referencias a la fuente. Qué no hace: no inventa hechos, no depende de IA para existir, no sustituye al medio original. Audiencia: lectores en español (prioridad LATAM) e inglés; verticales economía, tecnología, deportes, sociedad. Marca: tono sobrio, alta legibilidad, confianza por transparencia de fuente.",
  ],
  steps: [
    {
      number: "01",
      title: "Producto y principios",
      subtitle: "Noticias primero, trazabilidad y neutralidad operativa.",
      paragraphs: [
        "Núcleo = noticias: publicar y leer no requieren IA. Trazabilidad: todo enriquecimiento futuro debe citar fuentes reales. Neutralidad operativa: la plataforma informa; no empuja un relato editorial propio. Lectura primero: sin llamadas síncronas a modelos en el camino crítico del usuario.",
        "Arquitectura: monolito modular sobre Next.js 15 (App Router). Reglas de dependencia conscientes: app/ solo compone; features no se importan entre sí por internals; dominio puro sin React ni Supabase; IA y RSS solo por @/lib/ai-engine y @/lib/news-ingestion.",
      ],
    },
    {
      number: "02",
      title: "Diseño web: sistema, landing y 3D",
      subtitle: "Identidad editorial que escala sin pantallas one-off.",
      paragraphs: [
        "Design system tokenizado en tokens CSS (color, espacio, radio, motion, z-index). Tipografía semántica (.text-display, .text-h1…) con Helvetica Now Display y Veraz Sans. Tema oscuro por defecto, accesibilidad AA, primitivos reutilizables (Button, Card, Text, Container).",
        "Landing / en secciones modulares: hero full-bleed, qué es Veraz, cómo funciona, características, categorías, beneficios y CTA. Motion con revelados CSS y prefers-reduced-motion; PillNav con GSAP; locale switcher con transición circular. Hero 3D: globo con texturas, atmósfera shader, marcadores HTML sobre la esfera y controles orbitales (@react-three/fiber + drei), integrado client-side sin sacrificar SSR en el resto.",
      ],
      bullets: [
        {
          label: "Aprendizaje Chiikö",
          text: "Un producto editorial puede mantener identidad fuerte con tokens; un focal point 3D evita el “sitio de noticias genérico” y refuerza alcance global y rigor multi-fuente.",
        },
      ],
    },
    {
      number: "03",
      title: "Producto de lectura e i18n",
      subtitle: "Feed por verticales, confianza en fuentes y bilingüismo real.",
      paragraphs: [
        "Ruta /noticias: tabs por vertical (economía, tecnología, política, deportes…), filtros por tags (Messi, Trump, OpenAI, cripto…), banner de confianza en verticales «prestigiosas» (CNBC, Expansión, TechCrunch, Infobae según locale). Tarjetas con imagen segura, categoría, fuente y excerpt; detalle con hero, metadatos, cuerpo, referencias y JSON-LD; paginación load more; shell de producto distinto del marketing.",
        "Rutas /es/... y /en/... con next-intl. Catálogo RSS distinto por idioma; en /es finanzas/tecnología pueden mezclar fuentes EN de referencia con disclosure. PostHog opcional con pageviews en App Router y eventos puntuales (cambio de idioma) sin bloquear UX.",
      ],
    },
    {
      number: "04",
      title: "Backend, ingesta e IA opcional",
      subtitle: "Pipeline por etapas, dominio claro y fail-open.",
      paragraphs: [
        "News Ingestion Engine: discover → fetch → normalize → validate → dedupe → story → persist → publish. Hoy operativo: proveedor RSS, persistencia idempotente en Supabase, scheduler vía cron API (CRON_SECRET), catálogo amplio (Infobae, La Nación, El País, BBC Mundo, TechCrunch, CNBC…). Un proveedor caído no tumba el resto; la lectura pública no espera a la ingesta.",
        "Entidades: Source, Article, Media, Reference, Story, AIAnalysis (opcional). Invariante: un artículo es válido sin IA. AI Engine desacoplado, modo default disabled, provider pattern (OpenAI, Gemini, Anthropic, Ollama…) con failOpen. Config Engine centraliza env y feature flags (IA, premium, timeline, búsqueda avanzada, mantenimiento).",
      ],
      table: [
        {
          component: "Web + ISR + cron ingesta",
          description: "Vercel",
        },
        {
          component: "PostgreSQL + auth",
          description: "Supabase",
        },
        {
          component: "Publicación X / IG / video Telegram",
          description: "AWS EC2 + cron + Playwright",
        },
      ],
    },
    {
      number: "05",
      title: "Distribución social y operación 24/7",
      subtitle: "Tarjetas editoriales, reach score y entrega multicanal.",
      paragraphs: [
        "X e Instagram: Playwright + perfil Chrome persistente; tarjeta PNG 1080×1080 (variantes editorial, light-frame, hero-gradient). TikTok/Reels: MP4 9:16 (Pexels + overlay Veraz + ffmpeg); entrega por Telegram al operador; publicación manual en app. Selección con reach score unificado (categoría, hero, gancho de titular, fuente tier‑1, penalización geo-local).",
        "Stack de referencia: Next.js 15, React 19, TypeScript strict, Tailwind, Three.js/R3F, GSAP, next-intl, Supabase, Vitest, PostHog opcional.",
      ],
    },
    {
      number: "06",
      title: "Ángulos narrativos Chiikö",
      subtitle: "Marca = confianza, sistema = escala, producto honesto.",
      paragraphs: [
        "Marca = confianza, no ruido: UI oscura, tipografía grande, poca decoración superflua; el contenido manda. Un hero memorable: el globo 3D comunica alcance global sin stock photo de periódico. Sistema, no pantallas sueltas: tokens + variantes de social card demuestran identidad en web y redes.",
        "Producto honesto: arquitectura que no vende humo de IA—opcional, trazable, fail-open. Veraz es plataforma de medios, no un wrapper de ChatGPT. Operación 24/7: ingesta + cron + score de alcance = producto de medios moderno, no solo sitio brochure.",
      ],
    },
  ],
  impactQuote:
    "Veraz nos permitió demostrar que diseño estratégico y ingeniería de producto pueden ir de la mano en un medio digital: identidad tokenizada, un hero 3D memorable y una arquitectura que prioriza la lectura y la fuente por encima del hype de IA. Es el tipo de caso donde la marca se siente en cada token y la operación real respalda la promesa de «informar sin influenciar».",
  impactAttribution: "Chiikö · Caso Veraz",
} satisfies ProjectDetailContent;
