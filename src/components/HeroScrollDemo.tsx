import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="w-full flex justify-center items-center pb-32 md:pb-48">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-lg md:text-2xl font-semibold text-black">
              Convertimos sitios web en <br />
              <span className="block text-5xl md:text-8xl font-bold mt-2 leading-none text-black">
                Artesanias Digitales
              </span>
            </h1>
          </>
        }
      >
        <picture className="h-full w-full flex items-center justify-center p-0 md:p-8">
          <source media="(max-width: 768px)" srcSet="/huicholTabletMovil.png" />
          <img
            src="/imagen_tableta.png"
            alt="Tablet Huichol"
            className="mx-auto rounded-2xl object-cover aspect-video w-full"
          />
        </picture>
      </ContainerScroll>
    </div>
  );
}
