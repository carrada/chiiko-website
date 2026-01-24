// Defensive validation utilities
import { IllegalArgumentException } from "./exceptions";

export class Validator {
  /**
   * Validates that a string is not null, undefined, or empty
   * @throws IllegalArgumentException if validation fails
   */
  static requireNonEmptyString(value: any, parameterName: string): string {
    if (value === null || value === undefined) {
      throw new IllegalArgumentException(`${parameterName} cannot be null or undefined`);
    }
    
    if (typeof value !== 'string') {
      throw new IllegalArgumentException(`${parameterName} must be a string`);
    }
    
    if (value.trim().length === 0) {
      throw new IllegalArgumentException(`${parameterName} cannot be empty`);
    }
    
    return value;
  }

  /**
   * Validates that an array is not null, undefined, or empty
   * @throws IllegalArgumentException if validation fails
   */
  static requireNonEmptyArray<T>(value: any, parameterName: string): T[] {
    if (value === null || value === undefined) {
      throw new IllegalArgumentException(`${parameterName} cannot be null or undefined`);
    }
    
    if (!Array.isArray(value)) {
      throw new IllegalArgumentException(`${parameterName} must be an array`);
    }
    
    if (value.length === 0) {
      throw new IllegalArgumentException(`${parameterName} cannot be empty`);
    }
    
    return value;
  }

  /**
   * Validates that a value is not null or undefined
   * @throws IllegalArgumentException if validation fails
   */
  static requireNonNull<T>(value: T | null | undefined, parameterName: string): T {
    if (value === null || value === undefined) {
      throw new IllegalArgumentException(`${parameterName} cannot be null or undefined`);
    }
    return value;
  }

  /**
   * Validates that a number is within a specific range
   * @throws IllegalArgumentException if validation fails
   */
  static requireInRange(value: number, min: number, max: number, parameterName: string): number {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new IllegalArgumentException(`${parameterName} must be a valid number`);
    }
    
    if (value < min || value > max) {
      throw new IllegalArgumentException(
        `${parameterName} must be between ${min} and ${max}, got ${value}`
      );
    }
    
    return value;
  }

  /**
   * Validates that a string is a valid email
   * @throws IllegalArgumentException if validation fails
   */
  static requireValidEmail(email: string, parameterName: string): string {
    this.requireNonEmptyString(email, parameterName);
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new IllegalArgumentException(`${parameterName} must be a valid email address`);
    }
    
    return email;
  }

  /**
   * Validates that a string is a valid URL
   * @throws IllegalArgumentException if validation fails
   */
  static requireValidUrl(url: string, parameterName: string): string {
    this.requireNonEmptyString(url, parameterName);
    
    try {
      new URL(url);
      return url;
    } catch {
      throw new IllegalArgumentException(`${parameterName} must be a valid URL`);
    }
  }

  /**
   * Validates that a condition is true
   * @throws IllegalArgumentException if condition is false
   */
  static require(condition: boolean, message: string): void {
    if (!condition) {
      throw new IllegalArgumentException(message);
    }
  }
}
