import type { PlansPageContent } from "./types";

export const plansPageContent: PlansPageContent = {
  seoTitle: "Plans | Pricing and Services",
  seoDescription:
    "Explore our design and development plans. From websites to complete branding. Pricing in USD.",
  headerTitle: "Choose how you want to grow",
  headerDescription:
    "Websites designed to communicate better, convert, and scale. Each plan is built for a different goal.",
  closingStatement:
    "We work with limited slots to guarantee quality in every project. We carefully select who we collaborate with because we believe in building lasting relationships, not just delivering websites.",
  schemaListName: "Chiiko Plans",
  areaServed: "Worldwide",
  availableLanguage: "English",
  items: [
    {
      title: "Essential Site",
      subtitle: "Solid presence. No noise.",
      description:
        "A well-designed website for brands that understand less is more and need to look professional from day one.",
      features: [
        "Informational website (3–5 sections)",
        "Clean, custom UI design",
        "Fast, optimized development",
        "Responsive design + basic accessibility",
        "Technical SEO foundation",
      ],
      priceLabel: "Starting at",
      price: "$1,400 – $1,950 USD",
      priceLow: 1400,
      priceHigh: 1950,
      currency: "USD",
      ctaText: "See if it's right for me",
      ctaHref: "https://cal.com/chiiko.design/essential-website-alignment-call",
    },
    {
      title: "Strategic Site",
      subtitle: "The heart of chiikö. Where design starts to sell.",
      description:
        "Not just a website. It's a tool designed to communicate better, convert, and grow.",
      features: [
        "Strategic phase (brand, goals, and user)",
        "Complete, 100% custom UX/UI design",
        "Custom development (no themes)",
        "Intentional subtle animations",
        "Technical SEO + performance",
        "Post-launch support",
      ],
      priceLabel: "Starting at",
      price: "$2,200 – $3,350 USD",
      priceLow: 2200,
      priceHigh: 3350,
      currency: "USD",
      ctaText: "Schedule strategic call",
      ctaHref: "https://cal.com/chiiko.design/digital-craft-exploration-call",
      featured: true,
      badge: "Recommended",
    },
    {
      title: "Digital Craftsmanship",
      subtitle: "Design made with intention. Built to last.",
      description:
        "For brands that don't want to look like anyone else and understand the value of a well-crafted digital experience.",
      features: [
        "Everything from Strategic Site",
        "Complete creative direction",
        "Custom-designed visual experience",
        "Artisanal details: micro-interactions",
        "Documented case studies",
        "Architecture built to scale",
      ],
      priceLabel: "Starting at",
      price: "$3,900 – $6,700+ USD",
      priceLow: 3900,
      priceHigh: 6700,
      currency: "USD",
      ctaText: "Let's talk about your project",
      ctaHref: "https://cal.com/chiiko.design/digital-craft-exploration-call",
    },
  ],
};
