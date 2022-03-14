import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { LoginDto } from '../dto/login.dto';
import { UserNotFoundException } from '../../../shared-kernel/exception/user-not-found.exception';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    private _jwtService: JwtService,
    @InjectRepository(User)
    private _usersRepository: Repository<User>,
  ) {
  }

  async login(dto: LoginDto): Promise<string> {
    const where = { email: dto.email.value } as FindConditions<User>;
    const user = await this._usersRepository.findOne(where);
    if (!user || dto.password.value !== user.password) {
      throw new UserNotFoundException(`Проверьте введеные данные.`);
    }
    return this._jwtService.sign(
      { id: user.id, name: user.name, email: user.email },
      { secret: 'env-go-secret', expiresIn: `1h` },
    );
  }
}
