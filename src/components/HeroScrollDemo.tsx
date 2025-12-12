import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="w-full flex justify-center items-center">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Convertimos sitios web en <br />
              <span className="text-5xl md:text-[6rem] font-bold mt-1 leading-none">
                Artesanias Digitales
              </span>
            </h1>
          </>
        }
      >
        <picture className="h-full w-full flex items-center justify-center p-2 md:p-4">
          <source media="(max-width: 768px)" srcSet="/huicholTabletMovil.png" />
          <img
            src="/imagen_tableta.png"
            alt="Tablet Huichol"
            className="mx-auto rounded-xl object-cover max-h-[95%] max-w-[95%]"
          />
        </picture>
      </ContainerScroll>
    </div>
  );
}
