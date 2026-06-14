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
    await handleSubmit(e);
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
