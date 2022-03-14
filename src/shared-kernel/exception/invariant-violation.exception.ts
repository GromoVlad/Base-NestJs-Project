import { BaseException } from './base.exception';
import { ExceptionCode } from '../enums/exception-code.enum';
import { ExceptionType } from '../enums/exception-type.enum';

export class InvariantViolationException extends BaseException {
  public static code: ExceptionCode = ExceptionCode.INVARIANT_VIOLATION;
  public static defaultMessage = 'Invariant violation';
  public static type: ExceptionType = ExceptionType.WRONG_DATA;

  constructor(message: string | null = null) {
    super(
      `${InvariantViolationException.defaultMessage}${message ? ': ' + message : ''}`,
      InvariantViolationException.code,
    );
  }
}
