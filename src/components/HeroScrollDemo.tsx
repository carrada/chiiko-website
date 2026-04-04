import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useTranslation } from "react-i18next";

export default function HeroScrollDemo() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center items-center pb-32 md:pb-48">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-lg md:text-2xl font-semibold text-black">
              {t('hero.intro')} <br />
              <span className="block text-5xl md:text-8xl font-bold mt-2 leading-none text-black">
                {t('hero.title')}
              </span>
            </h1>
          </>
        }
      >
        <picture className="h-full w-full flex items-center justify-center p-0 md:p-8">
          <source media="(max-width: 768px)" srcSet="/huichol..svg" />
          <img
            src="/huichol..svg"
            alt="Tablet Huichol"
            className="mx-auto rounded-2xl object-cover aspect-video w-full"
          />
        </picture>
      </ContainerScroll>
    </div>
  );
}
