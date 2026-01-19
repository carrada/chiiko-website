import { useTranslation } from 'react-i18next';
import { ResizableNavbarDemo } from './ResizableNavbarDemo';
import Footer from './Footer';

const SpanishContent = () => (
  <div className="w-full bg-white">
    <div className="py-12 tablet:py-16 md:py-24"></div>
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Términos y Condiciones
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-light">
          Última actualización: Enero 2026
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            1. Aceptación de los Términos
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Al acceder y utilizar el sitio web de Chiikö, aceptas estar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar este sitio.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            2. Uso del Sitio Web
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Te comprometes a utilizar este sitio web únicamente para propósitos legales y de manera que no viole los derechos de otros ni restrinja su uso y disfrute del sitio web.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Conducta prohibida incluye:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mt-4">
            <li>Acosar o causar vergüenza, angustia o malestar a cualquier persona</li>
            <li>Ofender la decencia públicamente</li>
            <li>Interferir con el funcionamiento normal del sitio</li>
            <li>Intentar acceder a sistemas sin autorización</li>
          </ul>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            3. Propiedad Intelectual
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Todo el contenido del sitio web, incluyendo texto, gráficos, logos, imágenes y software, es propiedad de Chiikö o de sus proveedores de contenido y está protegido por leyes de derechos de autor. No se permite la reproducción, distribución o transmisión sin permiso explícito.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            4. Limitación de Responsabilidad
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar el sitio web o los servicios, incluso si hemos sido informados de la posibilidad de tales daños.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            5. Servicios y Proyectos
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Los servicios ofrecidos por Chiikö se rigen por contratos específicos. Estos Términos y Condiciones generales se aplican además de los términos particulares de cada proyecto.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            En caso de conflicto entre estos términos generales y los términos de un proyecto específico, prevalecerán los términos del proyecto.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            6. Modificaciones de los Términos
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de su publicación en el sitio web.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            7. Ley Aplicable
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Estos Términos y Condiciones se rigen por las leyes de la jurisdicción en la que Chiikö está constituida, sin considerar sus disposiciones sobre conflictos de leyes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            8. Contacto
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Si tienes preguntas sobre estos Términos y Condiciones, contáctanos en:
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mt-4">
            <a href="mailto:juridico@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
              juridico@chiiko.design
            </a>
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
          Last updated: January 2026
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            1. Acceptance of Terms
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            By accessing and using the Chiikö website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use this website.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            2. Use of the Website
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            You agree to use this website only for lawful purposes and in a way that does not violate the rights of others or restrict their use and enjoyment of the website.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Prohibited conduct includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mt-4">
            <li>Harassing or causing embarrassment, distress, or discomfort to any person</li>
            <li>Offending public decency</li>
            <li>Interfering with the normal operation of the website</li>
            <li>Attempting to gain unauthorized access to systems</li>
          </ul>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            3. Intellectual Property
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            All content on the website, including text, graphics, logos, images, and software, is owned by Chiikö or its content providers and is protected by copyright laws. Reproduction, distribution, or transmission without explicit permission is not allowed.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            4. Limitation of Liability
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the website or services, even if we have been informed of the possibility of such damages.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            5. Services and Projects
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
            The services offered by Chiikö are governed by specific contracts. These general Terms and Conditions apply in addition to the particular terms of each project.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            In case of conflict between these general terms and the terms of a specific project, the project terms shall prevail.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            6. Modifications to Terms
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö reserves the right to modify these Terms and Conditions at any time. Changes will take effect immediately upon posting to the website.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            7. Applicable Law
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            These Terms and Conditions are governed by the laws of the jurisdiction in which Chiikö is incorporated, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            8. Contact
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            If you have questions about these Terms and Conditions, please contact us at:
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mt-4">
            <a href="mailto:councel@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
              councel@chiiko.design
            </a>
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
      <ResizableNavbarDemo />
      {isSpanish ? <SpanishContent /> : <EnglishContent />}
      <Footer />
    </div>
  );
}
