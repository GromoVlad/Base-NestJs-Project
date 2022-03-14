import { ArgumentsHost, BadRequestException, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { ExceptionType } from '../shared-kernel/enums/exception-type.enum';
import { BaseException } from '../shared-kernel/exception/base.exception';

export class AppExceptionFilter implements ExceptionFilter {
  catch(e: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response: any = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    if (e instanceof BadRequestException) {
      const res = e.getResponse() as any;
      response.status(e.getStatus()).json({
        statusCode: e.getStatus(),
        code: e.getStatus(),
        message: res.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else if (e instanceof BaseException) {
      let status = 500;
      if (e.type === ExceptionType.UNAUTHORIZED) {
        status = 401;
      }
      if (e.type === ExceptionType.CONFLICT) {
        status = 409;
      }
      if (e.type === ExceptionType.NOT_FOUND) {
        status = 404;
      }
      if (e.type === ExceptionType.FORBIDDEN) {
        status = 403;
      }
      if (e.type === ExceptionType.WRONG_DATA) {
        status = 400;
      }
      response.status(status).json({
        statusCode: status,
        code: e.code,
        message: e.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else if (e instanceof HttpException) {
      response.status(e.getStatus()).json({
        statusCode: e.getStatus(),
        code: e.getStatus(),
        message: e.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else {
      response.status(500).json({
        statusCode: 500,
        code: 500,
        message: e.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
