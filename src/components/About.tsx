import { useTranslation } from "react-i18next";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SEO_PAGES } from "@/lib/seo";
import HeroParallaxDemo from "@/components/hero-parallax-demo";

const DummySpanishTimeline = [
  {
    title: "2020",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          El origen
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Creativa Carrada nace como un estudio muy pequeño, impulsado por curiosidad y necesidad.
          En esta etapa creábamos sitios web sencillos utilizando herramientas accesibles como Canva, aprendiendo desde cero sobre diseño, estructura y presencia digital para marcas emergentes.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-8 leading-relaxed">
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
        <p className="text-neutral-800 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Primeros pasos importantes
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Gracias a la constancia y al trabajo continuo, logramos colaborar con la UNAM en la creación de recursos digitales.
          Aquí desarrollamos nuestros primeros sitios web para una institución de gran relevancia en el país, marcando un antes y un después en nuestro nivel de responsabilidad, calidad y visión profesional.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <img src="/EquipoUNAM.jpeg" alt="Equipo UNAM" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
          <img src="/pizarronUNAM.jpeg" alt="Pizarrón UNAM" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Expansión y estrategia
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          A partir de esta experiencia, comenzamos a trabajar con organizaciones como Citibanamex, la Universidad Anáhuac y el Partido Acción Nacional (PAN).
          Nuestro rol evolucionó: ya no solo construíamos sitios web, sino que participábamos en estrategias de marketing, decisiones digitales y planeación estratégica.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          El proyecto dejó de ser solo diseño y se convirtió en impacto.
        </p>
        <img src="/PropuestaCitibanamex.png" alt="Propuesta Citibanamex" className="max-w-xs md:max-w-sm h-auto rounded-lg mt-6" />
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Nueva identidad, nuevos horizontes
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Cambiamos de etapa y nos renombramos como Zoi Marketing.
          Este año trabajamos con empresas más grandes como Sanborns, el CENAPyME de la UNAM y el Gobierno de México, además de comenzar a asesorar a influencers destacados en México en temas de marca, estrategia y presencia digital.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Nuestra red creció, al igual que nuestra ambición creativa.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <img src="/PortadaZoiMarketing.png" alt="Portada Zoi Marketing" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
          <img src="/ReuGob.png" alt="Reunión Gobierno" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Reconocimiento y profesionalización
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Nuestra trayectoria fue reconocida con una entrevista en el podcast "Ley de Atracción", donde compartimos nuestra historia y visión.
          Al mismo tiempo, fortalecimos relaciones con clientes y empezamos a trabajar en proyectos relacionados con nuevas áreas del software, ampliando nuestro campo de acción.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Este año tomamos una decisión clave: profesionalizarnos al máximo y evolucionar nuevamente nuestra identidad.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Así nace chiiko.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <img src="/LogoPortadaChiiko.png" alt="Logo Portada Chiiko" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
          <img src="/Entrevista.png" alt="Entrevista" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    title: "2026",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Chiiko hoy
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Hoy, en chiiko, cultivamos alianzas con grandes empresas y comunidades de la industria tecnológica.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Con Pinterest México, elevamos nuestro diseño y aprendemos de una empresa que transforma tendencias para millones de usuarios.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Con Google México, exploramos nuevas formas de entender el software y repensar cómo se construyen los productos digitales.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Colaboramos y aprendemos junto a empresas y comunidades como OpenAI, Red Hat y actores clave del ecosistema tecnológico.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Todo esto nos llevó a crear nuestra propia visión:
          las webs como artesanías digitales, construidas con intención, criterio y profundidad.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-8 leading-relaxed">
          Seguimos creciendo, aprendiendo y transformando la manera en la que se conciben y se crean los sitios web.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <img src="/Pinterest.png" alt="Pinterest" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
          <img src="/Google.png" alt="Google" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
        </div>
      </div>
    ),
  },
];

const EnglishTimeline = [
  {
    title: "2020",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          The Beginning
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Creativa Carrada was born as a very small studio, driven by curiosity and necessity.
          At this stage we created simple websites using accessible tools like Canva, learning from scratch about design, structure, and digital presence for emerging brands.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          It was the beginning of a mindset that remains active today: doing the best possible with what you have.
        </p>
        <img src="/logoCreativCarrada.png" alt="Creativa Carrada" className="max-w-xs md:max-w-sm h-auto rounded-lg mt-6" />
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          First Important Steps
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Thanks to perseverance and continuous work, we managed to collaborate with UNAM in creating digital resources.
          Here we developed our first websites for a highly relevant institution in the country, marking a turning point in our level of responsibility, quality, and professional vision.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <img src="/EquipoUNAM.jpeg" alt="Equipo UNAM" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
          <img src="/pizarronUNAM.jpeg" alt="Pizarrón UNAM" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Expansion and Strategy
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          From this experience, we began working with organizations like Citibanamex and Universidad Anáhuac.
          Our role evolved: we no longer just built websites, but participated in marketing strategies, digital decisions, and strategic planning.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          The project stopped being just design and became impact.
        </p>
        <img src="/PropuestaCitibanamex.png" alt="Propuesta Citibanamex" className="max-w-xs md:max-w-sm h-auto rounded-lg mt-6" />
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          New Identity, New Horizons
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          We changed stages and rebranded as Zoi Marketing.
          This year we worked with larger companies like Sanborns and UNAM's CENAPyME, while also beginning to advise prominent influencers in Mexico on brand, strategy, and digital presence.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Our network grew, as did our creative ambition.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <img src="/PortadaZoiMarketing.png" alt="Portada Zoi Marketing" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
          <img src="/ReuGob.png" alt="Reunión Gobierno" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Recognition and Professionalization
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Our trajectory was recognized with an interview on the "Ley de Atracción" podcast, where we shared our story and vision.
          At the same time, we strengthened client relationships and began working on projects related to new areas of software, expanding our field of action.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          This year we made a key decision: professionalize ourselves to the maximum and evolve our identity once again.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Thus chiiko was born.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <img src="/LogoPortadaChiiko.png" alt="Logo Portada Chiiko" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
          <img src="/Entrevista.png" alt="Entrevista" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    title: "2026",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-semibold mb-4 leading-relaxed">
          Chiiko Today
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          Today, at chiiko, we cultivate alliances with major companies and communities in the technology industry.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          With Pinterest Mexico, we elevate our design and learn from a company that transforms trends for millions of users.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          With Google Mexico, we explore new ways to understand software and rethink how digital products are built.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          We collaborate and learn together with companies and communities like OpenAI, Red Hat, and key players in the technology ecosystem.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-4 leading-relaxed">
          All of this led us to create our own vision:
          websites as digital craftsmanship, built with intention, criterion, and depth.
        </p>
        <p className="text-neutral-800 text-sm md:text-base font-light mb-8 leading-relaxed">
          We continue growing, learning, and transforming the way websites are conceived and created.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <img src="/Pinterest.png" alt="Pinterest" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
          <img src="/Google.png" alt="Google" className="max-w-xs md:max-w-sm h-auto rounded-lg" />
        </div>
      </div>
    ),
  },
];

export default function About() {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={SEO_PAGES.about[i18n.language === 'es' ? 'es' : 'en'].title}
        description={SEO_PAGES.about[i18n.language === 'es' ? 'es' : 'en'].description}
        url={i18n.language === 'es' ? '/nosotros' : '/about'}
        hreflangs={[
          { lang: 'es', href: 'https://www.chiiko.design/nosotros' },
          { lang: 'en', href: 'https://www.chiiko.design/about' },
          { lang: 'x-default', href: 'https://www.chiiko.design/nosotros' },
        ]}
      />
      <ResizableNavbarDemo />
      <HeroParallaxDemo />
      <Footer />
    </div>
  );
}
