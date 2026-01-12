import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function ServicesCards() {
  const services = [
    {
      title: "Diseño web estratégico",
      description: "Creamos experiencias digitales que conectan con tu audiencia y cumplen objetivos de negocio.",
      image: "/diseñoweb.png"
    },
    {
      title: "Desarrollo web a medida",
      description: "Desarrollamos sitios web únicos, optimizados y escalables pensados para crecer con tu negocio.",
      image: "/desarrolloweb.png"
    },
    {
      title: "Ecommerce premium",
      description: "Tiendas online completas diseñadas para maximizar conversiones y ofrecer experiencias de compra excepcionales.",
      image: "/ecommercepremium.png"
    },
    {
      title: "Landing pages de conversión",
      description: "Páginas de aterrizaje enfocadas en convertir visitantes en clientes con diseño persuasivo y estratégico.",
      image: "/landingpages.png"
    },
    {
      title: "Identidad digital",
      description: "Construimos y fortalecemos la presencia digital de tu marca con consistencia y personalidad única.",
      image: "/identidaddigital.png"
    }
  ];

  return (
    <div className="w-full flex justify-center items-center px-4 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 place-items-center">
        {services.map((service, index) => (
          <CardContainer key={index} className="inter-var w-full max-w-xs md:max-w-2xl">
            <CardBody className="bg-white md:bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 md:p-10 border flex flex-col items-center">
              <CardItem
                translateZ="50"
                className="text-base md:text-2xl font-bold text-black md:text-black mb-2 text-center"
              >
                {service.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-xs md:text-base text-black md:text-black mb-3 md:mb-4 text-center"
              >
                {service.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full">
                <img
                  src={service.image}
                  className="h-40 md:h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
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
