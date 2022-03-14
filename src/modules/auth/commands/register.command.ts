import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterCommand {
  @ApiProperty({ required: true, example: 'example@test.test', description: 'Email адрес' })
  public email!: string;

  @ApiProperty({ required: true, description: 'Пароль' })
  public password!: string;

  @ApiProperty({ required: true, description: 'Имя пользователя' })
  @Length(2, 100, { message: 'Некорректное имя: длина имени должна находиться в диапазоне от 2 до 100 знаков' })
  public name!: string;
}
