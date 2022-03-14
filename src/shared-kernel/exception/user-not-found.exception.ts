import { BaseException } from './base.exception';
import { ExceptionCode } from '../enums/exception-code.enum';
import { ExceptionType } from '../enums/exception-type.enum';

export class UserNotFoundException extends BaseException {
  public static code: ExceptionCode = ExceptionCode.USER_NOT_FOUND;
  public static defaultMessage = 'Пользователь не найден';
  public static type: ExceptionType = ExceptionType.NOT_FOUND;

  constructor(message: string | null = null) {
    super(`${UserNotFoundException.defaultMessage}${message ? ': ' + message : ''}`, UserNotFoundException.code);
  }
}
