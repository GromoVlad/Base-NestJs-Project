import { applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, getSchemaPath } from '@nestjs/swagger';

export const ApiResourceResponse = (type: any, description: string, status = 200) => {
  if (Array.isArray(type)) {
    const extra: any[] = [];
    const schema = {
      oneOf: type.map((x: any) => {
        if (x === null) {
          return { type: 'null' };
        } else {
          extra.push(x);
          return { $ref: getSchemaPath(x) };
        }
      }),
    };
    return applyDecorators(ApiExtraModels(...extra), ApiResponse({ status, description, schema }));
  }
  return applyDecorators(ApiResponse({ status, description, type }));
};
