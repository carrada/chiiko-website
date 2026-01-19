import { useTranslation } from "react-i18next";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import { Timeline } from "@/components/ui/timeline";

const SpanishTimeline = [
  {
    title: "2020",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Nace chiikö como respuesta a la falta de diseño estratégico en el mercado digital. 
          Desde el inicio, nuestra visión fue clara: crear sitios web que no solo se vean bien, 
          sino que comuniquen con claridad y conviertan visitantes en clientes.
        </p>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Consolidamos nuestro proceso de trabajo y metodología. Aprendimos que cada proyecto 
          es único y que la fase estratégica es tan importante como el diseño mismo. 
          Comenzamos a trabajar con marcas que valoran la diferencia entre tener presencia 
          digital y tener presencia con propósito.
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Expandimos nuestros servicios y refinamos nuestra propuesta. Definimos los tres pilares 
          que guían cada proyecto: estrategia, diseño y desarrollo a medida. Nos convertimos en 
          el socio creativo de estudios, despachos y marcas que buscan destacar sin gritar.
        </p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Implementamos un sistema de trabajo más enfocado. Decidimos trabajar con cupos limitados 
          para garantizar la calidad que nos define. Cada proyecto recibe el tiempo y la atención 
          que merece, sin comprometer la experiencia del cliente ni el resultado final.
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Lanzamos nuestra metodología de Artesanía Digital, pensada para marcas premium que 
          entienden el valor de una experiencia única. Comenzamos a documentar casos de estudio 
          y a compartir nuestro proceso, demostrando que el diseño bien hecho es una inversión, 
          no un gasto.
        </p>
      </div>
    ),
  },
  {
    title: "2025 - Presente",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Hoy, chiikö es un estudio creativo reconocido por su enfoque en calidad sobre cantidad. 
          Trabajamos con clientes en México y el mundo, ayudándolos a comunicar mejor, vender más 
          y crecer de forma sostenible. Seguimos creyendo que el diseño debe ser claro, funcional 
          y memorable, sin ruido innecesario.
        </p>
      </div>
    ),
  },
];

const EnglishTimeline = [
  {
    title: "2020",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          chiikö was born as a response to the lack of strategic design in the digital market. 
          From the beginning, our vision was clear: create websites that don't just look good, 
          but communicate clearly and convert visitors into clients.
        </p>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          We consolidated our work process and methodology. We learned that each project is unique 
          and that the strategic phase is as important as the design itself. We started working 
          with brands that value the difference between having a digital presence and having 
          presence with purpose.
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          We expanded our services and refined our proposal. We defined the three pillars that 
          guide each project: strategy, design, and custom development. We became the creative 
          partner for studios, firms, and brands looking to stand out without shouting.
        </p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          We implemented a more focused work system. We decided to work with limited slots to 
          guarantee the quality that defines us. Each project receives the time and attention 
          it deserves, without compromising the client experience or the final result.
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          We launched our Digital Craftsmanship methodology, designed for premium brands that 
          understand the value of a unique experience. We started documenting case studies and 
          sharing our process, demonstrating that well-done design is an investment, not an expense.
        </p>
      </div>
    ),
  },
  {
    title: "2025 - Present",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Today, chiikö is a creative studio recognized for its focus on quality over quantity. 
          We work with clients in Mexico and around the world, helping them communicate better, 
          sell more, and grow sustainably. We continue to believe that design should be clear, 
          functional, and memorable, without unnecessary noise.
        </p>
      </div>
    ),
  },
];

export default function About() {
  const { i18n } = useTranslation();
  const timelineData = i18n.language === 'es' ? SpanishTimeline : EnglishTimeline;

  return (
    <div className="min-h-screen bg-white">
      <ResizableNavbarDemo />
      <div className="py-12 tablet:py-16 md:py-24"></div>
      <Timeline data={timelineData} />
      <Footer />
    </div>
  );
}
