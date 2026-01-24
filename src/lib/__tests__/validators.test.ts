/**
 * Unit Tests for Validator utility
 * Demonstrates F.I.R.S.T. principles:
 * - Fast: No external dependencies
 * - Independent: Each test is self-contained
 * - Repeatable: Same input = same output
 * - Self-validating: Clear pass/fail
 * - Timely: Written alongside code
 */

import { Validator } from '../validators';
import { IllegalArgumentException } from '../exceptions';

describe('Validator', () => {
  describe('requireNonEmptyString', () => {
    // Fast: Runs in < 1ms
    it('should return the string when valid', () => {
      const result = Validator.requireNonEmptyString('valid string', 'testParam');
      expect(result).toBe('valid string');
    });

    // Test edge case: null
    it('should throw IllegalArgumentException when string is null', () => {
      expect(() => {
        Validator.requireNonEmptyString(null, 'testParam');
      }).toThrow(IllegalArgumentException);
      
      expect(() => {
        Validator.requireNonEmptyString(null, 'testParam');
      }).toThrow('testParam cannot be null or undefined');
    });

    // Test edge case: undefined
    it('should throw IllegalArgumentException when string is undefined', () => {
      expect(() => {
        Validator.requireNonEmptyString(undefined, 'testParam');
      }).toThrow(IllegalArgumentException);
    });

    // Test edge case: empty string
    it('should throw IllegalArgumentException when string is empty', () => {
      expect(() => {
        Validator.requireNonEmptyString('', 'testParam');
      }).toThrow('testParam cannot be empty');
    });

    // Test edge case: whitespace only
    it('should throw IllegalArgumentException when string is only whitespace', () => {
      expect(() => {
        Validator.requireNonEmptyString('   ', 'testParam');
      }).toThrow('testParam cannot be empty');
    });

    // Test edge case: wrong type
    it('should throw IllegalArgumentException when value is not a string', () => {
      expect(() => {
        Validator.requireNonEmptyString(123 as any, 'testParam');
      }).toThrow('testParam must be a string');
    });
  });

  describe('requireNonEmptyArray', () => {
    it('should return the array when valid', () => {
      const arr = [1, 2, 3];
      const result = Validator.requireNonEmptyArray(arr, 'testArray');
      expect(result).toEqual([1, 2, 3]);
    });

    it('should throw when array is null', () => {
      expect(() => {
        Validator.requireNonEmptyArray(null, 'testArray');
      }).toThrow('testArray cannot be null or undefined');
    });

    it('should throw when array is empty', () => {
      expect(() => {
        Validator.requireNonEmptyArray([], 'testArray');
      }).toThrow('testArray cannot be empty');
    });

    it('should throw when value is not an array', () => {
      expect(() => {
        Validator.requireNonEmptyArray('not an array' as any, 'testArray');
      }).toThrow('testArray must be an array');
    });
  });

  describe('requireValidEmail', () => {
    it('should return email when valid', () => {
      const result = Validator.requireValidEmail('test@example.com', 'email');
      expect(result).toBe('test@example.com');
    });

    it('should throw when email is invalid', () => {
      expect(() => {
        Validator.requireValidEmail('invalid-email', 'email');
      }).toThrow('email must be a valid email address');
    });

    it('should throw when email has no @', () => {
      expect(() => {
        Validator.requireValidEmail('invalidemail.com', 'email');
      }).toThrow('email must be a valid email address');
    });

    it('should throw when email has no domain', () => {
      expect(() => {
        Validator.requireValidEmail('test@', 'email');
      }).toThrow('email must be a valid email address');
    });
  });

  describe('requireValidUrl', () => {
    it('should return URL when valid', () => {
      const result = Validator.requireValidUrl('https://example.com', 'url');
      expect(result).toBe('https://example.com');
    });

    it('should accept http URLs', () => {
      const result = Validator.requireValidUrl('http://example.com', 'url');
      expect(result).toBe('http://example.com');
    });

    it('should throw when URL is invalid', () => {
      expect(() => {
        Validator.requireValidUrl('not-a-url', 'url');
      }).toThrow('url must be a valid URL');
    });

    it('should throw when URL has no protocol', () => {
      expect(() => {
        Validator.requireValidUrl('example.com', 'url');
      }).toThrow('url must be a valid URL');
    });
  });

  describe('requireInRange', () => {
    it('should return number when in range', () => {
      const result = Validator.requireInRange(5, 1, 10, 'testNum');
      expect(result).toBe(5);
    });

    it('should accept min boundary', () => {
      const result = Validator.requireInRange(1, 1, 10, 'testNum');
      expect(result).toBe(1);
    });

    it('should accept max boundary', () => {
      const result = Validator.requireInRange(10, 1, 10, 'testNum');
      expect(result).toBe(10);
    });

    it('should throw when below min', () => {
      expect(() => {
        Validator.requireInRange(0, 1, 10, 'testNum');
      }).toThrow('testNum must be between 1 and 10, got 0');
    });

    it('should throw when above max', () => {
      expect(() => {
        Validator.requireInRange(11, 1, 10, 'testNum');
      }).toThrow('testNum must be between 1 and 10, got 11');
    });

    it('should throw when value is NaN', () => {
      expect(() => {
        Validator.requireInRange(NaN, 1, 10, 'testNum');
      }).toThrow('testNum must be a valid number');
    });
  });
});
