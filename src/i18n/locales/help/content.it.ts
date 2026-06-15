import type { HelpPageContent } from "../shared/types";

export const helpPageContent: HelpPageContent = {
  title: "Centro assistenza",
  subtitle: "Trova il canale di contatto più adatto alla tua richiesta",
  intro: [
    "In Chiikö vogliamo che la tua esperienza sia chiara, semplice e senza friction. Per questo organizziamo i nostri canali di contatto secondo il tipo di richiesta, così il tuo messaggio arriva subito al team giusto.",
    "Se non sei sicuro a chi scrivere, non preoccuparti — esamineremo il tuo messaggio e lo indirizzeremo internamente.",
  ],
  sectionTitle: "Come possiamo aiutarti?",
  sectionIntro:
    "Di seguito trovi il canale più adatto secondo la tua esigenza:",
  channels: [
    {
      title: "Domande generali",
      description:
        "Se hai domande sui nostri servizi, processi, tempi, disponibilità o stai esplorando se Chiikö è la scelta giusta per il tuo progetto, questo è il punto di partenza migliore.",
      emailLabel: "Email di contatto:",
      email: "hello@chiiko.design",
    },
    {
      title: "Pagamenti e fatturazione",
      description:
        "Per qualsiasi questione relativa a pagamenti, fatture, domande di billing o altre questioni amministrative e finanziarie, contattaci tramite questo canale.",
      emailLabel: "Email di contatto:",
      email: "finance@chiiko.design",
    },
    {
      title: "Contratti e questioni legali",
      description:
        "Se la tua richiesta riguarda contratti, accordi, termini e condizioni o qualsiasi tema legale, questo canale ci permette di assisterti con maggiore precisione.",
      emailLabel: "Email di contatto:",
      email: "councel@chiiko.design",
    },
    {
      title: "Supporto tecnico e problemi del sito web",
      description:
        "Se riscontri problemi tecnici, errori sul sito, malfunzionamenti o hai bisogno di supporto dopo il lancio del progetto, questo è il canale appropriato.",
      emailLabel: "Email di contatto:",
      email: "support@chiiko.design",
    },
  ],
  responseTitle: "Tempi di risposta",
  responseText:
    "Il nostro team esamina i messaggi dal lunedì al venerdì in orario lavorativo. Facciamo il possibile per rispondere rapidamente e offrire una soluzione chiara e utile.",
  closing:
    "Grazie per aver scelto Chiikö. Siamo qui per aiutarti e accompagnarti in ogni fase del tuo progetto.",
};
