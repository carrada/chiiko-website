import { TypingEffect } from "@/components/ui/typing-effect";
import { useTranslation } from "react-i18next";

export default function WhoWeWorkWithDemo() {
  const { t } = useTranslation();
  const words = t('whoWeWork.items').split(',');

  return (
    <div className="w-full flex flex-col justify-center items-center px-4 py-6 md:py-12 mb-40 mt-24 md:mt-32">
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-4 items-center justify-center">
        {/* Mobile: Stacked layout */}
        <div className="flex flex-col md:hidden items-center gap-4">
          <h2 className="text-6xl font-inter font-bold text-center" style={{color: "#ce4676"}}>
            {t('whoWeWork.label').split(' ')[0]}
          </h2>
          <h2 className="text-6xl font-inter font-bold text-black text-center">
            {t('whoWeWork.label').split(' ')[1]}
          </h2>
        </div>
        
        {/* Desktop: Inline text */}
        <h2 className="hidden md:block text-7xl font-inter font-bold whitespace-nowrap">
          <span style={{color: "#ce4676"}}>{t('whoWeWork.label').split(' ')[0]}</span> <span className="text-black">{t('whoWeWork.label').split(' ')[1]}</span>
        </h2>
        
        <TypingEffect
          words={words}
          typingSpeed={100}
          deletingSpeed={50}
          pauseDuration={1500}
        />
      </div>
    </div>
  );
}
