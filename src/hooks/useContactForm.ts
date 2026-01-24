import { useForm } from "@formspree/react";
import { type FormEvent } from "react";
import { FORM_IDS } from "@/constants";

export interface ContactFormState {
  isSubmitting: boolean;
  hasSucceeded: boolean;
  hasErrors: boolean;
  errors: any[];
}

export function useContactForm(formId: string = FORM_IDS.CONTACT_FORM) {
  const [state, handleSubmit] = useForm(formId);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    console.log("📤 Submitting form...", Object.fromEntries(formData));
    
    try {
      await handleSubmit(e);
    } catch (error) {
      console.error("❌ Submission error:", error);
      throw error;
    }
  };

  return {
    state: {
      isSubmitting: state.submitting,
      hasSucceeded: state.succeeded,
      hasErrors: state.errors && Object.keys(state.errors).length > 0,
      errors: state.errors || []
    },
    submitForm,
    rawState: state
  };
}
