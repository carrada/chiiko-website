import type { HelpPageContent } from "../shared/types";

export const helpPageContent: HelpPageContent = {
  title: "Centro de Ayuda",
  subtitle: "Encuentra el canal de contacto más adecuado para tu consulta",
  intro: [
    "En Chiikö queremos que tu experiencia sea clara, sencilla y sin fricciones. Por eso organizamos nuestros canales de contacto según el tipo de consulta, para que tu mensaje llegue desde el inicio al equipo adecuado.",
    "Si no estás seguro de a quién escribir, no te preocupes: revisaremos tu mensaje y lo canalizaremos internamente.",
  ],
  sectionTitle: "¿Cómo podemos ayudarte?",
  sectionIntro:
    "A continuación encontrarás el canal más adecuado según tu necesidad:",
  channels: [
    {
      title: "Dudas generales",
      description:
        "Si tienes preguntas sobre nuestros servicios, procesos, tiempos, disponibilidad o simplemente quieres saber si Chiikö es una buena opción para tu proyecto, este es el mejor punto de partida.",
      emailLabel: "Correo de contacto:",
      email: "hola@chiiko.design",
    },
    {
      title: "Pagos y facturación",
      description:
        "Para cualquier asunto relacionado con pagos, facturación, comprobantes, aclaraciones administrativas o temas financieros, este canal nos permite atenderte de forma más rápida y precisa.",
      emailLabel: "Correo de contacto:",
      email: "finanzas@chiiko.design",
    },
    {
      title: "Contratos y asuntos legales",
      description:
        "Si tu consulta está relacionada con contratos, acuerdos, términos y condiciones o cualquier tema legal, te recomendamos escribir directamente a este correo.",
      emailLabel: "Correo de contacto:",
      email: "juridico@chiiko.design",
    },
    {
      title: "Soporte técnico y problemas con el sitio web",
      description:
        "Si detectas errores técnicos, fallos en el sitio web, problemas de funcionamiento o necesitas soporte después del lanzamiento de tu proyecto, este es el canal indicado.",
      emailLabel: "Correo de contacto:",
      email: "soporte@chiiko.design",
    },
  ],
  responseTitle: "Tiempos de respuesta",
  responseText:
    "Nuestro equipo revisa los mensajes de lunes a viernes en horario laboral. Hacemos todo lo posible por responder en el menor tiempo posible y brindarte una solución clara y útil.",
  closing:
    "Gracias por confiar en Chiikö. Estamos aquí para ayudarte y acompañarte en cada etapa de tu proyecto.",
};
