import type { HelpPageContent } from "../shared/types";

export const helpPageContent: HelpPageContent = {
  title: "Central de Ajuda",
  subtitle: "Encontre o canal de contato mais adequado para sua consulta",
  intro: [
    "Na Chiikö, queremos que sua experiência seja clara, simples e sem fricções. Por isso, organizamos nossos canais de contato conforme o tipo de consulta, para que sua mensagem chegue desde o início ao time certo.",
    "Se não está seguro de quem contatar, não se preocupe — revisaremos sua mensagem e a direcionaremos internamente.",
  ],
  sectionTitle: "Como podemos ajudar?",
  sectionIntro:
    "Abaixo você encontra o canal mais adequado conforme sua necessidade:",
  channels: [
    {
      title: "Dúvidas gerais",
      description:
        "Se você tem perguntas sobre nossos serviços, processos, prazos, disponibilidade ou quer saber se Chiikö é uma boa opção para seu projeto, este é o melhor ponto de partida.",
      emailLabel: "Email de contato:",
      email: "hello@chiiko.design",
    },
    {
      title: "Pagamentos e faturamento",
      description:
        "Para qualquer assunto relacionado a pagamentos, faturas, questões de cobrança ou outros assuntos administrativos e financeiros, contate-nos por este canal.",
      emailLabel: "Email de contato:",
      email: "finance@chiiko.design",
    },
    {
      title: "Contratos e assuntos jurídicos",
      description:
        "Se sua consulta envolve contratos, acordos, termos e condições ou qualquer tema jurídico, este canal nos permite atendê-lo com mais precisão.",
      emailLabel: "Email de contato:",
      email: "councel@chiiko.design",
    },
    {
      title: "Suporte técnico e problemas no site",
      description:
        "Se você detecta erros técnicos, falhas no site, problemas de funcionamento ou precisa de suporte após o lançamento do projeto, este é o canal indicado.",
      emailLabel: "Email de contato:",
      email: "support@chiiko.design",
    },
  ],
  responseTitle: "Tempos de resposta",
  responseText:
    "Nosso time revisa mensagens de segunda a sexta em horário comercial. Fazemos o possível para responder rapidamente e oferecer uma solução clara e útil.",
  closing:
    "Obrigado por confiar na Chiikö. Estamos aqui para ajudar e acompanhar você em cada etapa do seu projeto.",
};
