import { useTranslation } from 'react-i18next';
import { ResizableNavbarDemo } from './ResizableNavbarDemo';
import Footer from './Footer';
import SEO from './SEO';

const SpanishContent = () => (
  <div className="w-full bg-white">
    <div className="py-12 tablet:py-16 md:py-24"></div>
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Política de Cookies
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-light">
          Última actualización: Enero 2026
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            ¿Qué son las cookies?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para recordar información sobre tu visita y mejorar tu experiencia de navegación.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Tipos de cookies que utilizamos
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            En el sitio web de Chiikö utilizamos los siguientes tipos de cookies:
          </p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
            Cookies esenciales
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            Son necesarias para el funcionamiento correcto del sitio web. Sin estas cookies, algunas funcionalidades no funcionarían adecuadamente.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
            Cookies de rendimiento
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            Nos ayudan a entender cómo los visitantes utilizan el sitio web, permitiéndonos mejorar el rendimiento y la experiencia de usuario.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
            Cookies de preferencia
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Recuerdan tus preferencias, como el idioma elegido, para personalizar tu experiencia en futuras visitas.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Información recopilada
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Las cookies nos permiten recopilar información sobre tu dispositivo, navegador, y comportamiento de navegación. Utilizamos esta información para:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mt-4">
            <li>Mejorar el funcionamiento del sitio web</li>
            <li>Analizar tendencias de uso</li>
            <li>Personalizar tu experiencia</li>
            <li>Detectar y prevenir fraudes</li>
            <li>Cumplir con requisitos legales</li>
          </ul>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Control de cookies
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Puedes controlar las cookies a través de la configuración de tu navegador. Aunque la mayoría de navegadores aceptan cookies por defecto, puedes ajustar estas configuraciones para rechazarlas o recibir notificaciones cuando se instalen.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Cookies de terceros
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Nuestro sitio web puede contener cookies de terceros, como las de Google Analytics. Estas cookies están sujetas a las políticas de privacidad de esas empresas. Te recomendamos revisar sus políticas de cookies directamente.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Cambios en esta política
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö se reserva el derecho de actualizar esta Política de Cookies en cualquier momento. Te recomendamos revisar esta página periódicamente para estar informado de cualquier cambio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Contacto
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Si tienes preguntas sobre nuestra Política de Cookies, contáctanos en:
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mt-4">
            <a href="mailto:hola@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
              hola@chiiko.design
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
          Cookie Policy
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-light">
          Last updated: January 2026
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            What are cookies?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Cookies are small text files that are stored on your device when you visit a website. They are used to remember information about your visit and improve your browsing experience.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Types of cookies we use
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            On the Chiikö website, we use the following types of cookies:
          </p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
            Essential cookies
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            These are necessary for the website to function properly. Without these cookies, some features would not work correctly.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
            Performance cookies
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-6">
            These help us understand how visitors use the website, allowing us to improve performance and user experience.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
            Preference cookies
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            These remember your preferences, such as your chosen language, to personalize your experience on future visits.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Information collected
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Cookies allow us to collect information about your device, browser, and browsing behavior. We use this information to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mt-4">
            <li>Improve website functionality</li>
            <li>Analyze usage trends</li>
            <li>Personalize your experience</li>
            <li>Detect and prevent fraud</li>
            <li>Comply with legal requirements</li>
          </ul>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Cookie control
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            You can control cookies through your browser settings. Although most browsers accept cookies by default, you can adjust these settings to reject them or receive notifications when they are installed.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Third-party cookies
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Our website may contain third-party cookies, such as those from Google Analytics. These cookies are subject to the privacy policies of those companies. We recommend reviewing their cookie policies directly.
          </p>
        </section>

        <section className="pb-12 md:pb-16 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Changes to this policy
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            Chiikö reserves the right to update this Cookie Policy at any time. We recommend reviewing this page periodically to stay informed of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Contact
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            If you have questions about our Cookie Policy, please contact us at:
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mt-4">
            <a href="mailto:hello@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
              hello@chiiko.design
            </a>
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default function CookiePolicy() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  return (
    <div className="w-full bg-white">
      <SEO
        title="Cookie Policy | Chiiko"
        description={isSpanish ? "Política de cookies de Chiiko. Conoce cómo usamos cookies." : "Chiiko's cookie policy. Learn how we use cookies."}
        keywords={[isSpanish ? "cookies" : "cookies"]}
        url="/cookies"
      />
      <ResizableNavbarDemo />
      {isSpanish ? <SpanishContent /> : <EnglishContent />}
      <Footer />
    </div>
  );
}
