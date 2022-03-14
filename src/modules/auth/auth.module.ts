import { Module } from '@nestjs/common';
import { RegisterController } from './controllers/register.controller';
import { RegisterService } from './services/register.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'env-go-secret',
      signOptions: { expiresIn: `1h` },
    }),
  ],
  controllers: [RegisterController, LoginController],
  providers: [RegisterService, LoginService],
})
export class AuthModule {
}
