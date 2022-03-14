import { ApiProperty } from '@nestjs/swagger';
import { AbstractResource } from '../../../shared-kernel/resources/abstract.resource';

export class RegistrationResource extends AbstractResource {
  @ApiProperty({ enum: ['RegistrationResource'] })
  public readonly $resourceType!: string;
  @ApiProperty({ description: 'Пользователь зарегистрирован?' })
  public success: boolean;

  constructor(success: boolean) {
    super();
    this.success = success;
  }
}
