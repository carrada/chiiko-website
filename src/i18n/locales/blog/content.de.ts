import type { BlogPageContent } from "./types";

const body = (paragraphs: string[]) => paragraphs;

export const blogPageContent: BlogPageContent = {
  seoTitle: "Blog | Chiikö",
  seoDescription: "Chronik aus dem Studio über Besuche bei Google und Pinterest, das Projekt mit Sophie Gomez, Workshops an der UNAM und das Sponsoring von Compufest.",
  title: "Blog",
  description: "Gedanken aus dem Studio Chiikö zu Gestaltung, Entwicklung und digitaler Strategie.",
  readMore: "Artikel lesen",
  readTimeLabel: "Min. Lesezeit",
  backToBlog: "← Zurück zum Blog",
  posts: [
    {
      slug: "google-ecosystem-visit",
      title: "Inspiration im Ökosystem: Ein Besuch bei Google",
      excerpt: "Interaktionsgestaltung wächst durch das Verständnis des globalen Technologieökosystems.",
      category: "Inspiration",
      body: body([
        "Interaktionsgestaltung entsteht nicht abgeschottet hinter einem Bildschirm, sondern durch den Blick auf das gesamte Technologieökosystem.",
        "In diesem Monat besuchten wir die Büros von Google in Mexiko-Stadt, um ihre Arbeitsweise bei Skalierung, Nutzungsabläufen und dem Übergang zwischen physischen und digitalen Berührungspunkten zu beobachten.",
        "Für ein Boutique-Studio wie Chiikö geht es dabei nicht um das Kopieren von Rezepten, sondern um übertragbare Erkenntnisse zu Konsistenz, Zugänglichkeit und Leistungsfähigkeit.",
        "Wir kehren mit geschärften Maßstäben und neuer Konzentration auf jede Produktentscheidung ins Studio zurück.",
      ]),
    },
    {
      slug: "pinterest-visual-culture-visit",
      title: "Kuratie­rung und visuelle Kultur: Ein Besuch bei Pinterest",
      excerpt: "Gestaltung mit Absicht verlangt ein trainiertes Auge und Verständnis für kreative Zielgruppen.",
      category: "Visuelle Kultur",
      body: body([
        "Absichtsvolle Gestaltung braucht ständiges visuelles Training und ein genaues Verständnis kreativer Gemeinschaften.",
        "Auf unserer Route durch Innovationsorte in Mexiko-Stadt besuchten wir Pinterest, eine zentrale Plattform für Inspiration und visuelle Kuratierung.",
        "Der Austausch zeigte uns, wie visuelle Trends in klare, intuitive Oberflächen übersetzt werden können, ohne kulturelle Relevanz zu verlieren.",
        "Zurück bei Chiikö nutzen wir diese Perspektiven, um die visuelle Erzählung kommender Auslieferungen zu verfeinern.",
      ]),
    },
    {
      slug: "sophie-gomez-digital-identity",
      title: "Digitale Identität für die Bühne: Neues Projekt mit Sophie Gomez",
      excerpt: "Eine künstlerische Laufbahn digital zu übersetzen erfordert Feingefühl und klare Struktur.",
      category: "Projekte",
      body: body([
        "Eine künstlerische Laufbahn in eine digitale Erfahrung zu übertragen verlangt Aufmerksamkeit, typografische Ordnung und erzählerische Präzision.",
        "Wir freuen uns, die Zusammenarbeit mit der Schauspielerin Sophie Gomez für ihre neue offizielle Seite und ihr Portfolio auf sophiegomez.me bekanntzugeben.",
        "Unsere Aufgabe ist ein minimalistisches Umfeld nach Prinzipien der Schweizer Gestaltung, in dem visuelles Rauschen verschwindet und ihre Arbeit auf Bühne und Kamera im Mittelpunkt steht.",
        "Derzeit arbeiten wir an Architektur und Konzept und teilen in Kürze die vollständige Fallstudie.",
      ]),
    },
    {
      slug: "unam-democratic-design-workshop",
      title: "Visuelle Grundlagen: Workshop für demokratische Gestaltung an der Fakultät für Naturwissenschaften",
      excerpt: "Gute Gestaltung hängt von struktureller Klarheit ab, nicht von komplizierten Werkzeugen.",
      category: "Gemeinschaft",
      body: body([
        "Die Qualität von Gestaltung hängt nicht von komplexer Software ab, sondern von der Klarheit der zugrunde liegenden Struktur.",
        "In diesem Monat kehrten wir an die Fakultät für Naturwissenschaften der UNAM zurück, um einen praktischen Workshop zu Komposition und Kommunikation zu leiten.",
        "Statt einzelne Funktionen von Programmen wie Canva in den Mittelpunkt zu stellen, arbeiteten wir mit universellen Prinzipien wie Typohierarchie, bewusstem Weißraum, Kontrast und Gleichgewicht.",
        "Dass Studierende diese Regeln auf wissenschaftliche Projekte anwenden, bestätigt unsere Überzeugung: Gestaltung ist ein demokratisches Werkzeug zur Ordnung von Ideen.",
      ]),
    },
    {
      slug: "anti-marketing-unam",
      title: "Anti-Marketing: Relevanz statt Lärm an der UNAM",
      excerpt: "In gesättigten digitalen Räumen schaffen Authentizität und Absicht den dauerhaften Vorsprung.",
      category: "Strategie",
      body: body([
        "Wenn digitale Kanäle mit austauschbaren Inhalten überfüllt sind, ist glaubwürdige Positionierung wertvoller als reine Menge.",
        "An der Fakultät für Naturwissenschaften der UNAM hielten wir einen zweiten Vortrag zur zeitgenössischen Markenstrategie unter einer klaren Leitidee: Anti-Marketing.",
        "Wir hinterfragten Eitelkeitskennzahlen, algorithmische Überflutung und aggressive Verkaufsmuster und zeigten Wege zu organischer Autorität durch echten Mehrwert.",
        "Der Dialog mit wissenschaftlich geprägten Zielgruppen hält unsere Arbeit bodenständig und bestätigt: Relevanz gewinnt langfristig gegen Lärm.",
      ]),
    },
    {
      slug: "compufest-2026-sponsors",
      title: "Lokales Talent stärken: Offizielle Sponsoren von Compufest 2026",
      excerpt: "Unabhängige Technikkultur wächst durch gemeinschaftliche Unterstützung.",
      category: "Gemeinschaft",
      body: body([
        "Unabhängige Technologieökosysteme wachsen nicht zufällig, sondern durch konsequente Unterstützung gemeinsamer Räume.",
        "Bei Chiikö beteiligten wir uns als offizielle Sponsoren an Compufest 2026, einem Treffen von Entwicklerinnen, Entwicklern, Gestalterinnen und Gestaltern aus dem ganzen Land.",
        "Für uns bedeutet das mehr als Markenpräsenz: Es ist ein Bekenntnis zur Kultur des Bauens, zum offenen Austausch und zu durchdachter Softwareentwicklung.",
        "Wir verlassen das Festival mit neuer Energie, starken Kontakten und frischem Antrieb für unsere nächsten digitalen Vorhaben.",
      ]),
    }
  ],
};
