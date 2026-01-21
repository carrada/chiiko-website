import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from 'react-i18next';
import { SEO_PAGES } from "@/lib/seo";

export default function PrivacyPolicy() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  return (
    <div className="w-full bg-white">
      <SEO
        title={SEO_PAGES.privacy[isSpanish ? 'es' : 'en'].title}
        description={SEO_PAGES.privacy[isSpanish ? 'es' : 'en'].description}
        url="/privacidad"
      />
      <ResizableNavbarDemo />
      <div className="py-12 tablet:py-16 md:py-24"></div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {isSpanish ? <SpanishContent /> : <EnglishContent />}
      </div>
      <Footer />
    </div>
  );
}

function SpanishContent() {
  return (
    <>
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Política de Privacidad
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-light">
          <strong>Última actualización:</strong> 18 de enero de 2026
        </p>
      </div>

      {/* Intro */}
      <div className="mb-12 md:mb-16">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          En <strong className="font-medium">chiiko.design</strong> (en adelante, "Chiikö", "nosotros" o "nuestro"), respetamos y protegemos la privacidad de las personas que visitan nuestro sitio web y utilizan nuestros servicios. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos tu información personal.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Al acceder y utilizar este sitio web, aceptas las prácticas descritas en esta Política de Privacidad.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          1. Identidad del responsable
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          En cumplimiento de la <strong className="font-medium">Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>, se informa lo siguiente:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4">
          <li><strong className="font-medium">Nombre comercial:</strong> Chiikö</li>
          <li><strong className="font-medium">Responsable:</strong> Cristopher Carrada</li>
          <li><strong className="font-medium">Sitio web:</strong> <a href="https://chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">https://chiiko.design</a></li>
          <li><strong className="font-medium">Correo electrónico:</strong> <a href="mailto:soporte@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">soporte@chiiko.design</a></li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          2. Información que recopilamos
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
          Podemos recopilar los siguientes tipos de información:
        </p>
        
        <h3 className="text-xl md:text-2xl font-medium text-black mb-4">
          a) Información personal proporcionada por el usuario
        </h3>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-6">
          <li>Nombre y apellido</li>
          <li>Correo electrónico</li>
          <li>Número de contacto (si el usuario lo proporciona)</li>
          <li>Información relacionada con proyectos o solicitudes de servicio</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-medium text-black mb-4">
          b) Información recopilada automáticamente
        </h3>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4">
          <li>Dirección IP</li>
          <li>Tipo de navegador y dispositivo</li>
          <li>Páginas visitadas y tiempo de navegación</li>
          <li>Datos de uso mediante cookies o tecnologías similares</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          3. Finalidad del uso de los datos
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          La información recopilada se utiliza para:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
          <li>Responder consultas y solicitudes de contacto</li>
          <li>Proporcionar información sobre nuestros servicios</li>
          <li>Gestionar proyectos y comunicaciones con clientes</li>
          <li>Mejorar la experiencia de usuario y el funcionamiento del sitio web</li>
          <li>Cumplir con obligaciones legales aplicables</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Chiikö no vende, renta ni comercializa datos personales.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          4. Consentimiento y base legal para el tratamiento
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          El tratamiento de tus datos personales se realiza conforme a lo dispuesto por la LFPDPPP y su Reglamento, con base en:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
          <li>Tu <strong className="font-medium">consentimiento expreso o tácito</strong>, al proporcionar voluntariamente tus datos mediante formularios, correo electrónico o cualquier otro medio</li>
          <li>La existencia de una relación jurídica o comercial</li>
          <li>El cumplimiento de obligaciones legales</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          El titular manifiesta que los datos proporcionados son veraces y actualizados.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          5. Cookies y tecnologías similares
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          Este sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario. Las cookies permiten analizar el tráfico del sitio y personalizar el contenido.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          El usuario puede configurar su navegador para rechazar cookies o eliminarlas en cualquier momento. El rechazo de cookies puede afectar algunas funcionalidades del sitio.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          6. Transferencia de datos personales
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          Chiikö no transfiere datos personales a terceros sin el consentimiento del titular, salvo las excepciones previstas en el artículo 37 de la LFPDPPP.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          Podremos compartir datos únicamente con:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
          <li>Proveedores de servicios tecnológicos necesarios para la operación del sitio web (hosting, analítica, correo electrónico)</li>
          <li>Autoridades competentes cuando exista un requerimiento legal</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          En todos los casos, se procurará que dichos terceros mantengan medidas de seguridad y confidencialidad adecuadas.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          7. Conservación de los datos
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir con las finalidades descritas en esta política o mientras exista una relación comercial, y posteriormente durante los plazos exigidos por la ley.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          8. Seguridad de la información
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          Chiikö implementa medidas técnicas, administrativas y organizativas razonables para proteger los datos personales contra pérdida, uso indebido, acceso no autorizado o divulgación.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Sin embargo, ningún sistema es completamente seguro, por lo que no se puede garantizar una seguridad absoluta.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          9. Derechos ARCO
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          De conformidad con la LFPDPPP, el titular de los datos personales tiene derecho a ejercer en cualquier momento sus <strong className="font-medium">derechos ARCO</strong>:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
          <li><strong className="font-medium">Acceso</strong>: conocer qué datos personales tenemos y para qué los utilizamos</li>
          <li><strong className="font-medium">Rectificación</strong>: solicitar la corrección de datos inexactos o incompletos</li>
          <li><strong className="font-medium">Cancelación</strong>: solicitar la eliminación de tus datos cuando consideres que no se requieren para las finalidades señaladas</li>
          <li><strong className="font-medium">Oposición</strong>: oponerte al uso de tus datos para fines específicos</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          Asimismo, puedes <strong className="font-medium">revocar tu consentimiento</strong> para el tratamiento de tus datos personales.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Para ejercer estos derechos, deberás enviar una solicitud al correo: <a href="mailto:soporte@chiiko.design" className="text-gray-900 font-medium underline hover:opacity-70 transition-opacity">soporte@chiiko.design</a>, indicando tu nombre, el derecho que deseas ejercer y una descripción clara de tu solicitud.
        </p>
      </section>

      {/* Section 10 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          10. Enlaces a sitios externos
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Este sitio web puede contener enlaces a sitios de terceros. Chiikö no es responsable de las prácticas de privacidad ni del contenido de dichos sitios.
        </p>
      </section>

      {/* Section 11 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          11. Privacidad de menores
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Los servicios de Chiikö no están dirigidos a menores de edad. No recopilamos de forma intencional información personal de menores.
        </p>
      </section>

      {/* Section 12 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          12. Cambios en esta política
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Chiikö se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Las actualizaciones serán publicadas en esta misma página con la fecha de la última modificación.
        </p>
      </section>

      {/* Section 13 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          13. Contacto
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          Si tienes dudas sobre esta Política de Privacidad o sobre el tratamiento de tus datos personales, puedes contactarnos en:
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          <strong className="font-medium">Correo electrónico:</strong> <a href="mailto:soporte@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">soporte@chiiko.design</a>
        </p>
      </section>

      {/* Final note */}
      <div className="border-t border-gray-200 pt-8 mt-12">
        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
          Esta Política de Privacidad se rige por la <strong className="font-medium">Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>, su Reglamento y demás disposiciones aplicables en los Estados Unidos Mexicanos.
        </p>
      </div>
    </>
  );
}

function EnglishContent() {
  return (
    <>
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-light">
          <strong>Last updated:</strong> January 18, 2026
        </p>
      </div>

      {/* Intro */}
      <div className="mb-12 md:mb-16">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          At <strong className="font-medium">chiiko.design</strong> (hereinafter, "Chiikö", "we", "us", or "our"), we respect and protect the privacy of individuals who visit our website and use our services. This Privacy Policy explains how we collect, use, store, and protect your personal information.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          By accessing and using this website, you agree to the practices described in this Privacy Policy.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          1. Data Controller
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          Chiikö is responsible for the processing and protection of personal data collected through this website.
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4">
          <li><strong className="font-medium">Trade name:</strong> Chiikö</li>
          <li><strong className="font-medium">Website:</strong> <a href="https://chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">https://chiiko.design</a></li>
          <li><strong className="font-medium">Contact email:</strong> <a href="mailto:support@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">support@chiiko.design</a></li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          2. Information We Collect
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
          We may collect the following types of information:
        </p>
        
        <h3 className="text-xl md:text-2xl font-medium text-black mb-4">
          a) Personal information provided by the user
        </h3>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-6">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number (if voluntarily provided)</li>
          <li>Information related to projects or service inquiries</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-medium text-black mb-4">
          b) Automatically collected information
        </h3>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4">
          <li>IP address</li>
          <li>Browser type and device information</li>
          <li>Pages visited and browsing time</li>
          <li>Usage data through cookies or similar technologies</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          3. Purpose of Data Processing
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          The personal information collected is used to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
          <li>Respond to inquiries and contact requests</li>
          <li>Provide information about our services</li>
          <li>Manage projects and client communications</li>
          <li>Improve user experience and website performance</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Chiikö does not sell, rent, or commercially exploit personal data.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          4. Legal Basis and Consent
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          We process personal data based on:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
          <li>The user's consent when voluntarily submitting information through forms or other means</li>
          <li>The necessity to perform a contract or provide requested services</li>
          <li>Compliance with legal obligations</li>
          <li>Legitimate interests related to improving our services</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          The user declares that the information provided is accurate and up to date.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          5. Cookies and Similar Technologies
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          This website may use cookies and similar technologies to enhance the user experience, analyze traffic, and personalize content.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Users may configure their browser to reject or delete cookies at any time. Disabling cookies may affect certain website functionalities.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          6. Data Sharing with Third Parties
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          Chiikö does not share personal data with third parties without the user's consent, except when required by law.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          We may share information only with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
          <li>Technology service providers (hosting, analytics, email services)</li>
          <li>Competent authorities when legally required</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          All third parties are required to implement appropriate security and confidentiality measures.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          7. Data Retention
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Personal data will be retained only for as long as necessary to fulfill the purposes described in this Privacy Policy or while a business relationship exists, and thereafter for the periods required by applicable law.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          8. Data Security
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          Chiikö implements reasonable technical, administrative, and organizational measures to protect personal data against loss, misuse, unauthorized access, alteration, or disclosure.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          However, no system is completely secure, and absolute security cannot be guaranteed.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          9. User Rights
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          As a data subject, you have the right to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
          <li>Access your personal data</li>
          <li>Request correction of inaccurate or incomplete data</li>
          <li>Request deletion of your personal data</li>
          <li>Object to the processing of your personal data</li>
          <li>Withdraw your consent at any time</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          To exercise these rights, please send a request to <a href="mailto:support@chiiko.design" className="text-gray-900 font-medium underline hover:opacity-70 transition-opacity">support@chiiko.design</a>, including your name and a clear description of your request.
        </p>
      </section>

      {/* Section 10 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          10. Links to Third-Party Websites
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          This website may contain links to third-party websites. Chiikö is not responsible for the privacy practices or content of such websites.
        </p>
      </section>

      {/* Section 11 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          11. Children's Privacy
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Chiikö's services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.
        </p>
      </section>

      {/* Section 12 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          12. Changes to This Privacy Policy
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Chiikö reserves the right to modify this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date.
        </p>
      </section>

      {/* Section 13 */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          13. Contact
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          If you have any questions about this Privacy Policy or the processing of your personal data, you may contact us at:
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          <strong className="font-medium">Email:</strong> <a href="mailto:support@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">support@chiiko.design</a>
        </p>
      </section>

      {/* Final note */}
      <div className="border-t border-gray-200 pt-8 mt-12">
        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
          This Privacy Policy is governed by applicable data protection laws.
        </p>
      </div>
    </>
  );
}
