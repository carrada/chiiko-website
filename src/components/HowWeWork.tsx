import { useTranslation } from "react-i18next";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const HowWeWork = () => {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  const content = {
    es: {
      title: "Cómo trabajamos",
      intro1: "En Chiiko no diseñamos por intuición ni desarrollamos por volumen.",
      intro2: "Trabajamos con intención, estructura y enfoque estratégico.",
      intro3: "Nuestro proceso es simple, pero deliberado.",
      steps: [
        {
          number: "1",
          title: "Entendimiento",
          description: "Antes de diseñar cualquier cosa, entendemos el contexto.",
          detail: "Analizamos tu marca, objetivos, audiencia y el momento en el que se encuentra tu negocio. No todos los proyectos necesitan lo mismo, y no todos son para Chiiko.",
          conclusion: "Aquí definimos si hay fit."
        },
        {
          number: "2",
          title: "Dirección",
          description: "Traducimos el entendimiento en decisiones claras.",
          detail: "Definimos estructura, enfoque visual y funcionalidad. Cada elección tiene un porqué. No seguimos tendencias por seguirlas; construimos con sentido y durabilidad.",
          conclusion: ""
        },
        {
          number: "3",
          title: "Diseño & Desarrollo",
          description: "Diseñamos y desarrollamos de forma limpia, cuidada y precisa.",
          detail: "Interfaces claras, experiencia pensada y código optimizado. Todo lo que construimos tiene un propósito y responde a una estrategia definida.",
          conclusion: ""
        },
        {
          number: "4",
          title: "Refinamiento",
          description: "Probamos, ajustamos y pulimos.",
          detail: "Revisamos detalles, consistencia y rendimiento. Esta etapa asegura que el resultado no solo se vea bien, sino que funcione como debe.",
          conclusion: ""
        },
        {
          number: "5",
          title: "Entrega",
          description: "Entregamos un producto listo para usarse y crecer.",
          detail: "Sin dependencia innecesaria, sin complejidad extra. Acompañamos la entrega con claridad para que sepas cómo operar y escalar lo que construimos.",
          conclusion: ""
        }
      ],
      workingStyle: {
        title: "Forma de trabajo",
        items: [
          "Proyectos limitados al mes",
          "Comunicación clara y directa",
          "Decisiones estratégicas, no improvisadas",
          "Enfoque en calidad, no en volumen"
        ]
      }
    },
    en: {
      title: "How we work",
      intro1: "At Chiiko, we don't design by instinct or build by volume.",
      intro2: "We work with intention, structure, and strategic clarity.",
      intro3: "Our process is simple, but deliberate.",
      steps: [
        {
          number: "1",
          title: "Understanding",
          description: "Before designing anything, we focus on context.",
          detail: "We analyze your brand, goals, audience, and where your business stands. Not every project needs the same solution, and not every project is right for Chiiko.",
          conclusion: "This is where we define fit."
        },
        {
          number: "2",
          title: "Direction",
          description: "We turn understanding into clear decisions.",
          detail: "We define structure, visual direction, and functionality. Every choice has a reason. We don't chase trends—we build with purpose and longevity.",
          conclusion: ""
        },
        {
          number: "3",
          title: "Design & Development",
          description: "We design and develop with precision.",
          detail: "Clean interfaces, thoughtful experiences, and optimized code. Everything we build responds to a defined strategy.",
          conclusion: ""
        },
        {
          number: "4",
          title: "Refinement",
          description: "We test, adjust, and refine.",
          detail: "Details, consistency, and performance are carefully reviewed. This stage ensures the product doesn't just look good—it works as intended.",
          conclusion: ""
        },
        {
          number: "5",
          title: "Delivery",
          description: "We deliver a product ready to be used and scaled.",
          detail: "No unnecessary dependencies. No added complexity. We provide clarity at handoff so you can confidently move forward.",
          conclusion: ""
        }
      ],
      workingStyle: {
        title: "Our approach",
        items: [
          "Limited projects per month",
          "Clear and direct communication",
          "Strategic decisions, not guesswork",
          "Focus on quality over volume"
        ]
      }
    }
  };

  const data = isSpanish ? content.es : content.en;

  return (
    <>
      <SEO
        title={isSpanish ? "Cómo Trabajamos | Chiikö" : "How We Work | Chiikö"}
        description={isSpanish ? "Nuestro proceso de trabajo: estratégico, deliberado y enfocado en calidad" : "Our work process: strategic, deliberate, and quality-focused"}
        url={isSpanish ? "/como-trabajamos" : "/how-we-work"}
      />
      <div className="relative w-full min-h-screen bg-white">
        <ResizableNavbarDemo />
        
        <div className="relative pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-inter font-bold text-black mb-12 text-center">
              {data.title}
            </h1>

            {/* Intro */}
            <div className="mb-20 space-y-4">
              <p className="text-xl md:text-2xl font-inter font-light text-black text-center">
                {data.intro1}
              </p>
              <p className="text-xl md:text-2xl font-inter font-light text-black text-center">
                {data.intro2}
              </p>
              <p className="text-xl md:text-2xl font-inter font-semibold text-black text-center mt-8">
                {data.intro3}
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-16 mb-24">
              {data.steps.map((step, index) => (
                <div key={index} className="border-l-4 border-black pl-8 py-4">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-5xl md:text-6xl font-inter font-bold text-black">
                      {step.number}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-inter font-bold text-black">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-lg md:text-xl font-inter font-semibold text-black mb-4">
                    {step.description}
                  </p>
                  <p className="text-base md:text-lg font-inter font-light text-neutral-700 leading-relaxed mb-2">
                    {step.detail}
                  </p>
                  {step.conclusion && (
                    <p className="text-base md:text-lg font-inter font-medium text-black mt-4">
                      {step.conclusion}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Working Style */}
            <div className="bg-black text-white p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-inter font-bold mb-8">
                {data.workingStyle.title}
              </h2>
              <ul className="space-y-4">
                {data.workingStyle.items.map((item, index) => (
                  <li key={index} className="text-lg md:text-xl font-inter font-light flex items-start gap-3">
                    <span className="text-2xl">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HowWeWork;
