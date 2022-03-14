import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export const config = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "",
  "database": "postgres",
  "migrations": ["./dist/src/database/migrations/*.js"],
  "entities": ["./dist/src/modules/**/*.entity.js"]
} as TypeOrmModuleOptions;

export default config;