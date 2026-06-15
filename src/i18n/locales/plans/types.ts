export interface PlanItemContent {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  priceLabel: string;
  price: string;
  priceLow: number;
  priceHigh: number;
  currency: string;
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
}

export interface PlansPageContent {
  seoTitle: string;
  seoDescription: string;
  headerTitle: string;
  headerDescription: string;
  closingStatement: string;
  schemaListName: string;
  areaServed: string;
  availableLanguage: string;
  items: [PlanItemContent, PlanItemContent, PlanItemContent];
}
