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
          Preguntas Frecuentes
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-light">
          Respuestas a las dudas más comunes sobre nuestros servicios y proceso de trabajo
        </p>
      </div>

      {/* Intro */}
      <div className="mb-12 md:mb-16">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          En esta sección respondemos las dudas más comunes sobre nuestros servicios, procesos y forma de trabajo en <strong className="font-medium">Chiikö</strong>. Si no encuentras la respuesta que buscas, puedes escribirnos directamente a{' '}
          <a href="mailto:hola@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
            hola@chiiko.design
          </a>.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-12 md:space-y-16">
        {/* FAQ Item 1 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Qué es Chiikö?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö es un estudio digital especializado en diseño y desarrollo web estratégico. Creamos sitios web pensados para diferenciar marcas, comunicar con claridad y convertir visitantes en clientes.
          </p>
        </section>

        {/* FAQ Item 2 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Qué servicios ofrecen?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            En Chiikö ofrecemos principalmente:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Diseño y desarrollo de sitios web</li>
            <li>Landing pages orientadas a conversión</li>
            <li>Rediseño y optimización de sitios existentes</li>
            <li>Diseño UI/UX</li>
            <li>Estructuración y contenido web estratégico</li>
            <li>Soporte y mejoras continuas</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Cada proyecto se adapta a las necesidades específicas de cada cliente.
          </p>
        </section>

        {/* FAQ Item 3 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Trabajan con plantillas?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            No. Todos nuestros sitios web son diseñados a medida. Utilizamos herramientas modernas, pero el diseño, estructura y experiencia son personalizados para cada marca.
          </p>
        </section>

        {/* FAQ Item 4 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Cuánto cuesta un sitio web?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            El costo depende del alcance, complejidad y objetivos del proyecto. No ofrecemos precios genéricos, ya que cada sitio se construye de forma estratégica.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Después de una breve llamada o formulario, te enviamos una propuesta clara con tiempos y costos definidos.
          </p>
        </section>

        {/* FAQ Item 5 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Cuánto tiempo tarda un proyecto?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Los tiempos varían según el tipo de proyecto:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Landing page: 2 a 3 semanas</li>
            <li>Sitio web corporativo: 3 a 6 semanas</li>
            <li>Proyectos más complejos: según alcance</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Los tiempos finales se confirman antes de iniciar el proyecto.
          </p>
        </section>

        {/* FAQ Item 6 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Qué necesitan de mí para empezar?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Principalmente:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Información sobre tu negocio o marca</li>
            <li>Objetivos del sitio web</li>
            <li>Referencias visuales (si las tienes)</li>
            <li>Contenido base (texto, imágenes, logotipo)</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Si no cuentas con todo, podemos ayudarte a definirlo.
          </p>
        </section>

        {/* FAQ Item 7 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Incluyen el contenido del sitio?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Podemos trabajar con contenido proporcionado por el cliente o ayudarte a estructurarlo y optimizarlo. La creación de copywriting completo puede cotizarse como un servicio adicional.
          </p>
        </section>

        {/* FAQ Item 8 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Ofrecen mantenimiento o soporte?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Sí. Ofrecemos planes de soporte y mantenimiento para actualizaciones, mejoras, ajustes técnicos y acompañamiento posterior al lanzamiento.
          </p>
        </section>

        {/* FAQ Item 9 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Trabajan con clientes internacionales?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Sí. Trabajamos con clientes de diferentes países y zonas horarias. Todo el proceso puede realizarse de forma remota.
          </p>
        </section>

        {/* FAQ Item 10 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿El sitio web será responsive?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Sí. Todos los sitios web que desarrollamos están optimizados para dispositivos móviles, tabletas y computadoras.
          </p>
        </section>

        {/* FAQ Item 11 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Usan SEO?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Aplicamos buenas prácticas de SEO técnico y estructural desde el desarrollo del sitio. Estrategias avanzadas de posicionamiento pueden contratarse como servicio adicional.
          </p>
        </section>

        {/* FAQ Item 12 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Qué plataformas o tecnologías utilizan?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Seleccionamos la tecnología adecuada según cada proyecto. Podemos trabajar con herramientas modernas de desarrollo, CMS y soluciones personalizadas según las necesidades del cliente.
          </p>
        </section>

        {/* FAQ Item 13 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Cómo es el proceso de trabajo?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Nuestro proceso suele incluir:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Análisis y entendimiento del proyecto</li>
            <li>Estrategia y estructura del sitio</li>
            <li>Diseño visual y experiencia de usuario</li>
            <li>Desarrollo y pruebas</li>
            <li>Lanzamiento</li>
          </ol>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            La comunicación es constante durante todo el proceso.
          </p>
        </section>

        {/* FAQ Item 14 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Puedo solicitar cambios durante el proyecto?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Sí. Cada proyecto incluye rondas de revisión previamente acordadas. Cambios adicionales fuera del alcance inicial pueden implicar ajustes en tiempos o costos.
          </p>
        </section>

        {/* FAQ Item 15 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Qué pasa después de que el sitio se publica?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Una vez lanzado el sitio, puedes contratar soporte continuo o solicitar mejoras futuras según tus necesidades.
          </p>
        </section>

        {/* FAQ Item 16 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Cómo puedo contactarlos?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Puedes escribirnos a:
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            <a href="mailto:hola@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
              hola@chiiko.design
            </a>
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mt-4">
            O utilizar el formulario de contacto disponible en el sitio web.
          </p>
        </section>

        {/* Final message */}
        <div className="pt-12 md:pt-16">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            ¿Aún tienes dudas? Escríbenos y con gusto te ayudaremos.
          </p>
        </div>
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
          Frequently Asked Questions
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-light">
          Answers to the most common questions about our services and work process
        </p>
      </div>

      {/* Intro */}
      <div className="mb-12 md:mb-16">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          In this section, we answer the most common questions about our services, process, and way of working at <strong className="font-medium">Chiikö</strong>. If you can't find the answer you're looking for, feel free to contact us at{' '}
          <a href="mailto:hello@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
            hello@chiiko.design
          </a>.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-12 md:space-y-16">
        {/* FAQ Item 1 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            What is Chiikö?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö is a digital studio specialized in strategic web design and development. We create websites designed to differentiate brands, communicate clearly, and convert visitors into clients.
          </p>
        </section>

        {/* FAQ Item 2 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            What services do you offer?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            At Chiikö, we primarily offer:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Website design and development</li>
            <li>Conversion-focused landing pages</li>
            <li>Website redesign and optimization</li>
            <li>UI/UX design</li>
            <li>Strategic website structure and content</li>
            <li>Ongoing support and improvements</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Each project is tailored to the specific needs of every client.
          </p>
        </section>

        {/* FAQ Item 3 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Do you use templates?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            No. All our websites are custom-designed. While we use modern tools and technologies, the design, structure, and experience are fully tailored to each brand.
          </p>
        </section>

        {/* FAQ Item 4 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            How much does a website cost?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            The cost depends on the scope, complexity, and objectives of the project. We do not offer generic pricing, as every website is built strategically.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            After a brief call or form submission, we provide a clear proposal with defined timelines and costs.
          </p>
        </section>

        {/* FAQ Item 5 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            How long does a project take?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Timelines vary depending on the type of project:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Landing page: 2–3 weeks</li>
            <li>Corporate website: 3–6 weeks</li>
            <li>More complex projects: based on scope</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Final timelines are confirmed before the project begins.
          </p>
        </section>

        {/* FAQ Item 6 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            What do you need from me to get started?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Mainly:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Information about your business or brand</li>
            <li>Website goals</li>
            <li>Visual references (if available)</li>
            <li>Base content (text, images, logo)</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            If you don't have everything ready, we can help you define it.
          </p>
        </section>

        {/* FAQ Item 7 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Do you include website content?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            We can work with content provided by the client or assist in structuring and optimizing it. Full copywriting services can be quoted as an additional service.
          </p>
        </section>

        {/* FAQ Item 8 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Do you offer maintenance or support?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Yes. We offer support and maintenance plans for updates, improvements, technical adjustments, and post-launch assistance.
          </p>
        </section>

        {/* FAQ Item 9 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Do you work with international clients?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Yes. We work with clients from different countries and time zones. The entire process can be handled remotely.
          </p>
        </section>

        {/* FAQ Item 10 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Will my website be responsive?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Yes. All websites we develop are optimized for mobile devices, tablets, and desktop computers.
          </p>
        </section>

        {/* FAQ Item 11 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Do you implement SEO?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            We apply technical and structural SEO best practices during development. Advanced SEO strategies can be contracted as an additional service.
          </p>
        </section>

        {/* FAQ Item 12 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            What platforms or technologies do you use?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            We select the most appropriate technology based on each project's needs. We work with modern development tools, CMS platforms, and custom solutions when required.
          </p>
        </section>

        {/* FAQ Item 13 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            What is your working process?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Our process typically includes:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Project analysis and discovery</li>
            <li>Strategy and website structure</li>
            <li>Visual design and user experience</li>
            <li>Development and testing</li>
            <li>Launch</li>
          </ol>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Communication is continuous throughout the entire process.
          </p>
        </section>

        {/* FAQ Item 14 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Can I request changes during the project?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Yes. Each project includes previously agreed revision rounds. Additional changes outside the original scope may affect timelines or costs.
          </p>
        </section>

        {/* FAQ Item 15 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            What happens after the website is launched?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            After launch, you may hire ongoing support or request future improvements as needed.
          </p>
        </section>

        {/* FAQ Item 16 */}
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            How can I contact you?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            You can reach us at:
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            <a href="mailto:hello@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
              hello@chiiko.design
            </a>
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mt-4">
            Or by using the contact form available on the website.
          </p>
        </section>

        {/* Final message */}
        <div className="pt-12 md:pt-16">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Still have questions? Reach out — we'll be happy to help.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function FAQ() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  return (
    <div className="w-full bg-white">
      <SEO
        title={SEO_PAGES.faq[isSpanish ? 'es' : 'en'].title}
        description={SEO_PAGES.faq[isSpanish ? 'es' : 'en'].description}
        keywords={SEO_PAGES.faq[isSpanish ? 'es' : 'en'].keywords}
        url="/faq"
      />
      <ResizableNavbarDemo />
      {isSpanish ? <SpanishContent /> : <EnglishContent />}
      <Footer />
    </div>
  );
}
