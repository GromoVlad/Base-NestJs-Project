import { BaseException } from './base.exception';
import { ExceptionCode } from '../enums/exception-code.enum';
import { ExceptionType } from '../enums/exception-type.enum';

export class NotFoundException extends BaseException {
  public static code: ExceptionCode = ExceptionCode.NOT_FOUND;
  public static defaultMessage = 'Не найдено';
  public static type: ExceptionType = ExceptionType.NOT_FOUND;

  constructor(message: string | null = null) {
    super(
      `${NotFoundException.defaultMessage}${message ? ': ' + message : ''}`,
      NotFoundException.code,
    );
  }
}
