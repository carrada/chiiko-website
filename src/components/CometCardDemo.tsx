import { CometCard } from "@/components/ui/comet-card";

export default function CometCardDemo() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto",
      image: "/1chiiko.png"
    },
    {
      title: "Proyecto 2", 
      description: "Descripción del proyecto",
      image: "/2chiiko.png"
    },
    {
      title: "Proyecto 3",
      description: "Descripción del proyecto", 
      image: "/3chiiko.png"
    }
  ];

  return (
    <div className="w-full flex justify-center items-center px-8 md:px-4 py-20">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 place-items-center">
          {projects.map((project, index) => (
            <CometCard key={index} className="w-full max-w-xs mx-auto">
              <div className="relative overflow-hidden rounded-2xl bg-white">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </div>
  );
}
