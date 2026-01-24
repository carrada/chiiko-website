// Custom exception classes for better error handling

export class IllegalArgumentException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "IllegalArgumentException";
  }
}

export class PreconditionViolationException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PreconditionViolationException";
  }
}

export class InvalidStateException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidStateException";
  }
}
