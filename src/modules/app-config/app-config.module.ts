import { Global, Module } from '@nestjs/common';
import { AppConfigService } from './services/app-config.service';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './validation-schema';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env'],
      validationSchema,
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
