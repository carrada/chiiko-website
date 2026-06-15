import type { HelpPageContent } from "../shared/types";

export const helpPageContent: HelpPageContent = {
  title: "Centre d'aide",
  subtitle: "Trouvez le canal de contact le plus approprié pour votre demande",
  intro: [
    "Chez Chiikö, nous voulons que votre expérience soit claire, simple et sans friction. Pour cela, nous organisons nos canaux de contact selon le type de demande, afin que votre message atteigne dès le départ l'équipe appropriée.",
    "Si vous n'êtes pas sûr de l'adresse à utiliser, pas de souci — nous examinerons votre message et le orienterons en interne.",
  ],
  sectionTitle: "Comment pouvons-nous vous aider ?",
  sectionIntro:
    "Vous trouverez ci-dessous le canal le plus approprié selon votre besoin :",
  channels: [
    {
      title: "Questions générales",
      description:
        "Si vous avez des questions sur nos services, notre processus, les délais, la disponibilité, ou si vous explorez si Chiikö est le bon choix pour votre projet, c'est le meilleur point de départ.",
      emailLabel: "Email de contact :",
      email: "hello@chiiko.design",
    },
    {
      title: "Paiements et facturation",
      description:
        "Pour tout sujet lié aux paiements, factures, questions de facturation ou autres questions administratives et financières, contactez-nous via ce canal.",
      emailLabel: "Email de contact :",
      email: "finance@chiiko.design",
    },
    {
      title: "Contrats et questions juridiques",
      description:
        "Si votre demande concerne des contrats, accords, conditions générales ou tout sujet juridique, ce canal nous permet de vous assister plus précisément.",
      emailLabel: "Email de contact :",
      email: "councel@chiiko.design",
    },
    {
      title: "Support technique et problèmes de site web",
      description:
        "Si vous rencontrez des problèmes techniques, des erreurs sur le site, des dysfonctionnements ou avez besoin de support après le lancement de votre projet, c'est le canal approprié.",
      emailLabel: "Email de contact :",
      email: "support@chiiko.design",
    },
  ],
  responseTitle: "Délais de réponse",
  responseText:
    "Notre équipe examine les messages du lundi au vendredi pendant les heures de bureau. Nous faisons tout notre possible pour répondre rapidement et vous fournir une solution claire et utile.",
  closing:
    "Merci de faire confiance à Chiikö. Nous sommes ici pour vous aider et vous accompagner à chaque étape de votre projet.",
};
