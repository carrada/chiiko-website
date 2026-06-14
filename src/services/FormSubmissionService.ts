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
    await this.handleSubmit(formData);
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
  private submitting = false;
  private succeeded = false;
  private errors: Record<string, string> | null = null;

  async submitForm(formData: FormData): Promise<void> {
    this.submitting = true;
    this.succeeded = false;
    this.errors = null;

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString()
      });

      if (!response.ok) {
        this.errors = { form: `Submission failed with status ${response.status}` };
        throw new Error(`Netlify form submission failed with status ${response.status}`);
      }

      this.succeeded = true;
    } catch (error) {
      if (!this.errors) {
        const message = error instanceof Error ? error.message : "Unknown submission error";
        this.errors = { form: message };
      }
      throw error;
    } finally {
      this.submitting = false;
    }
  }

  getSubmissionState(): FormSubmissionResult {
    return {
      succeeded: this.succeeded,
      errors: this.errors ?? undefined,
      submitting: this.submitting
    };
  }

  isSubmitting(): boolean {
    return this.submitting;
  }

  hasSucceeded(): boolean {
    return this.succeeded;
  }

  hasErrors(): boolean {
    return this.errors !== null;
  }

  getErrors(): Record<string, any> | null {
    return this.errors;
  }
}
