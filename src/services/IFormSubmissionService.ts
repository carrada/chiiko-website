// Domain interface - Dependency Inversion Principle
export interface FormSubmissionResult {
  succeeded: boolean;
  errors?: Record<string, any>;
  submitting?: boolean;
}

export interface IFormSubmissionService {
  submitForm(formData: FormData): Promise<void>;
  getSubmissionState(): FormSubmissionResult;
  isSubmitting(): boolean;
  hasSucceeded(): boolean;
  hasErrors(): boolean;
  getErrors(): Record<string, any> | null;
}
