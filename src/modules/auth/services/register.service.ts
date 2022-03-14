import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { RegisterDto } from '../dto/register.dto';
import { UserAlreadyExistsException } from '../../../shared-kernel/exception/user-already-exists.exception';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
  }

  async register(dto: RegisterDto): Promise<boolean> {
    const where = { email: dto.email.value } as FindConditions<User>;
    const isUserExists = await this.usersRepository.findOne(where);
    if (isUserExists) {
      throw new UserAlreadyExistsException(`Email ${dto.email.value} уже зарегистрирован`);
    }
    await this.usersRepository.insert(this._createUser(dto));
    return true;
  }

  private _createUser(dto: RegisterDto): User {
    const user = new User();
    user.name = dto.name;
    user.email = dto.email.value;
    user.password = dto.password.value;
    return user;
  }
}
