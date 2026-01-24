// Base interface for all content strategies
export interface IContentStrategy {
  getTitle(): string;
  getSubtitle(): string;
  getIntro(): string;
  getFormTitle(): string;
  getFullName(): string;
  getEmail(): string;
  getProjectType(): string;
  getProjectTypePlaceholder(): string;
  getWebsite(): string;
  getBranding(): string;
  getEcommerce(): string;
  getOther(): string;
  getBudget(): string;
  getBudgetPlaceholder(): string;
  getBudget1(): string;
  getBudget2(): string;
  getBudget3(): string;
  getDescription(): string;
  getDescriptionPlaceholder(): string;
  getSubmit(): string;
  getSuccessMessage(): string;
  getContactEmail(): string;
  getFooterText(): string;
}

// Spanish content strategy
export class SpanishContactContent implements IContentStrategy {
  getTitle() { return "Comienza un proyecto pensado"; }
  getSubtitle() { return "Trabaja con Chiiko"; }
  getIntro() { return "Colaboramos con un número limitado de proyectos cada año. Respondemos solo si hay un fit genuino entre tu visión y la nuestra."; }
  getFormTitle() { return "Cuéntanos sobre tu proyecto"; }
  getFullName() { return "Nombre completo"; }
  getEmail() { return "Email"; }
  getProjectType() { return "Tipo de proyecto"; }
  getProjectTypePlaceholder() { return "Selecciona un tipo de proyecto"; }
  getWebsite() { return "Sitio web"; }
  getBranding() { return "Branding"; }
  getEcommerce() { return "Ecommerce"; }
  getOther() { return "Otro"; }
  getBudget() { return "Presupuesto estimado"; }
  getBudgetPlaceholder() { return "Selecciona un rango de presupuesto"; }
  getBudget1() { return "$25,000 – $35,000 MXN"; }
  getBudget2() { return "$35,000 – $60,000 MXN"; }
  getBudget3() { return "$60,000+ MXN"; }
  getDescription() { return "Descripción del proyecto"; }
  getDescriptionPlaceholder() { return "Cuéntanos sobre tu proyecto, tu visión y qué buscas lograr."; }
  getSubmit() { return "Enviar proyecto"; }
  getSuccessMessage() { return "Gracias. Hemos recibido tu propuesta de proyecto. La revisaremos y nos pondremos en contacto si hay fit."; }
  getContactEmail() { return "Para consultas inmediatas:"; }
  getFooterText() { return "Chiiko. Diseño y desarrollo estratégico."; }
}

// English content strategy
export class EnglishContactContent implements IContentStrategy {
  getTitle() { return "Start a thoughtful project"; }
  getSubtitle() { return "Work with Chiiko"; }
  getIntro() { return "We collaborate with a limited number of projects each year. We respond only if there's a genuine fit between your vision and ours."; }
  getFormTitle() { return "Tell us about your project"; }
  getFullName() { return "Full name"; }
  getEmail() { return "Email"; }
  getProjectType() { return "Project type"; }
  getProjectTypePlaceholder() { return "Select a project type"; }
  getWebsite() { return "Website"; }
  getBranding() { return "Branding"; }
  getEcommerce() { return "Ecommerce"; }
  getOther() { return "Other"; }
  getBudget() { return "Estimated budget"; }
  getBudgetPlaceholder() { return "Select a budget range"; }
  getBudget1() { return "$1,500 – $2,500 USD"; }
  getBudget2() { return "$2,500 – $4,000 USD"; }
  getBudget3() { return "$4,000+ USD"; }
  getDescription() { return "Project description"; }
  getDescriptionPlaceholder() { return "Tell us about your project, your vision, and what you're looking to achieve."; }
  getSubmit() { return "Submit project"; }
  getSuccessMessage() { return "Thank you. We've received your project submission. We'll review it and get back to you if there's a fit."; }
  getContactEmail() { return "For immediate inquiries:"; }
  getFooterText() { return "Chiiko. Strategic design and development."; }
}
