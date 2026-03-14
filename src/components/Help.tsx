import { useTranslation } from 'react-i18next';
import { ResizableNavbarDemo } from './ResizableNavbarDemo';
import Footer from './Footer';
import SEO from './SEO';
import { SEO_PAGES } from '@/lib/seo';

const SpanishContent = () => (
  <div className="w-full bg-white">
    <div className="py-12 tablet:py-16 md:py-24"></div>
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Centro de Ayuda
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-light">
          Encuentra el canal de contacto más adecuado para tu consulta
        </p>
      </div>

      {/* Intro */}
      <div className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          En <strong className="font-medium">Chiikö</strong> queremos que tu experiencia sea clara, sencilla y sin fricciones. Por eso organizamos nuestros canales de contacto según el tipo de consulta, para que tu mensaje llegue desde el inicio al equipo adecuado.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Si no estás seguro de a quién escribir, no te preocupes: revisaremos tu mensaje y lo canalizaremos internamente.
        </p>
      </div>

      {/* Main Section */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-12">
          ¿Cómo podemos ayudarte?
        </h2>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-12">
          A continuación encontrarás el canal más adecuado según tu necesidad:
        </p>

        {/* Channel 1: General Inquiries */}
        <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Dudas generales
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            Si tienes preguntas sobre nuestros servicios, procesos, tiempos, disponibilidad o simplemente quieres saber si Chiikö es una buena opción para tu proyecto, este es el mejor punto de partida.
          </p>
          <div className="mb-4">
            <p className="text-sm md:text-base text-gray-500 font-light mb-2">
              Correo de contacto:
            </p>
            <p className="text-base md:text-lg font-medium">
              <a href="mailto:hola@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
                hola@chiiko.design
              </a>
            </p>
          </div>
        </section>

        {/* Channel 2: Payments and Billing */}
        <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Pagos y facturación
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            Para cualquier asunto relacionado con pagos, facturación, comprobantes, aclaraciones administrativas o temas financieros, este canal nos permite atenderte de forma más rápida y precisa.
          </p>
          <div className="mb-4">
            <p className="text-sm md:text-base text-gray-500 font-light mb-2">
              Correo de contacto:
            </p>
            <p className="text-base md:text-lg font-medium">
              <a href="mailto:finanzas@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
                finanzas@chiiko.design
              </a>
            </p>
          </div>
        </section>

        {/* Channel 3: Contracts and Legal */}
        <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Contratos y asuntos legales
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            Si tu consulta está relacionada con contratos, acuerdos, términos y condiciones o cualquier tema legal, te recomendamos escribir directamente a este correo.
          </p>
          <div className="mb-4">
            <p className="text-sm md:text-base text-gray-500 font-light mb-2">
              Correo de contacto:
            </p>
            <p className="text-base md:text-lg font-medium">
              <a href="mailto:juridico@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
                juridico@chiiko.design
              </a>
            </p>
          </div>
        </section>

        {/* Channel 4: Technical Support */}
        <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Soporte técnico y problemas con el sitio web
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            Si detectas errores técnicos, fallos en el sitio web, problemas de funcionamiento o necesitas soporte después del lanzamiento de tu proyecto, este es el canal indicado.
          </p>
          <div className="mb-4">
            <p className="text-sm md:text-base text-gray-500 font-light mb-2">
              Correo de contacto:
            </p>
            <p className="text-base md:text-lg font-medium">
              <a href="mailto:soporte@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
                soporte@chiiko.design
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* Response Times */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Tiempos de respuesta
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Nuestro equipo revisa los mensajes de lunes a viernes en horario laboral. Hacemos todo lo posible por responder en el menor tiempo posible y brindarte una solución clara y útil.
        </p>
      </section>

      {/* Final message */}
      <div className="pt-12 md:pt-16 border-t border-gray-200">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Gracias por confiar en <strong className="font-medium">Chiikö</strong>. Estamos aquí para ayudarte y acompañarte en cada etapa de tu proyecto.
        </p>
      </div>
    </div>
  </div>
);

const EnglishContent = () => (
  <div className="w-full bg-white">
    <div className="py-12 tablet:py-16 md:py-24"></div>
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Help Center
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-light">
          Find the most appropriate contact channel for your inquiry
        </p>
      </div>

      {/* Intro */}
      <div className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          At <strong className="font-medium">Chiikö</strong>, we want your experience to be clear, simple, and frictionless. For that reason, we organize our contact channels based on the type of request, so your message reaches the right team from the start.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          If you're not sure which email to use, that's completely fine — we'll review your message and route it internally.
        </p>
      </div>

      {/* Main Section */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-12">
          How can we help you?
        </h2>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-12">
          Below you'll find the most appropriate contact option depending on your needs:
        </p>

        {/* Channel 1: General Inquiries */}
        <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            General inquiries
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            If you have questions about our services, process, timelines, availability, or you're exploring whether Chiikö is the right fit for your project, this is the best place to start.
          </p>
          <div className="mb-4">
            <p className="text-sm md:text-base text-gray-500 font-light mb-2">
              Contact email:
            </p>
            <p className="text-base md:text-lg font-medium">
              <a href="mailto:hello@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
                hello@chiiko.design
              </a>
            </p>
          </div>
        </section>

        {/* Channel 2: Payments and Billing */}
        <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Payments and billing
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            For anything related to payments, invoices, billing questions, or other administrative and financial matters, please contact us through this channel.
          </p>
          <div className="mb-4">
            <p className="text-sm md:text-base text-gray-500 font-light mb-2">
              Contact email:
            </p>
            <p className="text-base md:text-lg font-medium">
              <a href="mailto:finance@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
                finance@chiiko.design
              </a>
            </p>
          </div>
        </section>

        {/* Channel 3: Contracts and Legal */}
        <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Contracts and legal matters
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            If your inquiry involves contracts, agreements, terms and conditions, or any legal-related topic, this channel allows us to assist you more accurately.
          </p>
          <div className="mb-4">
            <p className="text-sm md:text-base text-gray-500 font-light mb-2">
              Contact email:
            </p>
            <p className="text-base md:text-lg font-medium">
              <a href="mailto:councel@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
                councel@chiiko.design
              </a>
            </p>
          </div>
        </section>

        {/* Channel 4: Technical Support */}
        <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Technical support and website issues
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            If you experience technical issues, website errors, performance problems, or need support after your project has launched, this is the appropriate channel.
          </p>
          <div className="mb-4">
            <p className="text-sm md:text-base text-gray-500 font-light mb-2">
              Contact email:
            </p>
            <p className="text-base md:text-lg font-medium">
              <a href="mailto:support@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
                support@chiiko.design
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* Response Times */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Response times
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Our team reviews messages Monday through Friday during business hours. We do our best to respond as quickly as possible and provide clear, helpful solutions.
        </p>
      </section>

      {/* Final message */}
      <div className="pt-12 md:pt-16 border-t border-gray-200">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Thank you for trusting <strong className="font-medium">Chiikö</strong>. We're here to support you at every stage of your project.
        </p>
      </div>
    </div>
  </div>
);

export default function Help() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  return (
    <div className="w-full bg-white">
      <SEO
        title={SEO_PAGES.help[isSpanish ? 'es' : 'en'].title}
        description={SEO_PAGES.help[isSpanish ? 'es' : 'en'].description}
        url={isSpanish ? '/ayuda' : '/help'}
        hreflangs={[
          { lang: 'es', href: 'https://www.chiiko.design/ayuda' },
          { lang: 'en', href: 'https://www.chiiko.design/help' },
          { lang: 'x-default', href: 'https://www.chiiko.design/ayuda' },
        ]}
      />
      <ResizableNavbarDemo />
      {isSpanish ? <SpanishContent /> : <EnglishContent />}
      <Footer />
    </div>
  );
}
