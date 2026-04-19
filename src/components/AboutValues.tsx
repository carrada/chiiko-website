import { useTranslation } from 'react-i18next';

export default function AboutValues() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
        {/* Lo que creemos */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{t('values.whatWeBelieve')}</h2>
          <div className="space-y-4 md:space-y-6 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              {t('values.whatWeBelieve.p1')}
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              {t('values.whatWeBelieve.p2')}
            </p>
            <p className="text-base md:text-lg leading-relaxed font-semibold">
              {t('values.whatWeBelieve.p3')}
            </p>
          </div>
        </div>

        {/* Nuestra forma de trabajar */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{t('values.howWeWork')}</h2>
          <div className="space-y-4 md:space-y-6 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              {t('values.howWeWork.intro')}
            </p>
            
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">{t('values.howWeWork.step1')}</h3>
                <p className="text-base md:text-lg leading-relaxed">
                  {t('values.howWeWork.step1.desc')}
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">{t('values.howWeWork.step2')}</h3>
                <p className="text-base md:text-lg leading-relaxed">
                  {t('values.howWeWork.step2.desc')}
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">{t('values.howWeWork.step3')}</h3>
                <p className="text-base md:text-lg leading-relaxed">
                  {t('values.howWeWork.step3.desc')}
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed mt-6">
              {t('values.howWeWork.conclusion')}
            </p>
          </div>
        </div>

        {/* Artesanías digitales */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{t('values.digitalCrafts')}</h2>
          <div className="space-y-4 md:space-y-6 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              {t('values.digitalCrafts.intro')}
            </p>
            
            <ul className="space-y-2 ml-4">
              <li className="text-base md:text-lg leading-relaxed">
                <span className="font-semibold">{t('values.digitalCrafts.reason1')}</span>
              </li>
              <li className="text-base md:text-lg leading-relaxed">
                <span className="font-semibold">{t('values.digitalCrafts.reason2')}</span>
              </li>
              <li className="text-base md:text-lg leading-relaxed">
                <span className="font-semibold">{t('values.digitalCrafts.reason3')}</span>
              </li>
            </ul>

            <p className="text-base md:text-lg leading-relaxed mt-6">
              {t('values.digitalCrafts.comparison')}
            </p>

            <p className="text-base md:text-lg leading-relaxed mt-8 font-semibold">
              {t('values.mexicanOrigin')}
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              {t('values.mexicanOrigin.desc')}
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              {t('values.mexicanOrigin.conclusion')}
            </p>
          </div>
        </div>

        {/* ¿Qué hacemos (y qué no)? */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{t('values.whatWeDo')}</h2>
          <div className="space-y-4 md:space-y-6 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              {t('values.whatWeDo.p1')}
            </p>
            
            <p className="text-base md:text-lg leading-relaxed">
              {t('values.whatWeDo.p2')}
            </p>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg mt-6">
              <p className="text-base md:text-lg font-semibold mb-4">
                {t('values.notForEveryone')}
              </p>
              
              <p className="text-base md:text-lg leading-relaxed mb-4">
                {t('values.notForEveryone.p1')}
              </p>
              
              <p className="text-base md:text-lg leading-relaxed font-semibold text-primary">
                {t('values.notForEveryone.p2')}
              </p>
            </div>
          </div>
        </div>

        {/* Chiikö hoy */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{t('values.chiikotoday')}</h2>
          <div className="space-y-4 md:space-y-6 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              {t('values.chiikotoday.p1')}
            </p>
            
            <p className="text-base md:text-lg leading-relaxed font-semibold text-primary">
              {t('values.chiikotoday.p2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
