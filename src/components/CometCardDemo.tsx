import { CometCard } from "@/components/ui/comet-card";

export default function CometCardDemo() {
  const projects = [
    {
      title: "Estudio Arquitectura MX (EAMX)",
      description: "Sitio moderno y elegante que refleja la precisión y calidad de EAMX, con visuales sofisticados, estructura clara y navegación intuitiva.",
      image: "/compufestLogo - Negro.svg",
      link: "https://compufest.cc",
      backgroundColor: "#00FF00"
    },
    {
      title: "Proyecto 2", 
      description: "Descripción del proyecto",
      image: "/PortadaEmicarrada.png",
      link: "https://emicarrada.com",
      backgroundColor: "#041737"
    }
  ];

  return (
    <div className="w-full flex justify-center items-center px-8 md:px-4 py-20">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 place-items-center">
          {projects.map((project, index) => (
            <CometCard key={index} className="w-full max-w-xs mx-auto">
              <div 
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ backgroundColor: project.backgroundColor }}
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={project.image.endsWith(".svg")
                    ? "w-full h-80 object-contain p-12 md:p-14"
                    : "w-full h-80 object-cover"
                  }
                />
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </div>
  );
}
