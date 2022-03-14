import { ApiProperty } from '@nestjs/swagger';

export class LoginCommand {
  @ApiProperty({ required: true, example: 'example@test.test', description: 'Email адрес' })
  public email!: string;

  @ApiProperty({ required: true, description: 'Пароль' })
  public password!: string;
}
