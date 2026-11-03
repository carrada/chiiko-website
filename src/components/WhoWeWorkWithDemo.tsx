import { useTranslation } from "react-i18next";
import { landingCardTitle } from "@/components/landing/landingStyles";

export default function WhoWeWorkWithDemo() {
  const { t } = useTranslation();
  const words = t("whoWeWork.items")
    .split(",")
    .map((w) => w.trim())
    .filter(Boolean);

  return (
    <div className="mx-auto mt-12 max-w-3xl md:mt-16 lg:max-w-4xl">
      <ul className="divide-y divide-neutral-100 border-y border-neutral-100">
        {words.map((word) => (
          <li
            key={word}
            className="py-6 md:py-8"
          >
            <span
              className={`${landingCardTitle} text-2xl md:text-[1.75rem] lg:text-3xl`}
            >
              {word}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
