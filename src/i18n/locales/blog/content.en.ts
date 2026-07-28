import type { BlogPageContent } from "./types";

const body = (paragraphs: string[]) => paragraphs;

export const blogPageContent: BlogPageContent = {
  seoTitle: "Blog | Chiikö",
  seoDescription: "Chronicles from the studio on visits to Google and Pinterest, the Sophie Gomez project, UNAM workshops, and Compufest sponsorship.",
  title: "Blog",
  description: "Reflections on design, development, and digital strategy from the Chiikö studio.",
  readMore: "Read article",
  readTimeLabel: "min read",
  backToBlog: "← Back to blog",
  posts: [
    {
      slug: "veraz-news-platform-case",
      title: "Inform without influencing: Veraz and product craftsmanship",
      excerpt: "How we designed and built Veraz — a news platform with a tokenized design system, 3D globe, and bilingual reading where AI never blocks the story.",
      category: "Projects",
      body: body([
        "An honest media product does not need AI hype: it needs clear sources, readable type, and architecture that puts reading first.",
        "Veraz (veraz.app) was born with a simple motto: inform without influencing. From Chiikö in Mexico City we shaped design and engineering for a platform that aggregates verifiable RSS, shows headlines and excerpts with attribution, and links to the original outlet — without republishing full articles. AI is optional and fail-open.",
        "Visually we built a tokenized design system (dark theme, custom typography), a GSAP marketing landing, and an interactive React Three Fiber globe. The reading product at /noticias organizes verticals, trust banners for prestigious sources, and article detail with SEO and JSON-LD.",
        "Behind it: a modular Next.js 15 + Supabase monolith with multi-source RSS ingestion, Vercel cron, and social operations on AWS — strategic web design meeting a live media product from CDMX.",
        "Explore the full case study at /proyectos/veraz and the live platform at veraz.app.",
      ]),
    },
    {
      slug: "google-ecosystem-visit",
      title: "Inspiration in the ecosystem: A visit to Google",
      excerpt: "Interaction design grows by understanding the global technology ecosystem.",
      category: "Inspiration",
      body: body([
        "Interaction design does not emerge in isolation behind a screen; it matures by reading the broader technology ecosystem.",
        "This month we visited Google's offices in Mexico City to study how their teams think about scale, user journeys, and the continuity between physical spaces and digital products.",
        "For a boutique studio like Chiikö, this kind of observation is not about copying formulas but about extracting practical lessons on consistency, accessibility, and performance.",
        "We returned to the studio with fresh criteria and renewed focus for every product decision we are shaping.",
      ]),
    },
    {
      slug: "pinterest-visual-culture-visit",
      title: "Curation and visual culture: A visit to Pinterest",
      excerpt: "Design with intention starts with training the eye and understanding creative audiences.",
      category: "Visual culture",
      body: body([
        "Designing with intention requires constant visual training and a clear reading of how creative communities behave.",
        "As part of our innovation route in Mexico City, we visited Pinterest, a platform where inspiration and visual curation define everyday digital practice.",
        "The visit helped us analyze how visual trends become intuitive interface decisions, and how aesthetic direction can stay contemporary without losing clarity.",
        "Back at Chiikö, we are applying these insights to craft stronger visual narratives for upcoming deliverables.",
      ]),
    },
    {
      slug: "sophie-gomez-digital-identity",
      title: "Craft for the stage: New digital identity for Sophie Gomez",
      excerpt: "Translating an artistic career into digital form demands sensitivity and rigorous structure.",
      category: "Projects",
      body: body([
        "Turning an artistic trajectory into a digital experience requires careful listening, typographic order, and narrative precision.",
        "We are excited to officially begin our collaboration with actress Sophie Gomez on her new official site and portfolio at sophiegomez.me.",
        "Our challenge is to design a minimalist environment inspired by Swiss design principles, where visual noise fades and her work in film and theater takes center stage.",
        "We are currently defining architecture and concept, and we will soon publish the complete case study of this project.",
      ]),
    },
    {
      slug: "unam-democratic-design-workshop",
      title: "Visual foundations: Democratic design workshop at the Faculty of Sciences",
      excerpt: "Good design depends on structural clarity, not on complex tools.",
      category: "Community",
      body: body([
        "Good design is not determined by sophisticated software but by the clarity of the structure behind every message.",
        "This month we returned to the UNAM Faculty of Sciences to lead a practical workshop on composition and communication.",
        "Instead of centering the session on software functions, we focused on universal principles: typographic hierarchy, intentional white space, contrast, and balance.",
        "Seeing students apply these rules to scientific projects confirms our conviction that design is a democratic tool for organizing ideas and making knowledge accessible.",
      ]),
    },
    {
      slug: "anti-marketing-unam",
      title: "Anti-Marketing: Relevance over noise at UNAM",
      excerpt: "In saturated digital environments, authenticity and intention create durable advantage.",
      category: "Strategy",
      body: body([
        "When digital channels are filled with generic content, authentic positioning becomes more valuable than volume.",
        "At the UNAM Faculty of Sciences we delivered a second lecture centered on contemporary brand strategy under one premise: Anti-Marketing.",
        "We questioned vanity metrics, algorithmic saturation, and aggressive sales scripts, then shared how creators can build authority through genuine value and clear niche focus.",
        "These conversations with scientific audiences keep our ideas grounded and reaffirm that relevance consistently outperforms noise.",
      ]),
    },
    {
      slug: "compufest-2026-sponsors",
      title: "Supporting local talent: Official sponsors of Compufest 2026",
      excerpt: "The growth of independent technology culture is built through collective support.",
      category: "Community",
      body: body([
        "Independent technology ecosystems do not grow by chance; they grow when communities invest in shared spaces.",
        "At Chiikö we joined Compufest 2026 as official sponsors to support an event that gathers developers, designers, and technology enthusiasts across the country.",
        "For us, this is more than logo visibility: it is a commitment to builder culture, open exchange, and thoughtful software practice.",
        "We left the festival energized by new conversations and collaborations, ready to keep pushing the craft of web design and development.",
      ]),
    }
  ],
};
