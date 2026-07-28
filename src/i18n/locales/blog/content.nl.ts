import type { BlogPageContent } from "./types";

const body = (paragraphs: string[]) => paragraphs;

export const blogPageContent: BlogPageContent = {
  seoTitle: "Blog | Chiikö",
  seoDescription: "Studiochronieken over bezoeken aan Google en Pinterest, het project met Sophie Gomez, workshops aan de UNAM en de sponsoring van Compufest.",
  title: "Blog",
  description: "Reflecties van studio Chiikö over ontwerp, ontwikkeling en digitale strategie.",
  readMore: "Artikel lezen",
  readTimeLabel: "min leestijd",
  backToBlog: "← Terug naar blog",
  posts: [
    {
      slug: "veraz-news-platform-case",
      title: "Informeren zonder beïnvloeden: Veraz",
      excerpt: "Nieuwsplatform met design system, 3D-globe en tweetalige lezing.",
      category: "Projecten",
      body: body([
        "Eerlijke media zetten bronnen en leesbaarheid voorop.",
        "Veraz (veraz.app) aggregeert RSS met attributie.",
        "GSAP, R3F, Next.js + Supabase uit Mexico-Stad.",
        "Case: /proyectos/veraz — veraz.app.",
      ]),
    },
    {
      slug: "google-ecosystem-visit",
      title: "Inspiratie in het ecosysteem: een bezoek aan Google",
      excerpt: "Interactief ontwerp groeit door het wereldwijde technologie-ecosysteem te begrijpen.",
      category: "Inspiratie",
      body: body([
        "Interactief ontwerp ontstaat niet geïsoleerd achter een scherm, maar ontwikkelt zich door het bredere technologie-ecosysteem te doorgronden.",
        "Deze maand bezochten we de kantoren van Google in Mexico-Stad om te bestuderen hoe zij omgaan met schaal, gebruikersstromen en de overgang tussen fysieke en digitale contactpunten.",
        "Voor een boetiekstudio als Chiikö draait zo'n bezoek niet om het kopiëren van formules, maar om toepasbare lessen over samenhang, toegankelijkheid en prestaties.",
        "We keerden terug naar de studio met scherpere maatstaven en hernieuwde focus voor onze volgende productkeuzes.",
      ]),
    },
    {
      slug: "pinterest-visual-culture-visit",
      title: "Curatie en beeldcultuur: een bezoek aan Pinterest",
      excerpt: "Ontwerpen met bedoeling vraagt om visuele training en begrip van creatieve doelgroepen.",
      category: "Beeldcultuur",
      body: body([
        "Ontwerpen met bedoeling vraagt om voortdurende visuele training en een nauwkeurig begrip van creatieve gemeenschappen.",
        "Tijdens onze route langs innovatieknooppunten in Mexico-Stad bezochten we Pinterest, een centraal platform voor inspiratie en visuele curatie.",
        "De uitwisseling liet zien hoe visuele tendensen worden vertaald naar heldere en intuïtieve interfaces zonder culturele relevantie te verliezen.",
        "Terug bij Chiikö verwerken we deze inzichten in sterkere visuele verhaallijnen voor komende opleveringen.",
      ]),
    },
    {
      slug: "sophie-gomez-digital-identity",
      title: "Ambacht voor het podium: nieuwe digitale identiteit voor Sophie Gomez",
      excerpt: "Een artistieke loopbaan digitaal vertalen vraagt om gevoeligheid en structuur.",
      category: "Projecten",
      body: body([
        "Een artistiek parcours omzetten naar een digitale ervaring vereist aandachtig luisteren, typografische orde en narratieve precisie.",
        "We zijn verheugd onze samenwerking met actrice Sophie Gomez officieel te maken voor haar nieuwe website en portfolio op sophiegomez.me.",
        "De uitdaging is een minimalistische omgeving te bouwen volgens Zwitserse ontwerpbeginselen, waarin visuele ruis verdwijnt en haar werk op toneel en camera centraal staat.",
        "We bevinden ons in de fase van architectuur en concept en delen binnenkort de volledige casestudy.",
      ]),
    },
    {
      slug: "unam-democratic-design-workshop",
      title: "Visuele fundamenten: workshop democratisch ontwerp aan de Faculteit Wetenschappen",
      excerpt: "Goed ontwerp hangt af van structurele helderheid, niet van complexe hulpmiddelen.",
      category: "Gemeenschap",
      body: body([
        "De kwaliteit van ontwerp wordt niet bepaald door ingewikkelde programmatuur, maar door de helderheid van de onderliggende structuur.",
        "Deze maand keerden we terug naar de Faculteit Wetenschappen van de UNAM om een praktische workshop over compositie en communicatie te geven.",
        "In plaats van te focussen op functies van programma's zoals Canva, werkten we met universele principes: typografische hiërarchie, doelbewust witruimtegebruik, contrast en balans.",
        "Dat studenten deze regels toepassen op wetenschappelijke projecten bevestigt onze overtuiging dat ontwerp een democratisch middel is om ideeën te ordenen.",
      ]),
    },
    {
      slug: "anti-marketing-unam",
      title: "Anti-Marketing: relevantie boven ruis aan de UNAM",
      excerpt: "In verzadigde digitale omgevingen vormen authenticiteit en bedoeling een duurzaam voordeel.",
      category: "Strategie",
      body: body([
        "Wanneer digitale kanalen overvol zijn met generieke inhoud, is een geloofwaardige positionering waardevoller dan louter volume.",
        "Aan de Faculteit Wetenschappen van de UNAM gaven we een tweede lezing over hedendaagse merkstrategie onder één duidelijke premisse: Anti-Marketing.",
        "We stelden ijdelheidscijfers, algoritmische oververzadiging en agressieve verkooppatronen ter discussie en deelden hoe makers organische autoriteit opbouwen via echte waarde.",
        "Gesprekken met een wetenschappelijk publiek houden onze ideeën scherp en bevestigen steeds opnieuw dat relevantie sterker is dan ruis.",
      ]),
    },
    {
      slug: "compufest-2026-sponsors",
      title: "Lokaal talent ondersteunen: officiële sponsors van Compufest 2026",
      excerpt: "De groei van onafhankelijke technologiecultuur wordt opgebouwd door collectieve steun.",
      category: "Gemeenschap",
      body: body([
        "Onafhankelijke technologie-ecosystemen groeien niet vanzelf, maar dankzij blijvende steun voor gedeelde ontmoetingsplaatsen.",
        "Bij Chiikö sloten we ons als officiële sponsor aan bij Compufest 2026, een evenement dat ontwikkelaars, ontwerpers en technologieliefhebbers uit het hele land samenbrengt.",
        "Voor ons gaat dit verder dan merkaanwezigheid: het is een verbintenis met bouwerscultuur, open kennisuitwisseling en doordachte programmatuurontwikkeling.",
        "We verlaten het festival met nieuwe verbindingen en sterke energie om onze digitale ambachtelijke aanpak verder uit te bouwen.",
      ]),
    }
  ],
};
