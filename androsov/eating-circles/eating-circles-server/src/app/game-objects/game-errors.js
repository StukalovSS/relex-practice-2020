export class PlayerNotExisrError extends Error {
  constructor(message) {
    super(message);
    this.name = "PlayerNotExisrError";
  }
}