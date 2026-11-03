import { useTranslation } from "react-i18next";
import TechText from "@/components/ui/TechText";
import HeroSkullCanvas from "@/components/HeroSkullCanvas";

export default function HeroScrollDemo() {
  const { t } = useTranslation();
  const title = t("hero.title");

  return (
    <div className="relative flex w-full flex-col bg-white max-sm:h-[calc(100dvh-4rem)] max-sm:min-h-[calc(100dvh-4rem)] max-sm:overflow-hidden max-sm:justify-end max-sm:pb-3 max-sm:pt-10 sm:max-lg:min-h-0 lg:min-h-screen lg:h-dvh lg:overflow-visible lg:justify-start lg:pb-0 lg:pt-0">
      <div className="relative z-10 flex shrink-0 justify-center px-4 pt-4 max-sm:translate-y-10 max-sm:pt-0 md:pt-8 sm:translate-y-0">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h1 className="font-inter text-sm tablet:text-xl md:text-2xl font-semibold text-black leading-[1.35] md:leading-normal">
          <span className="block pt-1 max-sm:pt-4 md:pt-2">{t("hero.intro")}</span>
          <span className="relative -mt-1 block h-[4.25rem] w-full leading-[0.9] text-black tablet:-mt-1.5 tablet:h-[7rem] md:-mt-2 md:h-[14rem] lg:-mt-5 lg:-translate-y-4">
            <TechText
              text={title}
              fontWeight={700}
              fontSize={320}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              intro="none"
              introDuration={2}
              clickKick
              guides={false}
              selection
              labels={false}
              draggable={false}
              color="#000000"
              accentColor="#000000"
              className="leading-none"
            />
          </span>
        </h1>
      </div>
      </div>
      <div className="relative w-full max-sm:mt-1 max-sm:min-h-0 max-sm:flex-1 max-sm:shrink sm:min-h-0 sm:flex-1 sm:min-h-[48vh] md:min-h-[52vh] lg:pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-[min(31%,14.25rem)] lg:mt-0 lg:min-h-0 lg:flex-none lg:pb-2">
        <div className="h-full w-full lg:pointer-events-auto">
          <HeroSkullCanvas />
        </div>
      </div>
    </div>
  );
}
