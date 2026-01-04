import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function ServicesCards() {
  const services = [
    {
      title: "Diseño web estratégico",
      description: "Creamos experiencias digitales que conectan con tu audiencia y cumplen objetivos de negocio.",
      image: "/1chiiko.png"
    },
    {
      title: "Desarrollo web a medida",
      description: "Desarrollamos sitios web únicos, optimizados y escalables pensados para crecer con tu negocio.",
      image: "/2chiiko.png"
    },
    {
      title: "Ecommerce premium",
      description: "Tiendas online completas diseñadas para maximizar conversiones y ofrecer experiencias de compra excepcionales.",
      image: "/3chiiko.png"
    },
    {
      title: "Landing pages de conversión",
      description: "Páginas de aterrizaje enfocadas en convertir visitantes en clientes con diseño persuasivo y estratégico.",
      image: "/1chiiko.png"
    },
    {
      title: "Identidad digital",
      description: "Construimos y fortalecemos la presencia digital de tu marca con consistencia y personalidad única.",
      image: "/2chiiko.png"
    }
  ];

  return (
    <div className="w-full flex justify-center items-center px-4 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 place-items-center">
        {services.map((service, index) => (
          <CardContainer key={index} className="inter-var w-full max-w-xs md:max-w-none">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 md:p-6 border">
              <CardItem
                translateZ="50"
                className="text-lg md:text-xl font-bold text-black dark:text-white mb-2"
              >
                {service.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3 md:mb-4"
              >
                {service.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full">
                <img
                  src={service.image}
                  className="h-32 md:h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={service.title}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
