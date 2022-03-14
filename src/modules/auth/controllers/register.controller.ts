import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from '../services/register.service';
import { RegisterCommand } from '../commands/register.command';
import { RegisterDto } from '../dto/register.dto';
import { Email } from '../../../shared-kernel/value-object/email';
import { Password } from '../../../shared-kernel/value-object/password';
import { Route } from '../enums/route';
import { UserAlreadyExistsException } from '../../../shared-kernel/exception/user-already-exists.exception';
import { ApiThrows } from '../../../decorators/api-throws.decorator';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DocumentationTag } from '../../../shared-kernel/enums/documentation-tag.enum';
import { ApiResourceResponse } from '../../../decorators/api-resource-response.decorator';
import { RegistrationResource } from '../resources/registration.resource';
import { wrongRequestApiResource } from '../../../shared-kernel/api/wrong-request-api-response';

@ApiTags(DocumentationTag.AUTH)
@Controller()
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {
  }

  @ApiOperation({ summary: 'Регистрация пользователя' })
  @Post(Route.REGISTER)
  @ApiBody({ type: RegisterCommand })
  @ApiThrows([UserAlreadyExistsException])
  @ApiResponse(wrongRequestApiResource)
  @ApiResourceResponse(RegistrationResource, 'Пользователь зарегистрирован?')
  async register(@Body() command: RegisterCommand): Promise<RegistrationResource> {
    const dto = new RegisterDto(new Email(command.email), new Password(command.password), command.name);
    const result = await this.registerService.register(dto);
    return new RegistrationResource(result);
  }
}
