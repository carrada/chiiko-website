import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { useTranslation } from "react-i18next";

export default function ServicesCards() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.design.title'),
      description: t('services.design.desc'),
      image: "/diseñoweb.png"
    },
    {
      title: t('services.dev.title'),
      description: t('services.dev.desc'),
      image: "/desarrolloweb.png"
    },
    {
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.desc'),
      image: "/ecommerce.png"
    },
    {
      title: t('services.landing.title'),
      description: t('services.landing.desc'),
      image: "/landingpages.png"
    },
    {
      title: t('services.identity.title'),
      description: t('services.identity.desc'),
      image: "/identidaddigital.png"
    },
    {
      title: t('services.optimization.title'),
      description: t('services.optimization.desc'),
      image: "/optimizacion.png"
    }
  ];

  return (
    <div className="w-full flex justify-center items-center px-2 md:px-4 py-24 tablet:py-32 md:py-40">
      <div className="max-w-full w-full grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-2 lg:grid-cols-3 gap-x-4 tablet:gap-x-6 md:gap-x-8 gap-y-2 tablet:gap-y-2 md:gap-y-2 place-items-center">
        {services.map((service, index) => (
          <CardContainer key={index} className="inter-var w-full max-w-sm md:max-w-3xl">
            <CardBody className="bg-white md:bg-white relative group/card hover:shadow-2xl hover:shadow-black/[0.2] dark:hover:shadow-2xl dark:hover:shadow-black/[0.2] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-2xl p-6 tablet:p-8 md:p-12 border flex flex-col items-center">
              <CardItem
                translateZ="50"
                className="text-base tablet:text-xl md:text-2xl font-bold text-black md:text-black mb-2 text-center"
              >
                {service.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-xs tablet:text-sm md:text-base text-black md:text-black mb-3 tablet:mb-3 md:mb-4 text-center"
              >
                {service.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full">
                <img
                  src={service.image}
                  className="h-40 tablet:h-48 md:h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
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
