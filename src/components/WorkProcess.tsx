import { useTranslation } from "react-i18next";
import { COLORS } from "@/constants";
import {
  landingBody,
  landingCardTitle,
  landingDisplayStat,
} from "@/components/landing/landingStyles";

export default function WorkProcess() {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t("process.step1.title"),
      description: t("process.step1.desc"),
    },
    {
      number: "02",
      title: t("process.step2.title"),
      description: t("process.step2.desc"),
    },
    {
      number: "03",
      title: t("process.step3.title"),
      description: t("process.step3.desc"),
    },
  ];

  return (
    <div className="mx-auto mt-12 max-w-7xl md:mt-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center space-y-3 text-center md:items-start md:text-left"
          >
            <div className={landingDisplayStat} style={{ color: COLORS.PRIMARY }}>
              {step.number}
            </div>
            <h3 className={landingCardTitle}>{step.title}</h3>
            <p className={landingBody}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
