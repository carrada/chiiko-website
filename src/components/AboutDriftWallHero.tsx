import { useTranslation } from "react-i18next";
import DriftWall from "@/components/ui/DriftWall";

const aboutHeroImages = [
  "/fotosnosotros/Pinterest.png",
  "/fotosnosotros/photo_2026-04-18_11-17-35.jpg",
  "/fotosnosotros/photo_2026-04-18_11-17-18.jpg",
  "/fotosnosotros/photo_2026-04-18_11-17-21.jpg",
  "/fotosnosotros/photo_2026-04-18_11-17-23.jpg",
  "/fotosnosotros/photo_2026-04-18_11-17-26.jpg",
  "/fotosnosotros/photo_2026-04-18_11-17-29.jpg",
  "/fotosnosotros/photo_2026-04-18_11-17-31.jpg",
  "/fotosnosotros/photo_2026-04-18_11-17-35.jpg",
  "/fotosnosotros/photo_2026-04-18_11-17-37.jpg",
];

const driftWallItems = aboutHeroImages.map((image) => ({ image }));

export default function AboutDriftWallHero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-white">
      <div className="pointer-events-none absolute inset-0 z-10 h-[min(78vh,720px)] md:h-[680px] lg:h-[720px]">
        <div className="relative mx-auto flex h-full max-w-[1400px] items-start px-5 pt-14 sm:px-8 sm:pt-16 md:items-center md:px-12 md:pt-0 lg:px-16 xl:px-20">
          <div className="w-full max-w-[34rem] text-left sm:max-w-[38rem] md:max-w-[42rem] lg:max-w-[46rem]">
            <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-black">
              {t("about.hero.title")}
            </h1>
            <p className="mt-4 max-w-[36rem] text-[clamp(0.95rem,1.6vw,1.25rem)] font-light leading-relaxed text-black md:mt-6 lg:max-w-[40rem]">
              {t("about.hero.description")}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto h-[min(78vh,720px)] w-full max-w-[1400px] px-2 md:h-[680px] md:px-4 lg:h-[720px]">
        <DriftWall
          items={driftWallItems}
          columns={5}
          tileWidth={200}
          tileHeight={132}
          gap={18}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={120}
          speed={42}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0.6}
          dim={0.55}
          overlayColor="#060010"
        />
      </div>
    </section>
  );
}
