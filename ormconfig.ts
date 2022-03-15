import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export const ormconfig = {
  'type': 'postgres',
  'host': process.env.DB_HOST,
  'port': parseInt(process.env.DB_PORT as string),
  'username': process.env.DB_USER || 'postgres',
  'password': process.env.DB_PASSWORD || '',
  'database': process.env.DB_NAME || 'postgres',
  'migrations': ['./dist/src/database/migrations/*.js'],
  'entities': ['./dist/src/modules/**/*.entity.js'],
} as TypeOrmModuleOptions;

export default ormconfig;