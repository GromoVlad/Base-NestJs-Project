import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { AppConfigModule } from './modules/app-config/app-config.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    AppConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
