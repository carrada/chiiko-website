import { useTranslation } from "react-i18next";
import { COLORS } from "@/constants";
import {
  landingDisplayAccent,
  landingDisplayKicker,
  landingSection,
} from "@/components/landing/landingStyles";

const VALUE_KEYS = [
  ["hero.value1", "hero.value1.highlight"],
  ["hero.value2", "hero.value2.highlight"],
  ["hero.value3", "hero.value3.highlight"],
  ["hero.value4", "hero.value4.highlight"],
] as const;

export default function ValuePropositions() {
  const { t } = useTranslation();

  return (
    <div
      className={`${landingSection} border-t border-neutral-100 pt-14 md:pt-20`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 md:gap-y-20">
        {VALUE_KEYS.map(([lineKey, highlightKey]) => (
          <div
            key={lineKey}
            className="flex flex-col gap-2 text-center sm:gap-3 sm:text-left"
          >
            <p className={landingDisplayKicker}>{t(lineKey)}</p>
            <p
              className={landingDisplayAccent}
              style={{ color: COLORS.PRIMARY }}
            >
              {t(highlightKey)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
