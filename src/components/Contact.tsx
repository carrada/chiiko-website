import { useTranslation } from "react-i18next";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const { i18n } = useTranslation();
  const [state, handleSubmit] = useForm("xkdojwvd");

  const isSpanish = i18n.language === "es";

  const content = isSpanish ? {
    title: "Start a thoughtful project",
    subtitle: "Work with Chiiko",
    intro: "We collaborate with a limited number of projects each year. We respond only if there's a genuine fit between your vision and ours.",
    formTitle: "Tell us about your project",
    fullName: "Full name",
    email: "Email",
    projectType: "Project type",
    projectTypePlaceholder: "Select a project type",
    website: "Website",
    branding: "Branding",
    ecommerce: "Ecommerce",
    other: "Other",
    budget: "Estimated budget",
    budgetPlaceholder: "Select a budget range",
    budget1: "$25,000 – $35,000 MXN",
    budget2: "$35,000 – $60,000 MXN",
    budget3: "$60,000+ MXN",
    description: "Project description",
    descriptionPlaceholder: "Tell us about your project, your vision, and what you're looking to achieve.",
    submit: "Submit project",
    successMessage: "Thank you. We've received your project submission. We'll review it and get back to you if there's a fit.",
    contactEmail: "For immediate inquiries:",
    footerText: "Chiiko. Strategic design and development.",
  } : {
    title: "Comienza un proyecto pensado",
    subtitle: "Trabaja con Chiiko",
    intro: "Colaboramos con un número limitado de proyectos cada año. Respondemos solo si hay un fit genuino entre tu visión y la nuestra.",
    formTitle: "Cuéntanos sobre tu proyecto",
    fullName: "Nombre completo",
    email: "Email",
    projectType: "Tipo de proyecto",
    projectTypePlaceholder: "Selecciona un tipo de proyecto",
    website: "Sitio web",
    branding: "Branding",
    ecommerce: "Ecommerce",
    other: "Otro",
    budget: "Presupuesto estimado",
    budgetPlaceholder: "Selecciona un rango de presupuesto",
    budget1: "$25,000 – $35,000 MXN",
    budget2: "$35,000 – $60,000 MXN",
    budget3: "$60,000+ MXN",
    description: "Descripción del proyecto",
    descriptionPlaceholder: "Cuéntanos sobre tu proyecto, tu visión y qué buscas lograr.",
    submit: "Enviar proyecto",
    successMessage: "Gracias. Hemos recibido tu propuesta de proyecto. La revisaremos y nos pondremos en contacto si hay fit.",
    contactEmail: "Para consultas inmediatas:",
    footerText: "Chiiko. Diseño y desarrollo estratégico.",
  };

  return (
    <div className="min-h-screen bg-white">
      <ResizableNavbarDemo />
      <div className="py-12 tablet:py-16 md:py-24"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-neutral-800 text-sm md:text-base font-light mb-2 leading-relaxed">
            {content.subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {content.title}
          </h1>
          <p className="text-neutral-800 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            {content.intro}
          </p>
        </div>

        {/* Success Message */}
        {state.succeeded ? (
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-8 md:p-10 text-center mb-16">
            <p className="text-neutral-800 text-base md:text-lg font-light leading-relaxed">
              {content.successMessage}
            </p>
          </div>
        ) : (
          <>
            {/* Form Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
                {content.formTitle}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-neutral-800 text-sm md:text-base font-medium mb-2">
                    {content.fullName}
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent transition"
                    placeholder={content.fullName}
                  />
                  <ValidationError field="name" prefix="Name" errors={state.errors} />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-neutral-800 text-sm md:text-base font-medium mb-2">
                    {content.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent transition"
                    placeholder={content.email}
                  />
                  <ValidationError field="email" prefix="Email" errors={state.errors} />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-neutral-800 text-sm md:text-base font-medium mb-2">
                    {content.projectType}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent transition"
                  >
                    <option value="">{content.projectTypePlaceholder}</option>
                    <option value="Website">{content.website}</option>
                    <option value="Branding">{content.branding}</option>
                    <option value="Ecommerce">{content.ecommerce}</option>
                    <option value="Other">{content.other}</option>
                  </select>
                  <ValidationError field="projectType" prefix="Project Type" errors={state.errors} />
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-neutral-800 text-sm md:text-base font-medium mb-2">
                    {content.budget}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent transition"
                  >
                    <option value="">{content.budgetPlaceholder}</option>
                    <option value="25000-35000">{content.budget1}</option>
                    <option value="35000-60000">{content.budget2}</option>
                    <option value="60000+">{content.budget3}</option>
                  </select>
                  <ValidationError field="budget" prefix="Budget" errors={state.errors} />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-neutral-800 text-sm md:text-base font-medium mb-2">
                    {content.description}
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent transition resize-none"
                    placeholder={content.descriptionPlaceholder}
                  />
                  <ValidationError field="description" prefix="Description" errors={state.errors} />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full px-6 py-3 bg-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending..." : content.submit}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Email */}
            <div className="pt-8 border-t border-neutral-200">
              <p className="text-neutral-600 text-sm md:text-base font-light mb-2">
                {content.contactEmail}
              </p>
              <a
                href="mailto:hola@chiiko.studio"
                className="text-neutral-800 font-medium hover:text-neutral-600 transition"
              >
                hola@chiiko.design
              </a>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
