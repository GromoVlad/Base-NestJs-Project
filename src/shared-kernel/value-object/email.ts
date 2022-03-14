export class Email {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value.toString().toLowerCase().trim();
    if (!this._value || this._value.indexOf('@') < 1) {
      throw new Error(`Некорректный или пустой электронный адрес: "${value}"`);
    }
  }

  get value(): string {
    return this._value;
  }
}
