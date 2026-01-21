import { useTranslation } from "react-i18next";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SEO_PAGES } from "@/lib/seo";

const SpanishContent = () => (
  <>
    {/* Header Section */}
    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Elige cómo quieres crecer
      </h1>
      <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
        Sitios web pensados para comunicar mejor, convertir y escalar. Cada plan está diseñado para un objetivo distinto.
      </p>
    </div>

    {/* Plans Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
      
      {/* Plan 1: Sitio Esencial */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col h-full hover:border-gray-300 transition-colors">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-black mb-3">
            Sitio Esencial
          </h3>
          <p className="text-sm md:text-base text-gray-600 font-light">
            Presencia sólida. Sin ruido.
          </p>
        </div>

        <p className="text-base text-gray-700 font-light mb-6 leading-relaxed">
          Un sitio web bien diseñado para marcas que entienden que menos es más y necesitan verse profesionales desde el día uno.
        </p>

        <div className="mb-6 flex-grow">
          <ul className="space-y-3">
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Sitio web informativo (3–5 secciones)
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Diseño UI limpio y personalizado
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Desarrollo rápido y optimizado
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Diseño responsive + accesibilidad básica
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              SEO técnico base
            </li>
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-light mb-1">Inversión desde</p>
          <p className="text-2xl font-semibold text-black mb-6">
            $25,000 – $35,000 <span className="text-base font-normal text-gray-600">MXN</span>
          </p>
          <a 
            href="#contacto" 
            className="block w-full text-center px-6 py-3 bg-white border border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
          >
            Ver si es para mí
          </a>
        </div>
      </div>

      {/* Plan 2: Sitio Estratégico (DESTACADO) */}
      <div className="bg-white border-2 border-black rounded-2xl p-8 lg:p-10 flex flex-col h-full lg:scale-105 relative shadow-lg">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-black text-white px-4 py-1 text-sm font-medium rounded-full">
            Recomendado
          </span>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3">
            Sitio Estratégico
          </h3>
          <p className="text-sm md:text-base text-gray-600 font-light">
            El corazón de chiikö. Donde el diseño empieza a vender.
          </p>
        </div>

        <p className="text-base text-gray-700 font-light mb-6 leading-relaxed">
          No es solo un sitio web. Es una herramienta pensada para comunicar mejor, convertir y crecer.
        </p>

        <div className="mb-6 flex-grow">
          <ul className="space-y-3">
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Fase estratégica previa (marca, objetivos y usuario)
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Diseño UX/UI completo y 100% personalizado
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Desarrollo a medida (sin themes)
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Animaciones sutiles con intención
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              SEO técnico + performance
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Acompañamiento post-entrega
            </li>
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-light mb-1">Inversión desde</p>
          <p className="text-2xl md:text-3xl font-semibold text-black mb-6">
            $40,000 – $60,000 <span className="text-base font-normal text-gray-600">MXN</span>
          </p>
          <a 
            href="#contacto" 
            className="block w-full text-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Agendar llamada estratégica
          </a>
        </div>
      </div>

      {/* Plan 3: Artesanía Digital */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col h-full hover:border-gray-300 transition-colors">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-black mb-3">
            Artesanía Digital
          </h3>
          <p className="text-sm md:text-base text-gray-600 font-light">
            Diseño hecho con intención. Pensado para durar.
          </p>
        </div>

        <p className="text-base text-gray-700 font-light mb-6 leading-relaxed">
          Para marcas que no quieren parecerse a nadie y entienden el valor de una experiencia digital bien construida.
        </p>

        <div className="mb-6 flex-grow">
          <ul className="space-y-3">
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Todo lo del Sitio Estratégico
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Dirección creativa completa
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Experiencia visual diseñada a medida
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Detalles artesanales: microinteracciones
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Casos de estudio documentados
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Arquitectura pensada para escalar
            </li>
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-light mb-1">Inversión desde</p>
          <p className="text-2xl font-semibold text-black mb-6">
            $70,000 – $120,000+ <span className="text-base font-normal text-gray-600">MXN</span>
          </p>
          <a 
            href="#contacto" 
            className="block w-full text-center px-6 py-3 bg-white border border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
          >
            Hablemos del proyecto
          </a>
        </div>
      </div>
    </div>

    {/* Closing Statement */}
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
        Trabajamos con cupos limitados para garantizar calidad en cada proyecto. Seleccionamos cuidadosamente con quién colaboramos porque creemos en crear relaciones duraderas, no solo entregar sitios.
      </p>
    </div>
  </>
);

const EnglishContent = () => (
  <>
    {/* Header Section */}
    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Choose how you want to grow
      </h1>
      <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
        Websites designed to communicate better, convert, and scale. Each plan is built for a different goal.
      </p>
    </div>

    {/* Plans Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
      
      {/* Plan 1: Essential Site */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col h-full hover:border-gray-300 transition-colors">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-black mb-3">
            Essential Site
          </h3>
          <p className="text-sm md:text-base text-gray-600 font-light">
            Solid presence. No noise.
          </p>
        </div>

        <p className="text-base text-gray-700 font-light mb-6 leading-relaxed">
          A well-designed website for brands that understand less is more and need to look professional from day one.
        </p>

        <div className="mb-6 flex-grow">
          <ul className="space-y-3">
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Informational website (3–5 sections)
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Clean, custom UI design
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Fast, optimized development
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Responsive design + basic accessibility
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Technical SEO foundation
            </li>
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-light mb-1">Starting at</p>
          <p className="text-2xl font-semibold text-black mb-6">
            $1,400 – $1,950 <span className="text-base font-normal text-gray-600">USD</span>
          </p>
          <a 
            href="#contacto" 
            className="block w-full text-center px-6 py-3 bg-white border border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
          >
            See if it's right for me
          </a>
        </div>
      </div>

      {/* Plan 2: Strategic Site (FEATURED) */}
      <div className="bg-white border-2 border-black rounded-2xl p-8 lg:p-10 flex flex-col h-full lg:scale-105 relative shadow-lg">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-black text-white px-4 py-1 text-sm font-medium rounded-full">
            Recommended
          </span>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3">
            Strategic Site
          </h3>
          <p className="text-sm md:text-base text-gray-600 font-light">
            The heart of chiikö. Where design starts to sell.
          </p>
        </div>

        <p className="text-base text-gray-700 font-light mb-6 leading-relaxed">
          Not just a website. It's a tool designed to communicate better, convert, and grow.
        </p>

        <div className="mb-6 flex-grow">
          <ul className="space-y-3">
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Strategic phase (brand, goals, and user)
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Complete, 100% custom UX/UI design
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Custom development (no themes)
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Intentional subtle animations
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Technical SEO + performance
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Post-launch support
            </li>
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-light mb-1">Starting at</p>
          <p className="text-2xl md:text-3xl font-semibold text-black mb-6">
            $2,200 – $3,350 <span className="text-base font-normal text-gray-600">USD</span>
          </p>
          <a 
            href="#contacto" 
            className="block w-full text-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Schedule strategic call
          </a>
        </div>
      </div>

      {/* Plan 3: Digital Craftsmanship */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col h-full hover:border-gray-300 transition-colors">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-black mb-3">
            Digital Craftsmanship
          </h3>
          <p className="text-sm md:text-base text-gray-600 font-light">
            Design made with intention. Built to last.
          </p>
        </div>

        <p className="text-base text-gray-700 font-light mb-6 leading-relaxed">
          For brands that don't want to look like anyone else and understand the value of a well-crafted digital experience.
        </p>

        <div className="mb-6 flex-grow">
          <ul className="space-y-3">
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Everything from Strategic Site
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Complete creative direction
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Custom-designed visual experience
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Artisanal details: micro-interactions
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Documented case studies
            </li>
            <li className="text-sm md:text-base text-gray-700 font-light flex items-start">
              <span className="mr-2 text-black">•</span>
              Architecture built to scale
            </li>
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-light mb-1">Starting at</p>
          <p className="text-2xl font-semibold text-black mb-6">
            $3,900 – $6,700+ <span className="text-base font-normal text-gray-600">USD</span>
          </p>
          <a 
            href="#contacto" 
            className="block w-full text-center px-6 py-3 bg-white border border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
          >
            Let's talk about your project
          </a>
        </div>
      </div>
    </div>

    {/* Closing Statement */}
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
        We work with limited slots to guarantee quality in every project. We carefully select who we collaborate with because we believe in building lasting relationships, not just delivering websites.
      </p>
    </div>
  </>
);

export default function Plans() {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={SEO_PAGES.plans[i18n.language === 'es' ? 'es' : 'en'].title}
        description={SEO_PAGES.plans[i18n.language === 'es' ? 'es' : 'en'].description}
        keywords={SEO_PAGES.plans[i18n.language === 'es' ? 'es' : 'en'].keywords}
        url="/planes"
      />
      <ResizableNavbarDemo />
      <div className="py-12 tablet:py-16 md:py-24"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {i18n.language === 'es' ? <SpanishContent /> : <EnglishContent />}
      </div>
      <Footer />
    </div>
  );
}
