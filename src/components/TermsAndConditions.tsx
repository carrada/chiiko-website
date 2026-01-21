import { useTranslation } from 'react-i18next';
import { ResizableNavbarDemo } from './ResizableNavbarDemo';
import Footer from './Footer';
import SEO from './SEO';
import { SEO_PAGES } from '@/lib/seo';

const SpanishContent = () => (
  <div className="w-full bg-white">
    <div className="py-12 tablet:py-16 md:py-24"></div>
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Términos y Condiciones
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-light">
          <strong>Última actualización:</strong> 18 de enero de 2026
        </p>
      </div>

      <div className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          Bienvenido a <strong className="font-medium">chiiko.design</strong>. Al acceder y utilizar este sitio web, así como al contratar nuestros servicios, aceptas cumplir con los presentes Términos y Condiciones. Si no estás de acuerdo con ellos, te recomendamos no utilizar este sitio ni nuestros servicios.
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            1. Identidad del titular
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Este sitio web es operado por <strong className="font-medium">Chiikö</strong>, estudio digital especializado en diseño y desarrollo web.
          </p>
          <ul className="space-y-2 text-base md:text-lg text-gray-700 font-light">
            <li>Sitio web: <a href="https://chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">https://chiiko.design</a></li>
            <li>Correo de contacto general: <a href="mailto:hola@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">hola@chiiko.design</a></li>
          </ul>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            2. Uso del sitio web
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            El usuario se compromete a utilizar este sitio web de forma lícita y conforme a estos Términos y Condiciones. Queda prohibido:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Utilizar el sitio con fines ilegales o no autorizados</li>
            <li>Interferir con el funcionamiento del sitio o intentar acceder a áreas restringidas</li>
            <li>Reproducir, copiar o distribuir el contenido sin autorización previa</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö se reserva el derecho de suspender o restringir el acceso al sitio cuando detecte un uso indebido.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            3. Servicios ofrecidos
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Chiikö ofrece servicios de diseño y desarrollo web, así como servicios digitales relacionados. La información presentada en el sitio tiene carácter informativo y no constituye una oferta vinculante.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            El alcance, tiempos, entregables y costos de cada proyecto se definirán mediante una propuesta o acuerdo específico aceptado por ambas partes.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            4. Proceso de contratación
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            La contratación de servicios se formaliza una vez que:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>El cliente acepta la propuesta enviada por Chiikö</li>
            <li>Se realiza el pago inicial acordado (cuando aplique)</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö se reserva el derecho de rechazar proyectos que no se alineen con su enfoque, valores o disponibilidad.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            5. Pagos y facturación
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Las condiciones de pago se detallarán en la propuesta correspondiente. Salvo acuerdo distinto:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Los pagos no son reembolsables una vez iniciado el proyecto</li>
            <li>Los retrasos en los pagos pueden afectar los tiempos de entrega</li>
            <li>Chiikö podrá suspender el proyecto hasta regularizar la situación de pago</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Para asuntos relacionados con pagos o facturación, el cliente podrá contactar a <a href="mailto:finanzas@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">finanzas@chiiko.design</a>.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            6. Propiedad intelectual
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Salvo acuerdo en contrario:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Chiikö conserva la propiedad intelectual de bocetos, conceptos, propuestas y materiales no aprobados</li>
            <li>Una vez realizado el pago total, el cliente obtiene los derechos de uso del producto final acordado</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö se reserva el derecho de mostrar los proyectos realizados como parte de su portafolio, salvo que exista un acuerdo de confidencialidad.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            7. Contenido proporcionado por el cliente
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            El cliente garantiza que cuenta con los derechos necesarios sobre el contenido que proporciona (textos, imágenes, logotipos, marcas). Chiikö no se hace responsable por reclamaciones derivadas del uso de dicho contenido.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            8. Modificaciones y cambios
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Cada proyecto incluye rondas de revisión previamente acordadas. Solicitudes adicionales o cambios fuera del alcance original podrán implicar ajustes en tiempos y costos.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            9. Limitación de responsabilidad
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Chiikö no será responsable por:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4">
            <li>Pérdidas indirectas o daños consecuenciales</li>
            <li>Fallos derivados de servicios de terceros (hosting, dominios, plataformas externas)</li>
            <li>Resultados comerciales específicos no garantizados</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mt-4">
            El uso del sitio y de los servicios se realiza bajo responsabilidad del usuario.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            10. Soporte y mantenimiento
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            El soporte posterior al lanzamiento no está incluido salvo que se contrate un plan de mantenimiento o se acuerde expresamente por escrito.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Para soporte técnico, el cliente podrá contactar a <a href="mailto:soporte@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">soporte@chiiko.design</a>.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            11. Enlaces a terceros
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Este sitio puede contener enlaces a sitios de terceros. Chiikö no es responsable del contenido, funcionamiento o políticas de dichos sitios.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            12. Modificaciones de los términos
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en el sitio web.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            13. Legislación aplicable y jurisdicción
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Estos Términos y Condiciones se rigen por las leyes aplicables en los Estados Unidos Mexicanos. Cualquier controversia se someterá a los tribunales competentes.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            14. Contacto
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Para cualquier duda relacionada con estos Términos y Condiciones, puedes escribirnos a:
          </p>
          <p className="text-base md:text-lg">
            <a href="mailto:hola@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity font-medium">
              hola@chiiko.design
            </a>
          </p>
        </section>

        <section>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            El uso de este sitio implica la aceptación expresa de estos Términos y Condiciones.
          </p>
        </section>
      </div>
    </div>
  </div>
);

const EnglishContent = () => (
  <div className="w-full bg-white">
    <div className="py-12 tablet:py-16 md:py-24"></div>
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Terms and Conditions
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-light">
          <strong>Last updated:</strong> January 18, 2026
        </p>
      </div>

      <div className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          Welcome to <strong className="font-medium">chiiko.design</strong>. By accessing and using this website, as well as by hiring our services, you agree to be bound by these Terms and Conditions. If you do not agree with them, please refrain from using this website or our services.
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            1. Owner information
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            This website is operated by <strong className="font-medium">Chiikö</strong>, a digital studio specialized in web design and development.
          </p>
          <ul className="space-y-2 text-base md:text-lg text-gray-700 font-light">
            <li>Website: <a href="https://chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">https://chiiko.design</a></li>
            <li>General contact email: <a href="mailto:hello@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">hello@chiiko.design</a></li>
          </ul>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            2. Use of the website
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Users agree to use this website lawfully and in accordance with these Terms and Conditions. It is strictly prohibited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Use the website for illegal or unauthorized purposes</li>
            <li>Interfere with the proper functioning of the website or attempt to access restricted areas</li>
            <li>Reproduce, copy, distribute, or exploit the content without prior authorization</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö reserves the right to suspend or restrict access to the website in case of misuse.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            3. Services offered
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Chiikö provides web design, web development, and related digital services. All information on this website is for informational purposes only and does not constitute a binding offer.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            The scope, timelines, deliverables, and pricing of each project will be defined in a specific proposal or agreement accepted by both parties.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            4. Contracting process
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            A service agreement is considered valid once:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>The client accepts Chiikö's proposal</li>
            <li>The agreed initial payment is made, when applicable</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö reserves the right to decline projects that do not align with its values, approach, or availability.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            5. Payments and billing
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Payment terms will be specified in the corresponding proposal. Unless otherwise agreed:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Payments are non-refundable once the project has started</li>
            <li>Delays in payment may affect delivery timelines</li>
            <li>Chiikö may suspend work until payment obligations are fulfilled</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            For payment or billing inquiries, clients may contact <a href="mailto:finance@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">finance@chiiko.design</a>.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            6. Intellectual property
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Unless otherwise agreed:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
            <li>Chiikö retains intellectual property rights over drafts, concepts, proposals, and non-approved materials</li>
            <li>Upon full payment, the client is granted usage rights to the final agreed deliverables</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö reserves the right to display completed projects in its portfolio unless a confidentiality agreement states otherwise.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            7. Client-provided content
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            The client warrants that they own or have the necessary rights to all content provided (texts, images, logos, trademarks). Chiikö shall not be held liable for claims arising from the use of such content.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            8. Revisions and changes
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Each project includes agreed revision rounds. Requests beyond the original scope may result in additional costs or extended timelines.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            9. Limitation of liability
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Chiikö shall not be liable for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4">
            <li>Indirect, incidental, or consequential damages</li>
            <li>Failures caused by third-party services (hosting, domains, external platforms)</li>
            <li>Specific business or financial outcomes</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mt-4">
            Use of the website and services is at the user's own risk.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            10. Support and maintenance
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Post-launch support is not included unless a maintenance plan is contracted or otherwise agreed in writing.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            For technical support, clients may contact <a href="mailto:support@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">support@chiiko.design</a>.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            11. Third-party links
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            This website may include links to third-party websites. Chiikö is not responsible for their content, availability, or privacy practices.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            12. Changes to these terms
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö reserves the right to update or modify these Terms and Conditions at any time. Changes become effective once published on this website.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            13. Governing law and jurisdiction
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            These Terms and Conditions are governed by the applicable laws of the United Mexican States. Any dispute shall be submitted to the competent courts.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            14. Contact
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            For questions regarding these Terms and Conditions, please contact:
          </p>
          <p className="text-base md:text-lg">
            <a href="mailto:hello@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity font-medium">
              hello@chiiko.design
            </a>
          </p>
        </section>

        <section>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            By using this website, you expressly agree to these Terms and Conditions.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default function TermsAndConditions() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  return (
    <div className="w-full bg-white">
      <SEO
        title={SEO_PAGES.terms[isSpanish ? 'es' : 'en'].title}
        description={SEO_PAGES.terms[isSpanish ? 'es' : 'en'].description}
        url="/terminos"
      />
      <ResizableNavbarDemo />
      {isSpanish ? <SpanishContent /> : <EnglishContent />}
      <Footer />
    </div>
  );
}
