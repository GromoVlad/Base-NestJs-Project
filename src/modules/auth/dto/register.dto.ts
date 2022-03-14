import { Email } from '../../../shared-kernel/value-object/email';
import { Password } from '../../../shared-kernel/value-object/password';
import { InvariantViolationException } from '../../../shared-kernel/exception/invariant-violation.exception';

export class RegisterDto {
  private _name!: string;

  constructor(
    public readonly email: Email,
    public readonly password: Password,
    name: string,
  ) {
    this._setName(name);
  }

  private _setName(name: string) {
    if (!name || name.trim().length < 2 || name.trim().length > 100) {
      throw new InvariantViolationException('Некорректное имя: должно состоять от 2 до 100 символов');
    }
    this._name = name.trim();
  }

  get name(): string {
    return this._name;
  }
}
