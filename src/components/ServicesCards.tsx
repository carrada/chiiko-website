import { useTranslation } from "react-i18next";
import { landingBody, landingCardTitle } from "@/components/landing/landingStyles";

export default function ServicesCards() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.design.title"),
      description: t("services.design.desc"),
      image: "/diseñoweb.png",
    },
    {
      title: t("services.dev.title"),
      description: t("services.dev.desc"),
      image: "/desarrolloweb.png",
    },
    {
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.desc"),
      image: "/ecommerce.png",
    },
    {
      title: t("services.landing.title"),
      description: t("services.landing.desc"),
      image: "/landingpages.png",
    },
    {
      title: t("services.identity.title"),
      description: t("services.identity.desc"),
      image: "/identidaddigital.png",
    },
    {
      title: t("services.optimization.title"),
      description: t("services.optimization.desc"),
      image: "/optimizacion.png",
    },
  ];

  return (
    <div className="mx-auto mt-12 max-w-7xl md:mt-16">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex flex-col gap-4 rounded-2xl border border-neutral-100 bg-white p-5 transition-shadow hover:shadow-sm md:p-6"
          >
            <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-neutral-50 p-6">
              <img
                src={service.image}
                alt=""
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <h3 className={landingCardTitle}>{service.title}</h3>
            <p className={landingBody}>{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
