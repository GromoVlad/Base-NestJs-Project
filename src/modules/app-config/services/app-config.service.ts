import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Env } from '../../../shared-kernel/enums/env.enum';

@Injectable()
export class AppConfigService {
  public readonly appName: string;
  public readonly appUrl: string;
  public readonly host: string;
  public readonly env: Env;
  public readonly isDev: boolean;
  public readonly isProd: boolean;

  constructor(private configService: ConfigService) {
    this.appName = this.configService.get<string>('APP_NAME') as string;
    this.appUrl = this.configService.get<string>('APP_URL') as string;
    this.host = this.configService.get<string>('APP_HOST') as string;
    this.env = this.configService.get<Env>('APP_ENV', Env.DEV);
    this.isDev = this.env === Env.DEV;
    this.isProd = this.env === Env.PROD;
  }
}
