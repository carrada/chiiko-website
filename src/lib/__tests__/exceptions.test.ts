/**
 * Unit Tests for custom exception classes
 */

import {
  IllegalArgumentException,
  PreconditionViolationException,
  InvalidStateException,
} from '../exceptions';

describe('IllegalArgumentException', () => {
  it('should set name and message', () => {
    const error = new IllegalArgumentException('bad arg');
    expect(error.name).toBe('IllegalArgumentException');
    expect(error.message).toBe('bad arg');
  });

  it('should be an instance of Error', () => {
    const error = new IllegalArgumentException('test');
    expect(error).toBeInstanceOf(Error);
  });
});

describe('PreconditionViolationException', () => {
  it('should set name and message', () => {
    const error = new PreconditionViolationException('precondition failed');
    expect(error.name).toBe('PreconditionViolationException');
    expect(error.message).toBe('precondition failed');
  });

  it('should be an instance of Error', () => {
    const error = new PreconditionViolationException('test');
    expect(error).toBeInstanceOf(Error);
  });
});

describe('InvalidStateException', () => {
  it('should set name and message', () => {
    const error = new InvalidStateException('invalid state');
    expect(error.name).toBe('InvalidStateException');
    expect(error.message).toBe('invalid state');
  });

  it('should be an instance of Error', () => {
    const error = new InvalidStateException('test');
    expect(error).toBeInstanceOf(Error);
  });
});
