import { TypingEffect } from "@/components/ui/typing-effect";

export default function WhoWeWorkWithDemo() {
  const words = ["Estudios", "Marcas", "Proyectos", "Negocios", "Startups", "Firmas", "Despachos"];

  return (
    <div className="w-full flex flex-col justify-center items-center px-4 py-6 md:py-12 mb-40 mt-24 md:mt-32">
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-4 items-center justify-center">
        {/* Mobile: Stacked layout */}
        <div className="flex flex-col md:hidden items-center gap-4">
          <h2 className="text-6xl font-inter font-bold text-center" style={{color: "#ce4676"}}>
            Trabajamos
          </h2>
          <h2 className="text-6xl font-inter font-bold text-black text-center">
            con
          </h2>
        </div>
        
        {/* Desktop: Inline text */}
        <h2 className="hidden md:block text-7xl font-inter font-bold whitespace-nowrap">
          <span style={{color: "#ce4676"}}>Trabajamos</span> <span className="text-black">con</span>
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
