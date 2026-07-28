import type { BlogPageContent } from "./types";

const body = (paragraphs: string[]) => paragraphs;

export const blogPageContent: BlogPageContent = {
  seoTitle: "Blog | Chiikö",
  seoDescription: "Cronache dello studio sulle visite a Google e Pinterest, il progetto con Sophie Gomez, i laboratori alla UNAM e la sponsorizzazione di Compufest.",
  title: "Blog",
  description: "Riflessioni dello studio Chiikö su progettazione, sviluppo e strategia digitale.",
  readMore: "Leggi articolo",
  readTimeLabel: "min di lettura",
  backToBlog: "← Torna al blog",
  posts: [
    {
      slug: "veraz-news-platform-case",
      title: "Informare senza influenzare: Veraz",
      excerpt: "Piattaforma news con design system, globo 3D e prodotto bilingue.",
      category: "Progetti",
      body: body([
        "Un media product onesto mette la lettura al centro.",
        "Veraz (veraz.app) cura RSS con attribuzione e link alla fonte.",
        "Token, GSAP, R3F, Next.js + Supabase da Città del Messico.",
        "Case study: /proyectos/veraz — veraz.app.",
      ]),
    },
    {
      slug: "google-ecosystem-visit",
      title: "Ispirazione nell'ecosistema: visita a Google",
      excerpt: "La progettazione di interazione cresce comprendendo l'ecosistema tecnologico globale.",
      category: "Ispirazione",
      body: body([
        "La progettazione di interazione non nasce isolata dietro uno schermo, ma si sviluppa leggendo l'intero ecosistema tecnologico.",
        "Questo mese abbiamo visitato gli uffici di Google a Città del Messico per osservare come affrontano scala, percorsi d'uso e continuità tra ambienti fisici e prodotti digitali.",
        "Per uno studio boutique come Chiikö, questo confronto non serve a replicare formule, ma a ricavare lezioni concrete su coerenza, accessibilità e prestazioni.",
        "Rientriamo in studio con criteri più solidi e attenzione rinnovata su ogni scelta di prodotto.",
      ]),
    },
    {
      slug: "pinterest-visual-culture-visit",
      title: "Curatela e cultura visiva: visita a Pinterest",
      excerpt: "Progettare con intenzione richiede allenamento dello sguardo e comprensione dei pubblici creativi.",
      category: "Cultura visiva",
      body: body([
        "Progettare con intenzione richiede un allenamento visivo costante e una lettura precisa delle comunità creative.",
        "Nel nostro percorso tra i poli di innovazione di Città del Messico abbiamo visitato Pinterest, piattaforma centrale per ispirazione e curatela visiva.",
        "L'incontro ci ha permesso di capire come le tendenze visive diventino interfacce fluide e intuitive, mantenendo chiarezza e rilevanza culturale.",
        "Tornati in Chiikö, stiamo applicando queste prospettive per rafforzare la narrazione visiva dei prossimi progetti.",
      ]),
    },
    {
      slug: "sophie-gomez-digital-identity",
      title: "Artigianato per la scena: nuova identità digitale per Sophie Gomez",
      excerpt: "Tradurre una carriera artistica in forma digitale richiede sensibilità e struttura.",
      category: "Progetti",
      body: body([
        "Trasformare un percorso artistico in esperienza digitale richiede ascolto, ordine tipografico e precisione narrativa.",
        "Siamo felici di ufficializzare la collaborazione con l'attrice Sophie Gomez per il suo nuovo sito ufficiale e portfolio, sophiegomez.me.",
        "La sfida è costruire un ambiente minimalista ispirato ai principi della progettazione svizzera, dove il rumore visivo scompare e il suo lavoro su palco e schermo diventa protagonista.",
        "Siamo nella fase di architettura e concept e presto condivideremo lo studio di caso completo.",
      ]),
    },
    {
      slug: "unam-democratic-design-workshop",
      title: "Fondamenti visivi: laboratorio di progettazione democratica alla Facoltà di Scienze",
      excerpt: "Una buona progettazione dipende dalla chiarezza strutturale, non da strumenti complessi.",
      category: "Comunità",
      body: body([
        "La qualità della progettazione non dipende da software complessi, ma dalla chiarezza della struttura che sostiene il messaggio.",
        "Questo mese siamo tornati alla Facoltà di Scienze della UNAM per guidare un laboratorio pratico di composizione e comunicazione.",
        "Invece di concentrarci sulle funzioni dei programmi come Canva, abbiamo lavorato su principi universali: gerarchia tipografica, uso intenzionale dello spazio bianco, contrasto ed equilibrio.",
        "Vedere studenti di discipline scientifiche applicare queste regole ai loro progetti conferma la nostra visione: la progettazione è uno strumento democratico per ordinare idee.",
      ]),
    },
    {
      slug: "anti-marketing-unam",
      title: "Anti-Marketing: rilevanza oltre il rumore alla UNAM",
      excerpt: "In contesti digitali saturi, autenticità e intenzione creano vantaggio duraturo.",
      category: "Strategia",
      body: body([
        "Quando i canali digitali sono saturi di contenuti generici, il posizionamento autentico vale più della quantità.",
        "Alla Facoltà di Scienze della UNAM abbiamo tenuto una seconda lezione sulla strategia di marca contemporanea con una premessa chiara: Anti-Marketing.",
        "Abbiamo messo in discussione metriche di vanità, saturazione algoritmica e tattiche di vendita aggressive, mostrando come costruire autorevolezza organica tramite valore reale.",
        "Il confronto con studenti di area scientifica mantiene il nostro lavoro ancorato alla realtà e conferma che la rilevanza supera sempre il rumore.",
      ]),
    },
    {
      slug: "compufest-2026-sponsors",
      title: "Sostenere il talento locale: sponsor ufficiali di Compufest 2026",
      excerpt: "La crescita della cultura tecnologica indipendente nasce dal sostegno collettivo.",
      category: "Comunità",
      body: body([
        "Gli ecosistemi tecnologici indipendenti non crescono per caso, ma grazie al sostegno continuo degli spazi condivisi.",
        "In Chiikö abbiamo partecipato a Compufest 2026 come sponsor ufficiali per sostenere un evento che riunisce sviluppatori, progettisti e appassionati di tecnologia del paese.",
        "Per noi non è semplice visibilità del marchio: è un impegno verso cultura costruttiva, scambio aperto di conoscenza e sviluppo software consapevole.",
        "Usciamo dal festival con nuove connessioni e grande energia per continuare a elevare la qualità dei nostri progetti digitali.",
      ]),
    }
  ],
};
