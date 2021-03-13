class GeneralError extends Error {
  constructor(message) {
    super(message);
    this.code = 500;
  }
}

export default GeneralError;
