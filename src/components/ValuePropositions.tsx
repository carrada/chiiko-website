import { useTranslation } from "react-i18next";

export default function ValuePropositions() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center py-16 tablet:py-32 md:py-48 px-4">
      <div className="text-center max-w-7xl space-y-16 tablet:space-y-32 md:space-y-48">
        <p className="text-sm tablet:text-xl md:text-2xl font-semibold text-black leading-[1.35] md:leading-normal">
          {t('hero.value1')} <span className="block text-7xl tablet:text-9xl md:text-[16rem] font-bold leading-[0.9] mt-3 md:mt-3" style={{color: "#ce4676"}}>
            {t('hero.value1.highlight')}
          </span>
        </p>
        <p className="text-sm tablet:text-xl md:text-2xl font-semibold text-black leading-[1.35] md:leading-normal">
          {t('hero.value2')} <span className="block text-7xl tablet:text-9xl md:text-[16rem] font-bold leading-[0.9] mt-3 md:mt-3" style={{color: "#ce4676"}}>
            {t('hero.value2.highlight')}
          </span>
        </p>
        <p className="text-sm tablet:text-xl md:text-2xl font-semibold text-black leading-[1.35] md:leading-normal">
          {t('hero.value3')} <span className="block text-7xl tablet:text-9xl md:text-[16rem] font-bold leading-[0.9] mt-3 md:mt-3" style={{color: "#ce4676"}}>
            {t('hero.value3.highlight')}
          </span>
        </p>
        <p className="text-sm tablet:text-xl md:text-2xl font-semibold text-black leading-[1.35] md:leading-normal">
          {t('hero.value4')} <span className="block text-7xl tablet:text-9xl md:text-[16rem] font-bold leading-[0.9] mt-3 md:mt-3" style={{color: "#ce4676"}}>
            {t('hero.value4.highlight')}
          </span>
        </p>
      </div>
    </div>
  );
}
