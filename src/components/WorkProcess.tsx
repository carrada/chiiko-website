import { useTranslation } from "react-i18next";

export default function WorkProcess() {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t('process.step1.title'),
      description: t('process.step1.desc')
    },
    {
      number: "02",
      title: t('process.step2.title'),
      description: t('process.step2.desc')
    },
    {
      number: "03",
      title: t('process.step3.title'),
      description: t('process.step3.desc')
    }
  ];

  return (
    <div className="w-full flex justify-center items-center px-4 py-24 md:py-40">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
              <div className="text-[8rem] md:text-[12rem] font-bold" style={{color: "#ce4676"}}>
                {step.number}
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-black">
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
