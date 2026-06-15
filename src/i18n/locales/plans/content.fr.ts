import type { PlansPageContent } from "./types";

export const plansPageContent: PlansPageContent = {
  seoTitle: "Formules | Tarifs et services Chiiko",
  seoDescription:
    "Découvrez nos formules de design et développement web. Tarifs en EUR pour la France et l'Union européenne.",
  headerTitle: "Choisissez comment vous voulez grandir",
  headerDescription:
    "Des sites web conçus pour mieux communiquer, convertir et évoluer. Chaque formule répond à un objectif différent.",
  closingStatement:
    "Nous travaillons avec des places limitées pour garantir la qualité de chaque projet. Nous sélectionnons avec soin nos collaborations parce que nous croyons aux relations durables, pas seulement à la livraison de sites.",
  schemaListName: "Formules Chiiko",
  areaServed: "FR",
  availableLanguage: "French",
  items: [
    {
      title: "Site Essentiel",
      subtitle: "Présence solide. Sans bruit.",
      description:
        "Un site web bien conçu pour les marques qui comprennent que moins c'est plus et qui doivent paraître professionnelles dès le premier jour.",
      features: [
        "Site informatif (3–5 sections)",
        "Design UI épuré et personnalisé",
        "Développement rapide et optimisé",
        "Design responsive + accessibilité de base",
        "SEO technique de base",
      ],
      priceLabel: "Investissement à partir de",
      price: "1 300 € – 1 800 €",
      priceLow: 1300,
      priceHigh: 1800,
      currency: "EUR",
      ctaText: "Voir si c'est pour moi",
      ctaHref: "https://cal.com/chiiko.design/essential-website-alignment-call",
    },
    {
      title: "Site Stratégique",
      subtitle: "Le cœur de chiikö. Là où le design commence à vendre.",
      description:
        "Ce n'est pas qu'un site web. C'est un outil pensé pour mieux communiquer, convertir et grandir.",
      features: [
        "Phase stratégique préalable (marque, objectifs, utilisateur)",
        "Design UX/UI complet et 100 % personnalisé",
        "Développement sur mesure (sans thèmes)",
        "Animations subtiles et intentionnelles",
        "SEO technique + performance",
        "Accompagnement post-livraison",
      ],
      priceLabel: "Investissement à partir de",
      price: "2 000 € – 3 000 €",
      priceLow: 2000,
      priceHigh: 3000,
      currency: "EUR",
      ctaText: "Planifier un appel stratégique",
      ctaHref: "https://cal.com/chiiko.design/digital-craft-exploration-call",
      featured: true,
      badge: "Recommandé",
    },
    {
      title: "Artisanat Numérique",
      subtitle: "Design fait avec intention. Conçu pour durer.",
      description:
        "Pour les marques qui ne veulent ressembler à personne et comprennent la valeur d'une expérience digitale bien construite.",
      features: [
        "Tout du Site Stratégique",
        "Direction créative complète",
        "Expérience visuelle sur mesure",
        "Détails artisanaux : micro-interactions",
        "Études de cas documentées",
        "Architecture pensée pour évoluer",
      ],
      priceLabel: "Investissement à partir de",
      price: "3 500 € – 6 000 €+",
      priceLow: 3500,
      priceHigh: 6000,
      currency: "EUR",
      ctaText: "Parlons de votre projet",
      ctaHref: "https://cal.com/chiiko.design/digital-craft-exploration-call",
    },
  ],
};
