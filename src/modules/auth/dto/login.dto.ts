import { Email } from '../../../shared-kernel/value-object/email';
import { Password } from '../../../shared-kernel/value-object/password';

export class LoginDto {
  constructor(public readonly email: Email, public readonly password: Password) {
  }
}
