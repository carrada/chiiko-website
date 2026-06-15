import type { HelpPageContent } from "../shared/types";

const englishChannels = [
  {
    title: "General inquiries",
    description:
      "If you have questions about our services, process, timelines, availability, or you're exploring whether Chiikö is the right fit for your project, this is the best place to start.",
    emailLabel: "Contact email:",
    email: "hello@chiiko.design",
  },
  {
    title: "Payments and billing",
    description:
      "For anything related to payments, invoices, billing questions, or other administrative and financial matters, please contact us through this channel.",
    emailLabel: "Contact email:",
    email: "finance@chiiko.design",
  },
  {
    title: "Contracts and legal matters",
    description:
      "If your inquiry involves contracts, agreements, terms and conditions, or any legal-related topic, this channel allows us to assist you more accurately.",
    emailLabel: "Contact email:",
    email: "councel@chiiko.design",
  },
  {
    title: "Technical support and website issues",
    description:
      "If you experience technical issues, website errors, performance problems, or need support after your project has launched, this is the appropriate channel.",
    emailLabel: "Contact email:",
    email: "support@chiiko.design",
  },
];

export const helpPageContent: HelpPageContent = {
  title: "Help Center",
  subtitle: "Find the most appropriate contact channel for your inquiry",
  intro: [
    "At Chiikö, we want your experience to be clear, simple, and frictionless. For that reason, we organize our contact channels based on the type of request, so your message reaches the right team from the start.",
    "If you're not sure which email to use, that's completely fine — we'll review your message and route it internally.",
  ],
  sectionTitle: "How can we help you?",
  sectionIntro:
    "Below you'll find the most appropriate contact option depending on your needs:",
  channels: englishChannels,
  responseTitle: "Response times",
  responseText:
    "Our team reviews messages Monday through Friday during business hours. We do our best to respond as quickly as possible and provide clear, helpful solutions.",
  closing:
    "Thank you for trusting Chiikö. We're here to support you at every stage of your project.",
};
