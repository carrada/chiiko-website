import { useForm } from "@formspree/react";
import { type IFormSubmissionService, type FormSubmissionResult } from "./IFormSubmissionService";

// Concrete implementation using Formspree
// Can be swapped with NetlifyFormsService, CustomAPIService, etc. without changing consumers
export class FormspreeService implements IFormSubmissionService {
  private state: any;
  private handleSubmit: any;

  constructor(formId: string) {
    // Note: In a real implementation, you'd need to handle the hook differently
    // This is a conceptual example showing the DIP pattern
    const [state, handleSubmit] = useForm(formId);
    this.state = state;
    this.handleSubmit = handleSubmit;
  }

  async submitForm(formData: FormData): Promise<void> {
    console.log("📤 Submitting form via Formspree...", Object.fromEntries(formData));
    
    try {
      await this.handleSubmit(formData);
    } catch (error) {
      console.error("❌ Formspree submission error:", error);
      throw error;
    }
  }

  getSubmissionState(): FormSubmissionResult {
    return {
      succeeded: this.state.succeeded,
      errors: this.state.errors,
      submitting: this.state.submitting
    };
  }

  isSubmitting(): boolean {
    return this.state.submitting;
  }

  hasSucceeded(): boolean {
    return this.state.succeeded;
  }

  hasErrors(): boolean {
    return this.state.errors && Object.keys(this.state.errors).length > 0;
  }

  getErrors(): Record<string, any> | null {
    return this.state.errors || null;
  }
}

// Example of alternative implementation (demonstrating OCP)
export class NetlifyFormsService implements IFormSubmissionService {
  async submitForm(formData: FormData): Promise<void> {
    console.log("📤 Submitting form via Netlify Forms...");
    
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString()
    });
    
    if (!response.ok) {
      throw new Error("Netlify form submission failed");
    }
  }

  getSubmissionState(): FormSubmissionResult {
    // Implementation specific to Netlify
    return { succeeded: true, errors: undefined };
  }

  isSubmitting(): boolean {
    return false;
  }

  hasSucceeded(): boolean {
    return true;
  }

  hasErrors(): boolean {
    return false;
  }

  getErrors(): Record<string, any> | null {
    return null;
  }
}
