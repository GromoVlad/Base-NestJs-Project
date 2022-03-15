import * as Joi from 'joi';
import { Env } from '../../shared-kernel/enums/env.enum';

export const validationSchema = Joi.object({
  APP_ENV: Joi.string().valid(Env.DEV, Env.PROD).default(Env.DEV),
  APP_NAME: Joi.string().required(),
  APP_URL: Joi.string().required(),
  APP_PORT: Joi.number().port().optional().default(80),
  APP_HOST: Joi.string().hostname().required(),
  /**
   * Database
   */
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().port().required(),
  DB_USER: Joi.string().required(),
  DB_NAME: Joi.string().required(),
});
