import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useForm, ValidationError } from "@formspree/react";
import { SEO_PAGES } from "@/lib/seo";

export default function Contact() {
  const { i18n } = useTranslation();
  const [state, handleSubmit] = useForm("xpqqneqg");
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const isSpanish = i18n.language === "es";

  // Toast notification effect
  useEffect(() => {
    if (state.succeeded) {
      setToast({ type: "success", message: content.successMessage });
      
      // Log for debugging
      console.log("✅ Form submitted successfully", state);
      
      // Scroll to success message
      if (successRef.current) {
        successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      
      // Auto-dismiss toast after 5 seconds
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // Handle submission errors
  useEffect(() => {
    if (state.errors && Object.keys(state.errors).length > 0) {
      console.error("❌ Form validation errors:", state.errors);
      setToast({ type: "error", message: isSpanish ? "Por favor, completa todos los campos correctamente." : "Please fill in all fields correctly." });
    }
  }, [state.errors, isSpanish]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("📤 Submitting form...");
    
    // Log form data for debugging
    const formData = new FormData(e.currentTarget);
    console.log("Form data:", Object.fromEntries(formData));
    
    try {
      await handleSubmit(e);
    } catch (error) {
      console.error("❌ Submission error:", error);
      setToast({ 
        type: "error", 
        message: isSpanish ? "Error al enviar. Intenta de nuevo." : "Error sending. Please try again."
      });
    }
  };

  const content = isSpanish ? {
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
  } : {
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
    budget1: "$1,500 – $2,500 USD",
    budget2: "$2,500 – $4,000 USD",
    budget3: "$4,000+ USD",
    description: "Project description",
    descriptionPlaceholder: "Tell us about your project, your vision, and what you're looking to achieve.",
    submit: "Submit project",
    successMessage: "Thank you. We've received your project submission. We'll review it and get back to you if there's a fit.",
    contactEmail: "For immediate inquiries:",
    footerText: "Chiiko. Strategic design and development.",
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={SEO_PAGES.contact[isSpanish ? 'es' : 'en'].title}
        description={SEO_PAGES.contact[isSpanish ? 'es' : 'en'].description}
        url="/contacto"
      />
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
          <div 
            ref={successRef}
            className="bg-green-50 border border-green-300 rounded-lg p-8 md:p-10 text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="text-green-800 text-base md:text-lg font-light leading-relaxed">
              {content.successMessage}
            </p>
          </div>
        ) : (
          <>
            {/* Toast Notification */}
            {toast && (
              <div 
                className={`fixed top-4 right-4 p-4 rounded-lg flex items-center gap-3 shadow-lg animate-in slide-in-from-right duration-300 z-50 max-w-md ${
                  toast.type === "success" 
                    ? "bg-green-50 border border-green-300" 
                    : "bg-red-50 border border-red-300"
                }`}
              >
                {toast.type === "success" ? (
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
                <span className={toast.type === "success" ? "text-green-800" : "text-red-800"}>
                  {toast.message}
                </span>
              </div>
            )}
            {/* Form Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
                {content.formTitle}
              </h2>

              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
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
                    className="w-full px-6 py-3 bg-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {state.submitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {isSpanish ? "Enviando..." : "Sending..."}
                      </>
                    ) : (
                      <>{content.submit}</>
                    )}
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
