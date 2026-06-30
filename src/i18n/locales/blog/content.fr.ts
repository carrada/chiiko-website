import type { BlogPageContent } from "./types";

const body = (paragraphs: string[]) => paragraphs;

export const blogPageContent: BlogPageContent = {
  seoTitle: "Blog | Chiikö",
  seoDescription: "Chroniques du studio sur les visites chez Google et Pinterest, le projet de Sophie Gomez, les ateliers à l'UNAM et le parrainage de Compufest.",
  title: "Blog",
  description: "Réflexions du studio Chiikö sur le design, le développement et la stratégie numérique.",
  readMore: "Lire l'article",
  readTimeLabel: "min de lecture",
  backToBlog: "← Retour au blog",
  posts: [
    {
      slug: "google-ecosystem-visit",
      title: "Inspiration dans l'écosystème : visite chez Google",
      excerpt: "Le design d'interaction progresse en comprenant l'écosystème technologique mondial.",
      category: "Inspiration",
      body: body([
        "Le design d'interaction ne naît pas isolé derrière un écran ; il se construit en lisant l'ensemble de l'écosystème technologique.",
        "Ce mois-ci, nous avons visité les bureaux de Google à Mexico pour observer leur manière d'aborder l'échelle, les parcours d'usage et la continuité entre espaces physiques et produits numériques.",
        "Pour un studio boutique comme Chiikö, cette observation ne sert pas à copier des recettes, mais à extraire des leçons concrètes de cohérence, d'accessibilité et de performance.",
        "Nous revenons au studio avec de nouveaux repères et une attention renforcée pour chaque décision produit.",
      ]),
    },
    {
      slug: "pinterest-visual-culture-visit",
      title: "Curation et culture visuelle : visite chez Pinterest",
      excerpt: "Concevoir avec intention exige d'entraîner le regard et de comprendre les publics créatifs.",
      category: "Culture visuelle",
      body: body([
        "Concevoir avec intention demande un entraînement visuel continu et une compréhension fine des communautés créatives.",
        "Dans le cadre de notre parcours des pôles d'innovation de Mexico, nous avons visité Pinterest, plateforme centrale de l'inspiration et de la curation visuelle.",
        "Cette visite nous a permis d'étudier la transformation des tendances visuelles en interfaces fluides et intuitives, sans sacrifier la clarté.",
        "De retour chez Chiikö, nous appliquons ces enseignements pour renforcer la narration visuelle de nos prochains livrables.",
      ]),
    },
    {
      slug: "sophie-gomez-digital-identity",
      title: "Un artisanat pour la scène : nouvelle identité numérique de Sophie Gomez",
      excerpt: "Traduire une carrière artistique au format numérique exige sensibilité et structure.",
      category: "Projets",
      body: body([
        "Transformer un parcours artistique en expérience numérique requiert écoute, précision typographique et intention narrative.",
        "Nous sommes heureux d'officialiser notre collaboration avec l'actrice Sophie Gomez pour son nouveau site et portfolio officiel, sophiegomez.me.",
        "Notre défi consiste à créer un environnement minimaliste inspiré du design suisse, où le bruit visuel disparaît pour laisser toute la place à son travail au théâtre et à l'écran.",
        "Nous sommes actuellement en phase d'architecture et de conception, et nous partagerons bientôt l'étude de cas complète.",
      ]),
    },
    {
      slug: "unam-democratic-design-workshop",
      title: "Fondations visuelles : atelier de design démocratique à la Faculté des sciences",
      excerpt: "Un bon design repose sur la clarté structurelle, pas sur la complexité des outils.",
      category: "Communauté",
      body: body([
        "La qualité d'un design ne dépend pas d'outils sophistiqués, mais de la clarté de sa structure.",
        "Ce mois-ci, nous sommes retournés à la Faculté des sciences de l'UNAM pour animer un atelier pratique de composition et de communication.",
        "Au lieu de nous concentrer sur les fonctions d'un logiciel comme Canva, nous avons travaillé les principes universels : hiérarchie typographique, espace blanc intentionnel, contraste et équilibre.",
        "Voir les étudiants appliquer ces règles à leurs projets scientifiques confirme notre conviction : le design est un outil démocratique qui ordonne les idées et facilite la compréhension.",
      ]),
    },
    {
      slug: "anti-marketing-unam",
      title: "Anti-Marketing : la pertinence plutôt que le bruit à l'UNAM",
      excerpt: "Dans un environnement saturé, l'authenticité et l'intention créent l'avantage durable.",
      category: "Stratégie",
      body: body([
        "Quand les canaux numériques débordent de contenus génériques, un positionnement authentique vaut plus que la quantité.",
        "À la Faculté des sciences de l'UNAM, nous avons donné une seconde conférence sur la stratégie de marque contemporaine sous une idée centrale : l'Anti-Marketing.",
        "Nous avons remis en question les métriques de vanité, la saturation algorithmique et les tactiques de vente agressives, puis montré comment construire une autorité réelle par la valeur et la cohérence.",
        "Ces échanges avec un public scientifique maintiennent notre réflexion ancrée dans le réel et confirment que la pertinence l'emporte toujours sur le bruit.",
      ]),
    },
    {
      slug: "compufest-2026-sponsors",
      title: "Soutenir le talent local : sponsors officiels de Compufest 2026",
      excerpt: "La croissance de la culture technologique indépendante se construit collectivement.",
      category: "Communauté",
      body: body([
        "Les écosystèmes technologiques indépendants ne progressent pas par hasard ; ils avancent grâce au soutien d'espaces partagés.",
        "Chez Chiikö, nous avons rejoint Compufest 2026 comme sponsors officiels pour appuyer un événement qui rassemble développeurs, designers et passionnés de technologie du pays.",
        "Pour nous, ce rôle dépasse la visibilité d'un logo : il représente un engagement envers la culture des bâtisseurs, l'échange ouvert et la création de logiciels réfléchis.",
        "Nous repartons de ce festival avec une forte énergie, de nouveaux liens et l'envie de poursuivre un travail numérique exigeant.",
      ]),
    }
  ],
};
