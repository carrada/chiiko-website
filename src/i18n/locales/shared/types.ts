export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqPageContent {
  title: string;
  subtitle: string;
  intro: string;
  introEmailLabel: string;
  items: FaqItem[];
}

export interface HelpChannel {
  title: string;
  description: string;
  emailLabel: string;
  email: string;
}

export interface HelpPageContent {
  title: string;
  subtitle: string;
  intro: string[];
  sectionTitle: string;
  sectionIntro: string;
  channels: HelpChannel[];
  responseTitle: string;
  responseText: string;
  closing: string;
}

export interface HowWeWorkStep {
  number: string;
  title: string;
  description: string;
  detail: string;
  conclusion: string;
}

export interface HowWeWorkContent {
  seoTitle: string;
  seoDescription: string;
  title: string;
  intro: string[];
  steps: HowWeWorkStep[];
  workingStyleTitle: string;
  workingStyleItems: string[];
}

export interface ContactPageContent {
  title: string;
  subtitle: string;
  intro: string;
  formTitle: string;
  fullName: string;
  email: string;
  projectType: string;
  projectTypePlaceholder: string;
  website: string;
  branding: string;
  ecommerce: string;
  other: string;
  budget: string;
  budgetPlaceholder: string;
  budget1: string;
  budget2: string;
  budget3: string;
  description: string;
  descriptionPlaceholder: string;
  submit: string;
  submitting: string;
  successMessage: string;
  contactEmailLabel: string;
  footerText: string;
  errorMessage: string;
  contactEmail: string;
}

export interface LegalBlock {
  type: "p" | "ul" | "h3";
  text?: string;
  items?: string[];
}

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}

export interface LegalPageContent {
  seoTitle: string;
  seoDescription: string;
  title: string;
  lastUpdated: string;
  intro: LegalBlock[];
  sections: LegalSection[];
  footer?: LegalBlock[];
  closing?: LegalBlock[];
}
