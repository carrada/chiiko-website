export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Estrategia",
      description: "Analizamos tu marca, tu mercado y el objetivo real del proyecto antes de diseñar."
    },
    {
      number: "02",
      title: "Diseño & desarrollo",
      description: "Diseñamos y construimos una experiencia clara, rápida y diferenciada."
    },
    {
      number: "03",
      title: "Entrega & evolución",
      description: "Publicamos el sitio y lo dejamos listo para crecer, medir y escalar."
    }
  ];

  return (
    <div className="w-full flex justify-center items-center px-4 py-20">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
              <div className="text-[8rem] md:text-[12rem] font-bold" style={{color: "#ce4676"}}>
                {step.number}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-black">
                {step.title}
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
