import LegalPageLayout, { LegalPageContentWrapper } from './LegalPageLayout';

const SpanishContent = () => (
  <LegalPageContentWrapper>
    <div className="mb-12 md:mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Aviso Legal
      </h1>
      <p className="text-sm md:text-base text-gray-500 font-light">
        Última actualización: Enero 2026
      </p>
    </div>

    <div className="space-y-12 md:space-y-16">
      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Información de la empresa
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          <strong>Chiikö</strong> es un estudio digital especializado en diseño y desarrollo web. Nos comprometemos a proporcionar servicios de alta calidad a nuestros clientes.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Exención de responsabilidad
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          El contenido del sitio web de Chiikö se proporciona "tal como está". Aunque hacemos todo lo posible para mantener la información precisa y actualizada, no nos hacemos responsables por:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
          <li>Errores u omisiones en el contenido</li>
          <li>Daños o pérdidas causados por el acceso al sitio web</li>
          <li>Virus o código malicioso que pueda transmitirse</li>
          <li>Interrupciones de servicio</li>
          <li>Daños causados por terceros</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          El usuario asume toda la responsabilidad por el uso del sitio web y sus contenidos.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Vinculación externa
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          El sitio web de Chiikö puede contener enlaces a sitios web externos. No somos responsables del contenido, exactitud o prácticas de privacidad de estos sitios externos. El acceso a un sitio externo es bajo el riesgo del usuario.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Propiedad intelectual
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Todo el contenido, diseño, logotipos, y materiales del sitio web de Chiikö están protegidos por leyes de derechos de autor y otras leyes de propiedad intelectual. No puedes reproducir, copiar, distribuir, o transmitir ningún contenido sin consentimiento previo.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Limitación de responsabilidad del usuario
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Eres responsable de mantener la confidencialidad de cualquier información que proporciones a Chiikö. Te comprometes a no utilizar el sitio web de manera que infrinja leyes locales, estatales o internacionales.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Indemnización
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Te comprometes a indemnizar, defender y exonerar a Chiikö, sus propietarios, empleados y representantes de cualquier reclamación, demanda, daño, pérdida o gasto (incluyendo honorarios de abogados) que surja de tu uso del sitio web o violación de estos términos.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Cambios en el aviso legal
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Chiikö se reserva el derecho de modificar este Aviso Legal en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de su publicación en el sitio web.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Resolución de conflictos
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Cualquier disputa que surja de este Aviso Legal se resolverá de conformidad con las leyes de la jurisdicción donde Chiikö está constituida.
        </p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Contacto
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Para preguntas sobre este Aviso Legal, contáctanos en:
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mt-4">
          <a href="mailto:juridico@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
            juridico@chiiko.design
          </a>
        </p>
      </section>
    </div>
  </LegalPageContentWrapper>
);

const EnglishContent = () => (
  <LegalPageContentWrapper>
    <div className="mb-12 md:mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Legal Notice
      </h1>
      <p className="text-sm md:text-base text-gray-500 font-light">
        Last updated: January 2026
      </p>
    </div>

    <div className="space-y-12 md:space-y-16">
      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Company Information
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          <strong>Chiikö</strong> is a digital studio specialized in web design and development. We are committed to providing high-quality services to our clients.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Disclaimer
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-4">
          The content of Chiikö's website is provided "as is". Although we do our best to keep information accurate and up-to-date, we are not responsible for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4 mb-4">
          <li>Errors or omissions in content</li>
          <li>Damages or losses caused by accessing the website</li>
          <li>Viruses or malicious code that may be transmitted</li>
          <li>Service interruptions</li>
          <li>Damages caused by third parties</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Users assume all responsibility for the use of the website and its contents.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          External Links
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Chiikö's website may contain links to external websites. We are not responsible for the content, accuracy, or privacy practices of these external sites. Access to an external site is at the user's risk.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Intellectual Property
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          All content, design, logos, and materials on Chiikö's website are protected by copyright laws and other intellectual property laws. You may not reproduce, copy, distribute, or transmit any content without prior consent.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          User Responsibility Limitation
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          You are responsible for maintaining the confidentiality of any information you provide to Chiikö. You agree not to use the website in any way that violates local, state, or international laws.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Indemnification
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          You agree to indemnify, defend, and hold harmless Chiikö, its owners, employees, and representatives from any claim, lawsuit, damage, loss, or expense (including attorneys' fees) that arises from your use of the website or violation of these terms.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Changes to Legal Notice
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Chiikö reserves the right to modify this Legal Notice at any time. Changes will take effect immediately upon posting to the website.
        </p>
      </section>

      <section className="pb-12 md:pb-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Dispute Resolution
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          Any dispute arising from this Legal Notice shall be resolved in accordance with the laws of the jurisdiction where Chiikö is incorporated.
        </p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
          Contact
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
          For questions about this Legal Notice, please contact us at:
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mt-4">
          <a href="mailto:councel@chiiko.design" className="text-gray-900 underline hover:opacity-70 transition-opacity">
            councel@chiiko.design
          </a>
        </p>
      </section>
    </div>
  </LegalPageContentWrapper>
);

export default function LegalNotice() {
  return (
    <LegalPageLayout
      pageKey="legal"
      spanishContent={<SpanishContent />}
      englishContent={<EnglishContent />}
    />
  );
}
