import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { ResizableNavbarDemo } from "@/components/ResizableNavbarDemo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ValidationError, useForm } from "@formspree/react";
import { SEO_PAGES } from "@/lib/seo";
import { ContentStrategyFactory } from "@/strategies/ContentStrategyFactory";
import { CONTACT_EMAIL, FORM_IDS } from "@/constants";

export default function Contact() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === "es";
  
  // Strategy Pattern: Get content based on language
  const contentStrategy = ContentStrategyFactory.getContactContent(i18n.language);
  
  // Formspree hook
  const [state, handleSubmit] = useForm(FORM_IDS.CONTACT_FORM);
  
  // Local state for notifications
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<"success" | "error">("success");
  const [notificationMessage, setNotificationMessage] = useState("");

  // Handle successful submission
  useEffect(() => {
    if (state.succeeded) {
      setNotificationType("success");
      setNotificationMessage(contentStrategy.getSuccessMessage());
      setShowNotification(true);
      
      // Auto-hide notification after 5 seconds
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, contentStrategy]);

  // Handle form submission
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await handleSubmit(e);
    } catch (error) {
      setNotificationType("error");
      setNotificationMessage(
        isSpanish 
          ? "Error al enviar. Intenta de nuevo." 
          : "Error sending. Please try again."
      );
      setShowNotification(true);
      
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={SEO_PAGES.contact[isSpanish ? 'es' : 'en'].title}
        description={SEO_PAGES.contact[isSpanish ? 'es' : 'en'].description}
        url={isSpanish ? '/contacto' : '/contact'}
        hreflangs={[
          { lang: 'es', href: 'https://www.chiiko.design/contacto' },
          { lang: 'en', href: 'https://www.chiiko.design/contact' },
          { lang: 'x-default', href: 'https://www.chiiko.design/contacto' },
        ]}
      />
      <ResizableNavbarDemo />
      <div className="py-12 tablet:py-16 md:py-24"></div>

      {/* Toast Notification */}
      {showNotification && (
        <div 
          className={`fixed top-20 right-4 p-4 rounded-lg flex items-center gap-3 shadow-lg z-[100] max-w-md transition-all duration-300 ${
            notificationType === "success" 
              ? "bg-white border border-[#ce4676]" 
              : "bg-red-50 border border-red-300"
          }`}
        >
          {notificationType === "success" ? (
            <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ce4676' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          )}
          <span className={notificationType === "success" ? "text-neutral-800" : "text-red-800"}>
            {notificationMessage}
          </span>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-neutral-800 text-sm md:text-base font-light mb-2 leading-relaxed">
            {contentStrategy.getSubtitle()}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {contentStrategy.getTitle()}
          </h1>
          <p className="text-neutral-800 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            {contentStrategy.getIntro()}
          </p>
        </div>

        {/* Success Message or Form */}
        {state.succeeded ? (
          <div className="bg-white border border-[#ce4676] rounded-lg p-8 md:p-10 text-center mb-16">
            <div className="flex justify-center mb-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#ce4676' }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="text-neutral-800 text-base md:text-lg font-light leading-relaxed">
              {contentStrategy.getSuccessMessage()}
            </p>
          </div>
        ) : (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
              {contentStrategy.getFormTitle()}
            </h2>

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-neutral-800 text-sm md:text-base font-medium mb-2">
                  {contentStrategy.getFullName()}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#ce4676] focus:border-transparent transition"
                  placeholder={contentStrategy.getFullName()}
                />
                <ValidationError field="name" prefix="Name" errors={state.errors} />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-neutral-800 text-sm md:text-base font-medium mb-2">
                  {contentStrategy.getEmail()}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#ce4676] focus:border-transparent transition"
                  placeholder={contentStrategy.getEmail()}
                />
                <ValidationError field="email" prefix="Email" errors={state.errors} />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-neutral-800 text-sm md:text-base font-medium mb-2">
                  {contentStrategy.getProjectType()}
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#ce4676] focus:border-transparent transition"
                >
                  <option value="">{contentStrategy.getProjectTypePlaceholder()}</option>
                  <option value="Website">{contentStrategy.getWebsite()}</option>
                  <option value="Branding">{contentStrategy.getBranding()}</option>
                  <option value="Ecommerce">{contentStrategy.getEcommerce()}</option>
                  <option value="Other">{contentStrategy.getOther()}</option>
                </select>
                <ValidationError field="projectType" prefix="Project Type" errors={state.errors} />
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-neutral-800 text-sm md:text-base font-medium mb-2">
                  {contentStrategy.getBudget()}
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#ce4676] focus:border-transparent transition"
                >
                  <option value="">{contentStrategy.getBudgetPlaceholder()}</option>
                  <option value="25000-35000">{contentStrategy.getBudget1()}</option>
                  <option value="35000-60000">{contentStrategy.getBudget2()}</option>
                  <option value="60000+">{contentStrategy.getBudget3()}</option>
                </select>
                <ValidationError field="budget" prefix="Budget" errors={state.errors} />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-neutral-800 text-sm md:text-base font-medium mb-2">
                  {contentStrategy.getDescription()}
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#ce4676] focus:border-transparent transition resize-none"
                  placeholder={contentStrategy.getDescriptionPlaceholder()}
                />
                <ValidationError field="description" prefix="Description" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-6 py-3 bg-neutral-800 text-white font-medium rounded-lg hover:bg-[#ce4676] focus:outline-none focus:ring-2 focus:ring-[#ce4676] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                    <>{contentStrategy.getSubmit()}</>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Contact Email */}
        <div className="pt-8 border-t border-neutral-200">
          <p className="text-neutral-600 text-sm md:text-base font-light mb-2">
            {contentStrategy.getContactEmail()}
          </p>
          <a
            href={`mailto:${isSpanish ? CONTACT_EMAIL.SPANISH : CONTACT_EMAIL.ENGLISH}`}
            className="text-neutral-800 font-medium hover:text-neutral-600 transition"
          >
            {isSpanish ? CONTACT_EMAIL.SPANISH : CONTACT_EMAIL.ENGLISH}
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
