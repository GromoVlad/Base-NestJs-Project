import { InvariantViolationException } from '../exception/invariant-violation.exception';

export class Password {
  constructor(private _value: string) {
    if (!_value) {
      throw new InvariantViolationException('Пароль не может быть пустым');
    }
    const validate = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z!"# $%&\'(\[\])*\\+,-./:;<=>?@^_`{|}~]{8,1000}$/.test(_value);
    if (!validate) {
      throw new InvariantViolationException(
        'Неверный пароль. Пароль должен содержать не менее 8 символов и не более 1000, включая хотя бы одну цифру ' +
        'и хотя бы одну букву. Допустимые символы: 0-9a-Z !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
      );
    }
  }

  public get value(): string {
    return this._value;
  }
}
