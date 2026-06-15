import type { HelpPageContent } from "../shared/types";

export const helpPageContent: HelpPageContent = {
  title: "Hilfezentrum",
  subtitle: "Finden Sie den passenden Kontaktkanal für Ihre Anfrage",
  intro: [
    "Bei Chiikö möchten wir, dass Ihre Erfahrung klar, einfach und reibungslos ist. Deshalb organisieren wir unsere Kontaktkanäle nach Art der Anfrage, damit Ihre Nachricht von Anfang an das richtige Team erreicht.",
    "Wenn Sie nicht sicher sind, an wen zu schreiben — kein Problem. Wir prüfen Ihre Nachricht und leiten sie intern weiter.",
  ],
  sectionTitle: "Wie können wir Ihnen helfen?",
  sectionIntro:
    "Unten finden Sie die passende Kontaktoption je nach Ihrem Bedarf:",
  channels: [
    {
      title: "Allgemeine Anfragen",
      description:
        "Wenn Sie Fragen zu unseren Services, Prozessen, Zeitplänen, Verfügbarkeit haben oder erkunden, ob Chiikö die richtige Wahl für Ihr Projekt ist, ist dies der beste Ausgangspunkt.",
      emailLabel: "Kontakt-E-Mail:",
      email: "hello@chiiko.design",
    },
    {
      title: "Zahlungen und Abrechnung",
      description:
        "Für alles rund um Zahlungen, Rechnungen, Abrechnungsfragen oder andere administrative und finanzielle Angelegenheiten kontaktieren Sie uns über diesen Kanal.",
      emailLabel: "Kontakt-E-Mail:",
      email: "finance@chiiko.design",
    },
    {
      title: "Verträge und rechtliche Angelegenheiten",
      description:
        "Wenn Ihre Anfrage Verträge, Vereinbarungen, Nutzungsbedingungen oder rechtliche Themen betrifft, können wir Sie über diesen Kanal genauer unterstützen.",
      emailLabel: "Kontakt-E-Mail:",
      email: "councel@chiiko.design",
    },
    {
      title: "Technischer Support und Website-Probleme",
      description:
        "Bei technischen Problemen, Website-Fehlern, Leistungsproblemen oder Support nach dem Launch Ihres Projekts ist dies der richtige Kanal.",
      emailLabel: "Kontakt-E-Mail:",
      email: "support@chiiko.design",
    },
  ],
  responseTitle: "Antwortzeiten",
  responseText:
    "Unser Team prüft Nachrichten Montag bis Freitag während der Geschäftszeiten. Wir bemühen uns, schnell zu antworten und klare, hilfreiche Lösungen zu bieten.",
  closing:
    "Vielen Dank für Ihr Vertrauen in Chiikö. Wir sind da, um Sie in jeder Phase Ihres Projekts zu unterstützen.",
};
