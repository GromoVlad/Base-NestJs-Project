import { BaseException } from './base.exception';
import { ExceptionCode } from '../enums/exception-code.enum';

export class UserAlreadyExistsException extends BaseException {
  public static code: ExceptionCode = ExceptionCode.AUTH_USER_ALREADY_EXISTS;
  public static defaultMessage = 'Пользователь уже зарегистрирован';

  constructor(message: string) {
    super(
      `${UserAlreadyExistsException.defaultMessage}${message ? ': ' + message : ''}`,
      UserAlreadyExistsException.code,
    );
  }
}
