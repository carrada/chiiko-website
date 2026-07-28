import type { ProjectDetailContent } from "@/data/projectDetails";
import { mergeProjectItemSeo, projectsPageSeo } from "./project-seo";
import { verazDetailsIt } from "./veraz/details.i18n";
import { verazItems } from "./veraz/items";

export const projectContent = {
  page: {
    title: "Progetti",
    description:
      "Qui puoi esplorare i nostri ultimi progetti e case study.",
    seoTitle: projectsPageSeo.it.seoTitle,
    seoDescription: projectsPageSeo.it.seoDescription,
    back: "← Torna ai progetti",
    visitWebsite: "Visita il sito",
  },
  labels: {
    services: "Servizi",
    client: "Cliente",
    context: "Il contesto",
    impact: "L'impatto",
    uiComponent: "Componente UI",
    engineering: "Ingegneria & esperienza",
  },
  items: {
    veraz: mergeProjectItemSeo("veraz", "it", verazItems.it),
    eamx: {
      title: "EAMX",
      description:
        "Architettura e precisione strutturale portate nel piano digitale.",
      services:
        "Strategia digitale, design dell'interazione, sviluppo frontend avanzato.",
      client: "EAMX Arquitectos.",
    },
    compufest: {
      title: "Compufest [1]",
      description:
        "Il più grande evento studentesco di informatica e programmazione alla UNAM.",
      services: "Strategia digitale, design UI/UX, sviluppo web.",
      client: "Compufest / Comunità studentesca UNAM.",
    },
    emicarrada: {
      title: "emicarrada.com",
      description:
        "L'intersezione tra ingegneria del software e artigianato digitale.",
      services: "Art direction, sviluppo frontend avanzato, WebGL 3D.",
      client: "Cristopher Carrada.",
    },
    alancrespo_ai: {
      title: "Alan Crespo",
      description:
        "Dall'accademia alla leadership globale in Intelligenza Artificiale (Deep Tech).",
      services:
        "Design dell'identità visiva, strategia di posizionamento B2B, ingegneria dei contenuti.",
      client: "Alan Crespo Murillo.",
    },
  },
  details: {
    veraz: verazDetailsIt,
    eamx: {
      tagline:
        "Architecture et précision structurelle portées dans le plan numérique.",
      services:
        "Stratégie numérique, design d'interaction, développement frontend avancé.",
      client: "EAMX Arquitectos.",
      contextTitle: "Le contexte",
      contextParagraphs: [
        "Un studio d'architecture contemporaine qui conçoit des espaces avec un rigueur millimétrique ne peut se permettre un portfolio numérique générique. Le défi avec EAMX était de traduire leur philosophie de travail — fondée sur l'esthétique, la fonctionnalité et la durabilité — en une expérience web.",
        "Ils avaient besoin que leur plateforme fasse plus qu'afficher des projets dans une grille corporate traditionnelle ; elle devait transmettre une innovation pure et sans compromis. Ils voulaient que les utilisateurs ressentent la spatialité et le design dès le premier clic.",
      ],
      steps: [
        {
          number: "01",
          title: "Stratégie : l'interaction comme manifeste",
          subtitle:
            "Nous analysons votre marque, votre marché et l'objectif réel du projet avant de concevoir.",
          paragraphs: [
            "Nous avons rejeté l'idée d'un site web passif. La stratégie s'est concentrée sur la construction d'un environnement sensoriel où l'interaction de l'utilisateur dicterait le rythme de la découverte.",
            "Pour un marché qui valorise le design avant tout, nous avons décidé que chaque section devait se comporter selon ses propres règles physiques. L'objectif était de créer un parcours ludique et immersif, ancré dans une rigueur esthétique absolue — capable de valider la maîtrise technique du studio auprès de clients de haut profil.",
          ],
        },
        {
          number: "02",
          title: "Design & développement : artisanat numérique et physique appliquée",
          subtitle:
            "Nous concevons et construisons une expérience claire, rapide et différenciante.",
          paragraphs: [
            "Nous avons poussé l'interface à l'extrême avec une typographie monumentale et un contraste brutaliste. Côté ingénierie, nous avons construit le site avec Next.js et un moteur d'animation avancé pour obtenir des interactions fluides que l'on ne voit habituellement que dans les applications natives :",
          ],
          bullets: [
            {
              label: "Exploration révélatrice",
              text: 'Nous avons implémenté un composant interactif sur la page d\'accueil où les utilisateurs manient leur curseur comme une « lampe torche », déchirant la toile sombre via des masques SVG pour découvrir la véritable vision du studio.',
            },
            {
              label: "Chaos contrôlé (physique 3D)",
              text: "Nous avons brisé la grille statique. La galerie est une toile où les projets architecturaux flottent ; les utilisateurs peuvent saisir, faire glisser et lâcher des photographies qui réagissent avec des physiques de rebond et d'inclinaison tridimensionnelle.",
            },
            {
              label: "Contexte immersif",
              text: "Nous avons intégré un système de liens dynamiques pour leurs normes (comme les certifications ISO ou les villes). Au survol, des cartes flottantes se déploient avec des aperçus visuels de haute qualité, maintenant l'engagement des utilisateurs sans interrompre leur lecture.",
            },
          ],
        },
        {
          number: "03",
          title: "Livraison & évolution : un showroom numérique haut de gamme",
          subtitle:
            "Nous lançons le site et le préparons à grandir, mesurer et évoluer.",
          paragraphs: [
            "Le résultat est bien plus qu'une landing page ; c'est une démonstration de capacité technique. Nous clôturons le parcours avec une scène éclairée dynamiquement qui élève l'appel à l'action, invitant à la conversion de manière théâtrale.",
            "Nous avons livré une plateforme robuste et optimisée, capable de gérer des interactions complexes sans sacrifier les millisecondes de chargement. L'écosystème numérique d'EAMX est désormais positionné comme une œuvre de design à part entière, avec une architecture de composants prête à évoluer et à intégrer de futurs projets avec le même niveau de spectacle.",
          ],
        },
      ],
      impactQuote:
        "Nous voulions que notre site reflète la même obsession du détail et de l'innovation que nous mettons dans nos œuvres physiques, mais chaque agence nous proposait des catalogues ennuyeux. L'équipe a immédiatement compris que nous avions besoin d'une expérience, pas d'une brochure. Voir les utilisateurs jouer avec notre galerie et découvrir le site, c'est exactement le même sentiment d'émerveillement que nous visons quand quelqu'un entre dans l'un de nos bâtiments. Ils ont porté notre présentation numérique au même niveau que notre architecture.",
      impactAttribution: "Direction de projet, EAMX",
    } satisfies ProjectDetailContent,

    compufest: {
      tagline:
        "Le plus grand événement étudiant d'informatique et de programmation à l'UNAM.",
      services: "Stratégie numérique, design UI/UX, développement web.",
      client: "Compufest / Communauté étudiante UNAM.",
      contextTitle: "Le contexte",
      contextParagraphs: [
        "Un événement de cette envergure exige une présence numérique à la hauteur. Initialement, la vision pour Compufest était conservatrice : une page statique basique diffusée par le bouche-à-oreille. Cependant, pour établir un hackathon de premier ordre et attirer les acteurs clés de l'industrie tech, la plateforme devait être bien plus qu'une simple brochure numérique — elle devait être une déclaration d'intention.",
        "C'est là que nous sommes intervenus pour élever la proposition, transformant une idée universitaire en une marque numérique attractive pour les géants de l'industrie et la communauté des développeurs.",
      ],
      steps: [
        {
          number: "01",
          title: "Stratégie : une vision au-delà du code",
          subtitle:
            "Nous analysons la marque, le marché et l'objectif réel du projet avant de concevoir.",
          paragraphs: [
            "Le défi principal n'était pas simplement d'informer sur les dates et les horaires, mais de construire une crédibilité immédiate. Nous avons identifié que le public cible — étudiants en ingénierie, développeurs expérimentés et, crucialement, sponsors corporate de haut profil — exigeait une expérience qui parle leur langage technique.",
            "Nous avons modifié la stratégie originale : au lieu d'une page générique, nous avons conceptualisé un hub numérique conçu spécifiquement pour valider l'échelle de l'événement, faciliter l'inscription massive et servir d'outil de vente infaillible pour sécuriser des conférenciers et des partenariats stratégiques.",
          ],
        },
        {
          number: "02",
          title: "Design & développement : esthétique hacker, ingénierie premium",
          subtitle:
            "Nous concevons et construisons une expérience claire, rapide et différenciante.",
          paragraphs: [
            'La direction artistique s\'est inspirée de l\'imaginaire classique de l\'informatique, élevé aux standards du design web haut de gamme. Nous avons implémenté une interface en mode sombre accentuée de typographies monospace et d\'éléments visuels inspirés de l\'art ASCII et des terminaux de commande. Cette esthétique « brute » et technique a immédiatement résonné avec la communauté des programmeurs.',
            "Côté ingénierie, le développement s'est concentré sur la vitesse, la clarté architecturale et la précision de chaque interaction. Nous avons construit une interface qui est non seulement visuellement frappante, mais qui gère aussi la charge d'information du hackathon, les plannings et les profils des intervenants avec une fluidité absolue, en appliquant les principes du design suisse : lisibilité maximale, usage intentionnel de l'espace négatif et élimination du bruit visuel.",
          ],
        },
        {
          number: "03",
          title: "Livraison & évolution : de l'université à l'industrie",
          subtitle:
            "Nous lançons le site et le préparons à grandir, mesurer et évoluer.",
          paragraphs: [
            "Le lancement du site a marqué un tournant dans l'organisation de Compufest. La plateforme web est devenue le moteur de croissance de l'événement, permettant aux organisateurs de projeter une image institutionnelle et hautement professionnelle.",
            "Le résultat de cette infrastructure numérique a été décisif : l'événement a obtenu le soutien de grands sponsors internationaux (dont Google for Education), a attiré des communautés tech entières et a rempli sa programmation de conférenciers. Le code livré a non seulement servi l'édition [1], mais a aussi établi une architecture robuste, prête à évoluer lors des futures itérations du festival.",
          ],
        },
      ],
      impactQuote:
        "Nous n'avions pas de site web pour notre événement. Nous allions simplement mettre en ligne une page, la faire circuler de bouche à oreille et espérer le meilleur. Mais Chiiko nous a convaincus de ne pas faire cela, et ce fut l'une des meilleures décisions que nous ayons pu prendre pour l'événement. Sans le site, nous n'aurions jamais rempli notre programmation de conférenciers, attiré des communautés et des sponsors, ni eu la base pour présenter le hackathon au monde. Le plus grand événement étudiant d'informatique et de programmation à l'UNAM a aussi été rendu possible grâce à Chiiko.",
      impactAttribution: "Équipe organisatrice, Compufest",
    } satisfies ProjectDetailContent,

    emicarrada: {
      tagline:
        "Le croisement entre l'ingénierie logicielle et l'artisanat numérique.",
      services: "Direction artistique, développement frontend avancé, WebGL 3D.",
      client: "Cristopher Carrada.",
      contextTitle: "Le contexte",
      contextParagraphs: [
        "Le portfolio d'un développeur ne doit pas se limiter à lister des compétences ; il doit en être la preuve irréfutable. Le défi de ce projet était de construire une identité visuelle profonde — ancrée dans des tons bleu marine et des accents orange — capable de mêler un profil technique et scientifique à une présentation éditoriale moderne et soignée.",
        "Nous ne cherchions pas un CV numérique statique, mais un écosystème interactif reflétant la précision de l'ingénierie logicielle haut de gamme et l'attention au détail du minimalisme structurel.",
      ],
      steps: [
        {
          number: "01",
          title: "Stratégie : montrer, pas seulement raconter",
          subtitle:
            "Nous analysons la marque, le marché et l'objectif réel du projet avant de concevoir.",
          paragraphs: [
            "La stratégie centrale consistait à utiliser l'interaction comme langage narratif. Au lieu de blocs de texte prévisibles, nous avons décidé que chaque section du site devait inviter les utilisateurs à interagir avec le code.",
            'Nous avons défini une identité thématique cohérente orbitant autour de la figure du « développeur/scientifique/créateur ». Les symboles de cette identité — les lunettes 3D et le terminal de commande — sont devenus les principaux véhicules pour naviguer entre biographie, services et portfolio, transformant les visiteurs de lecteurs passifs en utilisateurs actifs.',
          ],
        },
        {
          number: "02",
          title: "Design & développement : architecture interactive",
          subtitle:
            "Nous concevons et construisons une expérience claire, rapide et différenciante.",
          paragraphs: [
            "Le site a été construit selon une philosophie stricte de performance et de fluidité. Du preloader SVG animé qui cède la place à une entrée en cascade des éléments, chaque interaction est orchestrée pour créer une sensation de construction en couches.",
            "Nous avons implémenté des composants d'interface avancés qui défient la mise en page traditionnelle :",
          ],
          table: [
            {
              component: "Hero 3D interactif",
              description:
                "Un modèle tridimensionnel de lunettes manipulable par l'utilisateur, rendu en WebGL avec des physiques de lumière et d'ombre en temps réel.",
            },
            {
              component: "Terminal fonctionnel (CLI)",
              description:
                "La biographie et le formulaire de contact ne sont pas du texte brut ; ce sont des interfaces en ligne de commande fonctionnelles qui répondent aux entrées réelles de l'utilisateur.",
            },
            {
              component: "Galerie éditoriale (Blog)",
              description:
                "Un modèle de navigation inspiré du design natif iOS (Apple Cards Carousel). Les cartes s'étendent en plein écran avec un effet de flou d'arrière-plan.",
            },
            {
              component: "Cartes extensibles",
              description:
                "Le portfolio de projets utilise des animations d'expansion et de flou pour révéler les architectures technologiques sans quitter la vue principale.",
            },
          ],
        },
        {
          number: "03",
          title: "Livraison & évolution : un manifeste technique",
          subtitle:
            "Nous lançons le site et le préparons à grandir, mesurer et évoluer.",
          paragraphs: [
            "Le déploiement final est une plateforme robuste et hautement optimisée qui sert de hub opérationnel pour une marque personnelle. Le site intègre une architecture modulaire permettant l'intégration future de composants expérimentaux (comme des physiques de gravité sur les cartes ou des docks dynamiques).",
            "Le résultat est un portfolio qui filtre le bruit : il attire des clients et des collaborateurs qui valorisent l'excellence technique, établissant immédiatement un standard de qualité et confirmant que le design de haut niveau et le code propre sont indissociables.",
          ],
        },
      ],
      impactQuote:
        "Concevoir son propre portfolio est probablement le défi le plus complexe pour un studio. J'avais besoin d'un espace qui non seulement documente mes projets en technologie et en science, mais parle de lui-même de mes standards de qualité. La décision d'intégrer de véritables environnements 3D et des terminaux interactifs a complètement changé la perception de mon profil. Le site a cessé d'être une simple carte de visite pour devenir une démonstration en temps réel de ce que signifie l'artisanat numérique. Il a été essentiel pour établir une autorité technique dès la première seconde.",
      impactAttribution:
        "Cristopher Carrada, développeur logiciel et fondateur de Chiiko",
    } satisfies ProjectDetailContent,

    alancrespo_ai: {
      tagline:
        "De l'académie au leadership mondial en intelligence artificielle (Deep Tech).",
      services:
        "Design d'identité visuelle, stratégie de positionnement B2B, ingénierie de contenu.",
      client: "Alan Crespo Murillo.",
      contextTitle: "Le contexte",
      contextParagraphs: [
        'Dans une ère saturée d\'algorithmes incompréhensibles (« boîtes noires ») et de profils génériques, l\'autorité technique d\'Alan Crespo était fragmentée et invisible pour l\'algorithme. Malgré une connaissance scientifique profonde, sa présence numérique ne retenait pas les audiences ni ne projetait sa véritable valeur.',
        'Le défi n\'était pas de créer un CV soigné, mais de construire l\'infrastructure visuelle et narrative d\'une institution. Nous devions transformer son profil pour l\'établir comme la référence incontestée du modèle « Scientist-Founder ».',
      ],
      steps: [
        {
          number: "01",
          title: "Stratégie : du bruit à l'autorité auditable",
          subtitle:
            "Nous analysons votre marque, votre marché et l'objectif réel du projet avant de concevoir.",
          paragraphs: [
            "Nous avons rapidement identifié que le marché (dirigeants C-level et décideurs) ne cherchait ni motivation ni tutoriels basiques ; il était terrifié par le risque juridique et opérationnel d'une mauvaise implémentation de l'IA.",
            'Nous avons complètement changé d\'angle. Nous avons positionné Alan non pas comme un passionné de tech, mais comme un conseiller en risque systémique et architecte de confiance. La stratégie s\'est centrée sur la « boîte blanche » et la gouvernance technologique, créant un fossé défensif fondé sur la science dure.',
          ],
        },
        {
          number: "02",
          title: 'Design & développement : l\'esthétique de la « boîte blanche »',
          subtitle:
            "Nous concevons et construisons une expérience claire, rapide et différenciante.",
          paragraphs: [
            "Nous avons traduit cette vision stratégique en un écosystème de marque et de contenu hautement structuré :",
            "Identité visuelle haut de gamme : nous avons conçu un isotype polygonal (le colibri et le cerveau) reflétant la précision technique et la vision systémique. Nous avons implémenté une palette sophistiquée avec Orange pastel atténué (#ccb176), Bleu ciel (#93b1cd) et accents Rouge vif (#ce1125), soutenue par des typographies marquantes (Archivo Black et Garet) pour garantir une clarté éditoriale.",
            "Ingénierie de contenu modulaire :",
          ],
          bullets: [
            {
              label: "LinkedIn",
              text: 'Nous avons déployé une « artillerie lourde » destinée aux audiences corporate, abordant les risques juridiques et l\'architecture des systèmes.',
            },
            {
              label: "X (Twitter)",
              text: 'Nous avons construit un laboratoire de débat « Deep Tech », traduisant des jalons complexes tels que la Whole Brain Emulation et le Reinforcement Learning pour générer une friction intellectuelle.',
            },
            {
              label: "Instagram",
              text: 'Nous avons humanisé le génie, documentant son « lifestyle scientifique » lors de conférences et aux échiquiers pour construire un statut aspirationnel.',
            },
          ],
        },
        {
          number: "03",
          title: "Livraison & évolution : dominer l'écosystème B2B",
          subtitle:
            "Nous lançons l'écosystème et le préparons à grandir, mesurer et évoluer.",
          paragraphs: [
            "L'impact a été immédiat et exponentiel. En seulement 30 jours, nous sommes passés d'une ligne plate d'inactivité à plus de 11 300 impressions organiques cross-plateformes (6,1K sur Instagram, 3,2K sur LinkedIn et 2K sur X) avec zéro dollar investi en publicité.",
            "La performance technique a dépassé tout standard de l'industrie. Sur X, nous avons atteint un taux d'engagement massif de 13,6 % (alors que la moyenne de l'industrie est de 1 % à 2 %), validant la marque auprès d'une élite tech de followers vérifiés. Aujourd'hui, l'infrastructure est prête pour la phase 2 : emmener la production visuelle à Tokyo pour positionner Alan comme un leader d'opinion mondial.",
          ],
        },
      ],
      impactQuote:
        "Passer de l'académie et du conseil privé à la visibilité publique est complexe. J'avais les connaissances, mais j'étais piégé dans ma propre « boîte noire ». L'équipe n'a pas seulement conçu un logo ; elle a audité mon discours, identifié exactement quelle partie de mes connaissances techniques valait des milliers de dollars pour le marché corporate, et l'a empaquetée dans une identité visuelle impeccable. Passer de l'invisibilité face à l'algorithme à générer des débats avec l'élite tech sur X et des dirigeants sur LinkedIn en un seul mois prouve que le design stratégique et le contenu à haute friction sont le meilleur investissement.",
      impactAttribution: "Alan Crespo Murillo, Scientist-Founder",
    } satisfies ProjectDetailContent,
  },
};
