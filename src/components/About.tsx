import { useTranslation } from "react-i18next";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import { Timeline } from "@/components/ui/timeline";

const SpanishTimeline = [
  {
    title: "2020",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          El origen
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Creativa Carrada nace como un estudio muy pequeño, impulsado por curiosidad y necesidad.
          En esta etapa creábamos sitios web sencillos utilizando herramientas accesibles como Canva, aprendiendo desde cero sobre diseño, estructura y presencia digital para marcas emergentes.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Fue el inicio de una mentalidad que sigue vigente: hacer lo mejor posible con lo que se tiene.
        </p>
        <img src="/logoCreativCarrada.png" alt="Creativa Carrada" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Primeros pasos importantes
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Gracias a la constancia y al trabajo continuo, logramos colaborar con la UNAM en la creación de recursos digitales.
          Aquí desarrollamos nuestros primeros sitios web para una institución de gran relevancia en el país, marcando un antes y un después en nuestro nivel de responsabilidad, calidad y visión profesional.
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Expansión y estrategia
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          A partir de esta experiencia, comenzamos a trabajar con organizaciones como Citibanamex, la Universidad Anáhuac y el Partido Acción Nacional (PAN).
          Nuestro rol evolucionó: ya no solo construíamos sitios web, sino que participábamos en estrategias de marketing, decisiones digitales y planeación estratégica.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          El proyecto dejó de ser solo diseño y se convirtió en impacto.
        </p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Nueva identidad, nuevos horizontes
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Cambiamos de etapa y nos renombramos como Zoi Marketing.
          Este año trabajamos con empresas más grandes como Sanborns y el CENAPyME de la UNAM, además de comenzar a asesorar a influencers destacados en México en temas de marca, estrategia y presencia digital.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Nuestra red creció, al igual que nuestra ambición creativa.
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Reconocimiento y profesionalización
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Nuestra trayectoria fue reconocida con una entrevista en el podcast "Ley de Atracción", donde compartimos nuestra historia y visión.
          Al mismo tiempo, fortalecimos relaciones con clientes y empezamos a trabajar en proyectos relacionados con nuevas áreas del software, ampliando nuestro campo de acción.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Este año tomamos una decisión clave: profesionalizarnos al máximo y evolucionar nuevamente nuestra identidad.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Así nace chiiko.
        </p>
      </div>
    ),
  },
  {
    title: "2026",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Chiiko hoy
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Hoy, en chiiko, cultivamos alianzas con grandes empresas y comunidades de la industria tecnológica.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Con Pinterest México, elevamos nuestro diseño y aprendemos de una empresa que transforma tendencias para millones de usuarios.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Con Google México, exploramos nuevas formas de entender el software y repensar cómo se construyen los productos digitales.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Colaboramos y aprendemos junto a empresas y comunidades como OpenAI, Red Hat y actores clave del ecosistema tecnológico.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Todo esto nos llevó a crear nuestra propia visión:
          las webs como artesanías digitales, construidas con intención, criterio y profundidad.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Seguimos creciendo, aprendiendo y transformando la manera en la que se conciben y se crean los sitios web.
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
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          The Beginning
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Creativa Carrada was born as a very small studio, driven by curiosity and necessity.
          At this stage we created simple websites using accessible tools like Canva, learning from scratch about design, structure, and digital presence for emerging brands.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          It was the beginning of a mindset that remains active today: doing the best possible with what you have.
        </p>
        <img src="/logoCreativCarrada.png" alt="Creativa Carrada" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          First Important Steps
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Thanks to perseverance and continuous work, we managed to collaborate with UNAM in creating digital resources.
          Here we developed our first websites for a highly relevant institution in the country, marking a turning point in our level of responsibility, quality, and professional vision.
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Expansion and Strategy
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          From this experience, we began working with organizations like Citibanamex and Universidad Anáhuac.
          Our role evolved: we no longer just built websites, but participated in marketing strategies, digital decisions, and strategic planning.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          The project stopped being just design and became impact.
        </p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          New Identity, New Horizons
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          We changed stages and rebranded as Zoi Marketing.
          This year we worked with larger companies like Sanborns and UNAM's CENAPyME, while also beginning to advise prominent influencers in Mexico on brand, strategy, and digital presence.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Our network grew, as did our creative ambition.
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Recognition and Professionalization
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Our trajectory was recognized with an interview on the "Ley de Atracción" podcast, where we shared our story and vision.
          At the same time, we strengthened client relationships and began working on projects related to new areas of software, expanding our field of action.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          This year we made a key decision: professionalize ourselves to the maximum and evolve our identity once again.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          Thus chiiko was born.
        </p>
      </div>
    ),
  },
  {
    title: "2026",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Chiiko Today
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          Today, at chiiko, we cultivate alliances with major companies and communities in the technology industry.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          With Pinterest Mexico, we elevate our design and learn from a company that transforms trends for millions of users.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          With Google Mexico, we explore new ways to understand software and rethink how digital products are built.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          We collaborate and learn together with companies and communities like OpenAI, Red Hat, and key players in the technology ecosystem.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-4 leading-relaxed">
          All of this led us to create our own vision:
          websites as digital craftsmanship, built with intention, criterion, and depth.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-light mb-8 leading-relaxed">
          We continue growing, learning, and transforming the way websites are conceived and created.
        </p>
      </div>
    ),
  },
];

export default function About() {
  const { i18n } = useTranslation();
  const timelineData = i18n.language === 'es' ? SpanishTimeline : EnglishTimeline;

  const title = i18n.language === 'es' ? 'Nuestra historia' : 'Our story';
  const description = i18n.language === 'es' 
    ? 'Desde nuestros humildes comienzos hasta hoy, hemos crecido cultivando alianzas, aprendiendo constantemente y transformando la forma en que se conciben los sitios web. Cada capítulo de nuestra trayectoria refleja nuestra compromiso con la excelencia y la innovación.'
    : 'From our humble beginnings to today, we have grown by cultivating alliances, constantly learning, and transforming the way websites are conceived. Each chapter of our journey reflects our commitment to excellence and innovation.';

  const beliefs = i18n.language === 'es' ? {
    title: 'Lo que creemos',
    intro: 'En chiiko creemos que un sitio web no es un archivo más ni un simple canal digital.\nEs un objeto estratégico, una extensión viva de una marca y una pieza clave en cómo una empresa se presenta, se percibe y crece.',
    p1: 'No diseñamos para seguir tendencias pasajeras.\nDiseñamos para construir criterio, claridad y coherencia a largo plazo.',
    p2: 'Cada decisión —desde la arquitectura hasta el último detalle visual— tiene una razón.',
  } : {
    title: 'What we believe',
    intro: 'At chiiko we believe that a website is not just another file or a simple digital channel.\nIt is a strategic object, a living extension of a brand and a key piece in how a company presents itself, is perceived, and grows.',
    p1: 'We don\'t design to follow fleeting trends.\nWe design to build long-term judgment, clarity, and coherence.',
    p2: 'Every decision—from architecture to the last visual detail—has a reason.',
  };

  const process = i18n.language === 'es' ? {
    title: 'Nuestra forma de trabajar',
    intro: 'Trabajamos con un proceso claro, colaborativo y profundamente intencional.',
    p1: 'Primero entendemos el contexto:\nla marca, el negocio, sus límites y sus objetivos reales.',
    p2: 'Después diseñamos la estructura antes que la forma.\nPensamos el contenido, la jerarquía, los flujos y la experiencia.',
    p3: 'Finalmente, desarrollamos con precisión técnica, cuidando rendimiento, accesibilidad y escalabilidad.',
    p4: 'No creemos en procesos inflados ni en entregables innecesarios.\nCreemos en hacer lo justo, pero hacerlo bien.',
  } : {
    title: 'Our way of working',
    intro: 'We work with a clear, collaborative, and deeply intentional process.',
    p1: 'First we understand the context:\nthe brand, the business, its limits, and its real objectives.',
    p2: 'Then we design the structure before the form.\nWe think about content, hierarchy, flows, and experience.',
    p3: 'Finally, we develop with technical precision, caring for performance, accessibility, and scalability.',
    p4: 'We don\'t believe in inflated processes or unnecessary deliverables.\nWe believe in doing what\'s right, but doing it well.',
  };

  const craftsmanship = i18n.language === 'es' ? {
    title: 'Artesanías digitales',
    intro: 'En chiiko llamamos a nuestro trabajo artesanías digitales.',
    p1: 'Porque no usamos plantillas.\nPorque no producimos en masa.\nPorque cada sitio se construye a medida, con tiempo, criterio y atención al detalle.',
    p2: 'Así como una artesanía tiene intención detrás de cada corte y cada material,\nnuestros sitios tienen intención detrás de cada decisión de diseño y desarrollo.',
  } : {
    title: 'Digital craftsmanship',
    intro: 'At chiiko we call our work digital craftsmanship.',
    p1: 'Because we don\'t use templates.\nBecause we don\'t mass-produce.\nBecause each website is built to measure, with time, criterion, and attention to detail.',
    p2: 'Just as a craft has intention behind every cut and every material,\nour sites have intention behind every design and development decision.',
  };

  const whatWeDo = i18n.language === 'es' ? {
    title: '¿Qué hacemos (y qué no)?',
    intro: 'Diseñamos y desarrollamos sitios web estratégicos para marcas que valoran el diseño, la claridad y el impacto real.',
    p1: 'Trabajamos con empresas, estudios, instituciones y proyectos que entienden que su presencia digital es una inversión, no un gasto.',
    p2: 'No somos para todos.\nY eso está bien.',
    p3: 'Si buscas rapidez sin criterio o volumen sin profundidad, probablemente no seamos el estudio adecuado.\nSi buscas construir algo sólido, pensado y duradero, sí.',
  } : {
    title: 'What we do (and what we don\'t)',
    intro: 'We design and develop strategic websites for brands that value design, clarity, and real impact.',
    p1: 'We work with companies, studios, institutions, and projects that understand their digital presence is an investment, not an expense.',
    p2: 'We\'re not for everyone.\nAnd that\'s okay.',
    p3: 'If you\'re looking for speed without criterion or volume without depth, we\'re probably not the right studio.\nIf you\'re looking to build something solid, thoughtful, and lasting, we are.',
  };

  const chiikotoday = i18n.language === 'es' ? {
    title: 'Chiiko hoy',
    intro: 'Chiiko es un estudio creativo y tecnológico en constante evolución.\nAprendemos de la industria, colaboramos con grandes actores del ecosistema digital y nos mantenemos cerca de lo más nuevo, sin perder nuestro criterio.',
    p1: 'Seguimos creciendo con una idea clara:\nelevar la manera en que se conciben y se construyen los sitios web.',
  } : {
    title: 'Chiiko today',
    intro: 'Chiiko is a creative and technological studio in constant evolution.\nWe learn from the industry, collaborate with major players in the digital ecosystem, and stay close to the latest developments without losing our criterion.',
    p1: 'We continue growing with a clear idea:\nelevate the way websites are conceived and built.',
  };

  return (
    <div className="min-h-screen bg-white">
      <ResizableNavbarDemo />
      <div className="py-12 tablet:py-16 md:py-24"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          {title}
        </h1>
        <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed">
          {description}
        </p>
      </div>

      <Timeline data={timelineData} />

      {/* Lo que creemos / What we believe */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">{beliefs.title}</h2>
        <div className="space-y-4">
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed whitespace-pre-line">{beliefs.intro}</p>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed whitespace-pre-line">{beliefs.p1}</p>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">{beliefs.p2}</p>
        </div>
      </div>

      {/* Nuestra forma de trabajar / Our way of working */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">{process.title}</h2>
        <div className="space-y-4">
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">{process.intro}</p>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed whitespace-pre-line">{process.p1}</p>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed whitespace-pre-line">{process.p2}</p>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">{process.p3}</p>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed whitespace-pre-line">{process.p4}</p>
        </div>
      </div>

      {/* Artesanías digitales / Digital craftsmanship */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">{craftsmanship.title}</h2>
        <div className="space-y-4">
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">{craftsmanship.intro}</p>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed whitespace-pre-line">{craftsmanship.p1}</p>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed whitespace-pre-line">{craftsmanship.p2}</p>
        </div>
      </div>

      {/* Qué hacemos / What we do */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">{whatWeDo.title}</h2>
        <div className="space-y-4">
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">{whatWeDo.intro}</p>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">{whatWeDo.p1}</p>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed whitespace-pre-line">{whatWeDo.p2}</p>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed whitespace-pre-line">{whatWeDo.p3}</p>
        </div>
      </div>

      {/* Chiiko hoy / Chiiko today */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">{chiikotoday.title}</h2>
        <div className="space-y-4">
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed whitespace-pre-line">{chiikotoday.intro}</p>
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed whitespace-pre-line">{chiikotoday.p1}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
