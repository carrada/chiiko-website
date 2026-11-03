import { CometCard } from "@/components/ui/comet-card";

export default function CometCardDemo() {
  const projects = [
    {
      title: "Estudio Arquitectura MX (EAMX)",
      description:
        "Sitio moderno y elegante que refleja la precisión y calidad de EAMX, con visuales sofisticados, estructura clara y navegación intuitiva.",
      image: "/eamxlogo.svg",
      link: "https://eamx-website.vercel.app",
      backgroundColor: "#5e6e60",
    },
    {
      title: "Compufest",
      description:
        "Plataforma de programación y competencias de tecnología con alcance nacional.",
      image: "/compufestLogo - Negro.svg",
      link: "https://compufest.cc",
      backgroundColor: "#00FF00",
    },
    {
      title: "emicarrada",
      description: "Portafolio y servicios de diseño digital con enfoque estratégico.",
      image: "/emicarrada.svg",
      link: "https://emicarrada.com",
      backgroundColor: "#041737",
    },
  ];

  return (
    <div className="mx-auto mt-12 max-w-7xl md:mt-16">
      <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-3 md:gap-12">
        {projects.map((project) => (
          <CometCard key={project.title} className="w-full max-w-xs mx-auto">
            <div
              className="relative cursor-pointer overflow-hidden rounded-2xl"
              style={{ backgroundColor: project.backgroundColor }}
              onClick={() =>
                project.link &&
                window.open(project.link, "_blank", "noopener,noreferrer")
              }
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-contain p-10 md:h-80 md:p-12"
              />
            </div>
          </CometCard>
        ))}
      </div>
    </div>
  );
}
