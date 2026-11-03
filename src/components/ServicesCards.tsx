import { useTranslation } from "react-i18next";
import { landingBody, landingCardTitle } from "@/components/landing/landingStyles";

const SERVICE_KEYS = [
  "design",
  "dev",
  "ecommerce",
  "landing",
  "identity",
  "optimization",
] as const;

export default function ServicesCards() {
  const { t } = useTranslation();

  const services = SERVICE_KEYS.map((key) => ({
    key,
    title: t(`services.${key}.title`),
    description: t(`services.${key}.desc`),
  }));

  return (
    <div className="mx-auto mt-12 max-w-3xl md:mt-16 lg:max-w-4xl">
      <ul className="divide-y divide-neutral-100 border-y border-neutral-100">
        {services.map((service) => (
          <li key={service.key} className="py-8 first:pt-0 last:pb-0 md:py-10">
            <h3 className={`${landingCardTitle} text-2xl md:text-[1.75rem] lg:text-3xl`}>
              {service.title}
            </h3>
            <p className={`${landingBody} mt-3 max-w-2xl md:mt-4`}>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
