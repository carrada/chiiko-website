import type { ProjectDetailContent } from "@/data/projectDetails";

export const projectContent = {
  page: {
    title: "Projekte",
    description:
      "Hier können Sie unsere neuesten Projekte und Fallstudien entdecken.",
    seoDescription: "Entdecken Sie unsere Projekte und Fallstudien",
    back: "← Zurück zu den Projekten",
    visitWebsite: "Website besuchen",
  },
  labels: {
    services: "Services",
    client: "Kunde",
    context: "Der Kontext",
    impact: "Der Impact",
    uiComponent: "UI-Komponente",
    engineering: "Engineering & Experience",
  },
  items: {
    eamx: {
      title: "EAMX",
      description:
        "Architektur und strukturelle Präzision auf die digitale Ebene gebracht.",
      services:
        "Digital Strategy, Interaction Design, Advanced Frontend Development.",
      client: "EAMX Arquitectos.",
    },
    compufest: {
      title: "Compufest [1]",
      description:
        "Das größte studentische Computern- und Programmier-Event der UNAM.",
      services: "Digital Strategy, UI/UX Design, Webentwicklung.",
      client: "Compufest / UNAM Student Community.",
    },
    emicarrada: {
      title: "emicarrada.com",
      description:
        "Die Schnittstelle zwischen Software-Engineering und digitalem Handwerk.",
      services: "Art Direction, Advanced Frontend Development, WebGL 3D.",
      client: "Cristopher Carrada.",
    },
    alancrespo_ai: {
      title: "Alan Crespo",
      description:
        "Von der Akademie zur globalen Führung in Artificial Intelligence (Deep Tech).",
      services:
        "Visual Identity Design, B2B-Positionierungsstrategie, Content Engineering.",
      client: "Alan Crespo Murillo.",
    },
  },
  details: {
    eamx: {
      tagline:
        "Architektur und strukturelle Präzision auf die digitale Ebene gebracht.",
      services:
        "Digital Strategy, Interaction Design, Advanced Frontend Development.",
      client: "EAMX Arquitectos.",
      contextTitle: "Der Kontext",
      contextParagraphs: [
        "Ein zeitgenössisches Architekturstudio, das Räume mit millimetrischer Präzision gestaltet, kann kein generisches digitales Portfolio leisten. Die Herausforderung mit EAMX war, ihre Arbeitsphilosophie — gegründet auf Ästhetik, Funktionalität und Langlebigkeit — in eine Web-Erfahrung zu übersetzen.",
        "Ihre Plattform musste mehr leisten als Projekte in einem traditionellen Corporate-Grid anzuzeigen; sie musste pure, kompromisslose Innovation vermitteln. Sie wollten, dass Nutzer ab dem ersten Klick Spatialität und Design spüren.",
      ],
      steps: [
        {
          number: "01",
          title: "Strategie: Interaktion als Manifest",
          subtitle:
            "Wir analysieren Ihre Marke, Ihren Markt und das reale Ziel des Projekts, bevor wir gestalten.",
          paragraphs: [
            "Wir lehnten die Idee einer passiven Website vollständig ab. Die Strategie konzentrierte sich darauf, eine sensorische Umgebung zu schaffen, in der die Interaktion des Nutzers das Tempo der Entdeckung bestimmt.",
            "Für einen Markt, der Design über alles schätzt, entschieden wir, dass jede Section nach eigenen physikalischen Regeln funktionieren sollte. Das Ziel war eine spielerische, immersive Journey mit absoluter ästhetischer Strenge — die die technische Meisterschaft des Studios für High-Profile-Kunden validiert.",
          ],
        },
        {
          number: "02",
          title: "Design & Entwicklung: Digitales Handwerk mit angewandter Physik",
          subtitle:
            "Wir gestalten und bauen eine klare, schnelle und differenzierte Experience.",
          paragraphs: [
            "Wir trieben die Interface aufs Extrem mit monumentaler Typografie und brutalistischem Kontrast. In der Engineering-Seite bauten wir die Site mit Next.js und einem fortgeschrittenen Animation-Engine für flüssige Interaktionen, die normalerweise nur in nativen Apps zu sehen sind:",
          ],
          bullets: [
            {
              label: "Enthüllende Exploration",
              text: 'Wir implementierten ein interaktives Component auf der Homepage, bei dem Nutzer ihren Cursor als „Taschenlampe“ nutzen und via SVG-Masken die dunkle Leinwand aufreißen, um die wahre Vision des Studios zu enthüllen.',
            },
            {
              label: "Kontrolliertes Chaos (3D-Physik)",
              text: "Wir brachen das statische Grid. Die Galerie ist eine Leinwand, auf der Architekturprojekte schweben; Nutzer können Fotos greifen, ziehen und loslassen, die mit Bounce- und 3D-Tilt-Physik reagieren.",
            },
            {
              label: "Immersiver Kontext",
              text: "Wir integrierten ein dynamisches Link-System für ihre Standards (wie ISO-Zertifizierungen oder Städte). Beim Hover deployen schwebende Cards mit hochwertigen visuellen Previews, ohne den Lesefluss zu unterbrechen.",
            },
          ],
        },
        {
          number: "03",
          title: "Übergabe & Evolution: Ein High-End-Digital-Showroom",
          subtitle:
            "Wir launchen die Site und bereiten sie vor, zu wachsen, zu messen und zu skalieren.",
          paragraphs: [
            "Das Ergebnis ist weit mehr als eine Landing Page; es ist eine Demonstration technischer Fähigkeit. Wir schließen die Journey mit einer dynamisch beleuchteten Stage, die den Call-to-Action theatralisch zur Conversion einlädt.",
            "Wir lieferten eine robuste, optimierte Plattform, die komplexe Interaktionen handhabt, ohne Ladezeit-Millisekunden zu opfern. EAMX's digitales Ökosystem ist nun als Designwerk an sich positioniert, mit einer Component-Architektur, bereit zukünftige Projekte mit gleichem Spektakel zu integrieren.",
          ],
        },
      ],
      impactQuote:
        "Wir wollten, dass unsere Website dieselbe Obsession für Detail und Innovation widerspiegelt, die wir in unsere physischen Werke stecken — aber jede Agentur bot langweilige Kataloge. Das Team verstand sofort, dass wir eine Experience brauchten, kein Broschüre. Zu sehen, wie Nutzer mit unserer Galerie spielen und die Site entdecken, ist genau dasselbe Staunen, das wir erreichen, wenn jemand eines unserer Gebäude betritt. Sie brachten unsere digitale Präsentation auf das Niveau unserer Architektur.",
      impactAttribution: "Projektleitung, EAMX",
    } satisfies ProjectDetailContent,

    compufest: {
      tagline:
        "Das größte studentische Computern- und Programmier-Event der UNAM.",
      services: "Digital Strategy, UI/UX Design, Webentwicklung.",
      client: "Compufest / UNAM Student Community.",
      contextTitle: "Der Kontext",
      contextParagraphs: [
        "Ein Event dieser Größenordnung erfordert eine digitale Präsenz auf gleichem Niveau. Zunächst war die Vision für Compufest konservativ: eine einfache statische Seite, die mundpropagandistisch geteilt wird. Um jedoch einen erstklassigen Hackathon zu etablieren und Schlüsselplayer der Tech-Industrie anzuziehen, musste die Plattform weit mehr als ein digitales Broschüre sein — sie musste ein Statement sein.",
        "Hier kamen wir ins Spiel, um die Proposal zu elevieren und eine universitäre Idee in eine digitale Marke zu transformieren, die für Industriegiganten und die Developer-Community attraktiv ist.",
      ],
      steps: [
        {
          number: "01",
          title: "Strategie: Vision jenseits des Codes",
          subtitle:
            "Wir analysieren die Marke, den Markt und das reale Ziel des Projekts, bevor wir gestalten.",
          paragraphs: [
            "Die Haupt-Herausforderung war nicht nur über Termine und Zeiten zu informieren, sondern sofortige Glaubwürdigkeit aufzubauen. Wir identifizierten, dass die Zielgruppe — Engineering-Studenten, erfahrene Developer und entscheidend High-Profile-Corporate-Sponsoren — eine Experience brauchte, die ihre technische Sprache spricht.",
            "Wir änderten die ursprüngliche Strategie: Statt einer generischen Page konzipierten wir einen Digital Hub, speziell designed um die Skala des Events zu validieren, Massen-Registrierung zu erleichtern und als unfehlbares Sales-Tool für Speaker und strategische Partnerschaften zu dienen.",
          ],
        },
        {
          number: "02",
          title: "Design & Entwicklung: Hacker-Ästhetik, Premium-Engineering",
          subtitle:
            "Wir gestalten und bauen eine klare, schnelle und differenzierte Experience.",
          paragraphs: [
            'Die Art Direction griff das klassische Imaginarium der Computertechnik auf, auf High-End-Webdesign-Standards gehoben. Wir implementierten eine Dark-Mode-Interface mit Monospace-Typografie und visuellen Elementen inspiriert von ASCII-Art und Command-Terminals. Diese „raw", technische Ästhetik resonierte sofort mit der Programmierer-Community.',
            "In der Engineering-Seite fokussierte die Entwicklung auf Geschwindigkeit, architektonische Klarheit und Präzision in jeder Interaktion. Wir bauten eine Interface, die nicht nur visuell eindrucksvoll ist, sondern auch die Informationslast des Hackathons, Schedules und Speaker-Profile mit absoluter Fluidität handhabt — mit Schweizer Design-Prinzipien: maximale Lesbarkeit, intentioneller Negativraum und Eliminierung von visuellem Noise.",
          ],
        },
        {
          number: "03",
          title: "Übergabe & Evolution: Von der Universität zur Industrie",
          subtitle:
            "Wir launchen die Site und bereiten sie vor, zu wachsen, zu messen und zu skalieren.",
          paragraphs: [
            "Der Site-Launch markierte einen Wendepunkt in Compufest's Organisation. Die Web-Plattform wurde der Wachstumsmotor des Events und ermöglichte den Organisatoren, ein institutionelles, hochprofessionelles Image zu projizieren.",
            "Das Ergebnis dieser digitalen Infrastruktur war entscheidend: Das Event sicherte die Unterstützung großer internationaler Sponsoren (inkl. Google for Education), zog ganze Tech-Communities an und füllte sein Speaker-Lineup. Der gelieferte Codebase diente nicht nur Edition [1], sondern etablierte eine robuste Architektur für zukünftige Festival-Iterationen.",
          ],
        },
      ],
      impactQuote:
        "Wir hatten keine Website für unser Event. Wir würden einfach eine Page hochladen, mundpropagandistisch teilen und auf das Beste hoffen. Aber Chiiko überzeugte uns, das nicht zu tun — und es war eine der besten Entscheidungen für das Event. Ohne die Website hätten wir nie unser Speaker-Lineup gefüllt, Communities und Sponsoren angezogen oder die Basis gehabt, den Hackathon der Welt zu zeigen. Das größte studentische Computern- und Programmier-Event der UNAM wurde auch durch Chiiko möglich.",
      impactAttribution: "Organizing Team, Compufest",
    } satisfies ProjectDetailContent,

    emicarrada: {
      tagline:
        "Die Schnittstelle zwischen Software-Engineering und digitalem Handwerk.",
      services: "Art Direction, Advanced Frontend Development, WebGL 3D.",
      client: "Cristopher Carrada.",
      contextTitle: "Der Kontext",
      contextParagraphs: [
        "Das Portfolio eines Developers sollte nicht nur Skills auflisten; es muss unwiderlegbarer Proof sein. Die Herausforderung war, eine tiefe visuelle Identität — verankert in Navy-Blau und Orange-Akzenten — zu bauen, die ein technisches und wissenschaftliches Profil mit einer modernen, polierten editorialen Präsentation verbindet.",
        "Wir suchten kein statisches digitales CV, sondern ein interaktives Ökosystem, das die Präzision von High-End-Software-Engineering und die Detailverliebtheit des strukturalen Minimalismus widerspiegelt.",
      ],
      steps: [
        {
          number: "01",
          title: "Strategie: Zeigen, nicht nur erzählen",
          subtitle:
            "Wir analysieren die Marke, den Markt und das reale Ziel des Projekts, bevor wir gestalten.",
          paragraphs: [
            "Die Kernstrategie war, Interaktion als narratives Sprachmittel zu nutzen. Statt vorhersehbarer Textblöcke entschieden wir, dass jede Section des Sites Nutzer einladen sollte, mit dem Code zu interagieren.",
            'Wir definierten eine kohärente thematische Identität um die Figur des „Developer/Wissenschaftler/Creator". Die Symbole dieser Identität — 3D-Brille und Command-Terminal — wurden die primären Navigationsvehikel für Biografie, Services und Portfolio und verwandelten Besucher von passiven Lesern in aktive Nutzer.',
          ],
        },
        {
          number: "02",
          title: "Design & Entwicklung: Interaktive Architektur",
          subtitle:
            "Wir gestalten und bauen eine klare, schnelle und differenzierte Experience.",
          paragraphs: [
            "Die Site wurde unter einer strikten Performance- und Fluiditäts-Philosophie gebaut. Vom animierten SVG-Preloader, der einer kaskadierenden Element-Eingabe Platz macht, ist jede Interaktion orchestriert für ein Schicht-für-Schicht-Bau-Gefühl.",
            "Wir implementierten fortgeschrittene Interface-Components, die das traditionelle Layout herausfordern:",
          ],
          table: [
            {
              component: "Interaktives 3D Hero",
              description:
                "Ein vom Nutzer manipulierbares dreidimensionales Brillen-Modell, in WebGL gerendert mit Echtzeit-Licht- und Schatten-Physik.",
            },
            {
              component: "Funktionales Terminal (CLI)",
              description:
                "Biografie und Kontaktformular sind kein Plain Text; sie sind funktionale Command-Line-Interfaces, die auf echte Nutzer-Inputs reagieren.",
            },
            {
              component: "Editorial Gallery (Blog)",
              description:
                "Ein Navigation-Pattern inspiriert von nativem iOS-Design (Apple Cards Carousel). Cards expandieren fullscreen mit Backdrop-Blur-Effekt.",
            },
            {
              component: "Expandable Cards",
              description:
                "Das Projekt-Portfolio nutzt Expansion- und Blur-Animationen, um Tech-Architekturen zu enthüllen, ohne die Hauptansicht zu verlassen.",
            },
          ],
        },
        {
          number: "03",
          title: "Übergabe & Evolution: Ein technisches Manifest",
          subtitle:
            "Wir launchen die Site und bereiten sie vor, zu wachsen, zu messen und zu skalieren.",
          paragraphs: [
            "Das finale Deployment ist eine robuste, hochoptimierte Plattform als Operations-Hub für eine Personal Brand. Die Site integriert eine modulare Architektur für zukünftige experimentelle Components (wie Gravitations-Physik auf Cards oder dynamische Docks).",
            "Das Ergebnis ist ein Portfolio, das Noise filtert: Es zieht Clients und Collaborators an, die technische Excellence schätzen, und bestätigt sofort, dass High-Level-Design und sauberer Code untrennbar sind.",
          ],
        },
      ],
      impactQuote:
        "Das eigene Portfolio zu designen ist wahrscheinlich die komplexeste Herausforderung für ein Studio. Ich brauchte einen Raum, der nicht nur meine Tech- und Science-Projekte dokumentiert, sondern für sich selbst über meine Qualitätsstandards spricht. Die Entscheidung, echte 3D-Environments und interaktive Terminals zu integrieren, veränderte die Wahrnehmung meines Profils komplett. Die Site wurde von einer simplen Visitenkarte zu einer Echtzeit-Demonstration dessen, was digitales Handwerk bedeutet. Sie war entscheidend, um technische Autorität ab der ersten Sekunde zu etablieren.",
      impactAttribution:
        "Cristopher Carrada, Software Developer und Founder von Chiiko",
    } satisfies ProjectDetailContent,

    alancrespo_ai: {
      tagline:
        "Von der Akademie zur globalen Führung in Artificial Intelligence (Deep Tech).",
      services:
        "Visual Identity Design, B2B-Positionierungsstrategie, Content Engineering.",
      client: "Alan Crespo Murillo.",
      contextTitle: "Der Kontext",
      contextParagraphs: [
        'In einer Ära voller unverständlicher Algorithmen („Black Boxes") und generischer Profile war Alan Cresposs technische Autorität fragmentiert und für den Algorithmus unsichtbar. Trotz tiefgreifendem wissenschaftlichem Wissen hielt seine digitale Präsenz keine Audiences und projizierte nicht seinen wahren Wert.',
        'Die Herausforderung war nicht ein poliertes CV, sondern die visuelle und narrative Infrastruktur einer Institution. Wir mussten sein Profil transformieren, um ihn als unbestrittene Referenz für das „Scientist-Founder"-Modell zu etablieren.',
      ],
      steps: [
        {
          number: "01",
          title: "Strategie: Von Noise zu auditierbarer Autorität",
          subtitle:
            "Wir analysieren Ihre Marke, Ihren Markt und das reale Ziel des Projekts, bevor wir gestalten.",
          paragraphs: [
            "Wir identifizierten schnell, dass der Markt (C-Level-Executives und Entscheider) keine Motivation oder Basic-Tutorials suchte; sie hatten Angst vor dem legalen und operativen Risiko falscher AI-Implementierung.",
            'Wir änderten den Winkel komplett. Wir positionierten Alan nicht als Tech-Enthusiast, sondern als Systemic Risk Advisor und Architect of Trust. Die Strategie zentrierte die „White Box" und technologische Governance und schuf einen defensiven Moat auf Hard Science.',
          ],
        },
        {
          number: "02",
          title: 'Design & Entwicklung: Die Ästhetik der „White Box"',
          subtitle:
            "Wir gestalten und bauen eine klare, schnelle und differenzierte Experience.",
          paragraphs: [
            "Wir übersetzten diese strategische Vision in ein hochstrukturiertes Brand- und Content-Ökosystem:",
            "High-Level Visual Identity: Wir designed ein polygonales Isotyp (Kolibri und Gehirn), das technische Präzision und systemische Vision reflektiert. Wir implementierten eine sophistizierte Farbpalette mit Muted Pastel Orange (#ccb176), Sky Blue (#93b1cd) und Vivid Red-Akzenten (#ce1125), mit bold Typefaces (Archivo Black und Garet) für editorial Clarity.",
            "Modulares Content Engineering:",
          ],
          bullets: [
            {
              label: "LinkedIn",
              text: 'Wir deployten „Heavy Artillery" für Corporate Audiences, adressierend rechtliche Risiken und Systems-Architektur.',
            },
            {
              label: "X (Twitter)",
              text: 'Wir bauten ein „Deep Tech"-Debatten-Labor, übersetzend komplexe Milestones wie Whole Brain Emulation und Reinforcement Learning für intellektuelle Friction.',
            },
            {
              label: "Instagram",
              text: 'Wir humanisierten den Genius, dokumentierend seinen „Scientific Lifestyle" auf Konferenzen und Schachbrettern für aspirationalen Status.',
            },
          ],
        },
        {
          number: "03",
          title: "Übergabe & Evolution: Das B2B-Ökosystem dominieren",
          subtitle:
            "Wir launchen das Ökosystem und bereiten es vor, zu wachsen, zu messen und zu skalieren.",
          paragraphs: [
            "Der Impact war sofort und exponentiell. In nur 30 Tagen gingen wir von einer flachen Inaktivitätslinie zu über 11.300 cross-platform organischen Impressions (6,1K auf Instagram, 3,2K auf LinkedIn und 2K auf X) mit null Dollar Werbeinvestment.",
            "Die technische Performance übertraf jeden Industry-Standard. Auf X erreichten wir eine massive Engagement Rate von 13,6% (wenn der Industry-Durchschnitt 1–2% ist), validierend die Marke vor einer Tech-Elite verifizierter Follower. Heute ist die Infrastruktur bereit für Phase 2: visuelle Produktion nach Tokio, um Alan als globalen Thought Leader zu positionieren.",
          ],
        },
      ],
      impactQuote:
        "Der Übergang von Akademie und privatem Consulting in die öffentliche Sicht ist komplex. Ich hatte das Wissen, aber war in meiner eigenen ‚Black Box' gefangen. Das Team designed nicht nur ein Logo; sie auditierten meinen Diskurs, identifizierten genau welcher Teil meines technischen Wissens Tausende Dollar Wert für den Corporate-Markt hatte, und packierten es in eine makellose visuelle Identität. Von Algorithmus-Invisibilität zu Debatten mit der Tech-Elite auf X und Executives auf LinkedIn in einem Monat — das ist Proof, dass strategisches Design und High-Friction-Content die beste Investition sind.",
      impactAttribution: "Alan Crespo Murillo, Scientist-Founder",
    } satisfies ProjectDetailContent,
  },
};
