import { ApiProperty } from '@nestjs/swagger';
import { AbstractResource } from '../../../shared-kernel/resources/abstract.resource';

export class LoginResource extends AbstractResource {
  @ApiProperty({ enum: ['LoginResource'] })
  public readonly $resourceType!: string;
  @ApiProperty({ description: 'Токен доступа' })
  public accessToken: string;

  constructor(accessToken: string) {
    super();
    this.accessToken = accessToken;
  }
}
