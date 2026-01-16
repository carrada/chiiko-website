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
      image: "/ecommerce.png"
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
    },
    {
      title: "Optimización y crecimiento continuo",
      description: "Medimos, ajustamos y mejoramos para que siga vendiendo.",
      image: "/optimizacion.png"
    }
  ];

  return (
    <div className="w-full flex justify-center items-center px-2 md:px-4 py-24 md:py-40">
      <div className="max-w-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-2 place-items-center">
        {services.map((service, index) => (
          <CardContainer key={index} className="inter-var w-full max-w-sm md:max-w-3xl">
            <CardBody className="bg-white md:bg-white relative group/card hover:shadow-2xl hover:shadow-black/[0.2] dark:hover:shadow-2xl dark:hover:shadow-black/[0.2] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-2xl p-6 md:p-12 border flex flex-col items-center">
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
