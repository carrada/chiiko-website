import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
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

  const testimonials = services.map((service) => ({
    name: service.title,
    quote: service.description,
    src: service.image,
  }));

  return (
    <div className="w-full flex justify-center items-center px-2 md:px-4 py-24 tablet:py-32 md:py-40">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
