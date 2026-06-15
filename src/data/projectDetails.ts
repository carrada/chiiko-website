export interface ProjectStep {
  number: string;
  title: string;
  subtitle: string;
  paragraphs?: string[];
  bullets?: { label: string; text: string }[];
  table?: { component: string; description: string }[];
}

export interface ProjectDetailContent {
  tagline: string;
  services: string;
  client: string;
  contextTitle: string;
  contextParagraphs: string[];
  steps: ProjectStep[];
  impactQuote: string;
  impactAttribution: string;
}
