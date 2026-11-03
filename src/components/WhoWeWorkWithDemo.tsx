import { useTranslation } from "react-i18next";
import { COLORS } from "@/constants";
import { landingDisplayAccent } from "@/components/landing/landingStyles";

export default function WhoWeWorkWithDemo() {
  const { t } = useTranslation();
  const words = t("whoWeWork.items")
    .split(",")
    .map((w) => w.trim())
    .filter(Boolean);

  const labelParts = t("whoWeWork.label").split(" ");
  const labelAccent = labelParts[0] ?? t("whoWeWork.label");
  const labelRest = labelParts.slice(1).join(" ");

  return (
    <div className="mx-auto mt-10 max-w-3xl md:mt-14">
      <p className={`${landingDisplayAccent} text-center text-black`}>
        <span style={{ color: COLORS.PRIMARY }}>{labelAccent}</span>
        {labelRest ? ` ${labelRest}` : ""}
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-2 md:mt-10 md:gap-3">
        {words.map((word) => (
          <li
            key={word}
            className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black md:text-base"
          >
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
}
