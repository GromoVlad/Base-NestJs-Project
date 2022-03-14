import { Body, Controller, Post } from '@nestjs/common';
import { Email } from '../../../shared-kernel/value-object/email';
import { Password } from '../../../shared-kernel/value-object/password';
import { LoginCommand } from '../commands/login.command';
import { LoginService } from '../services/login.service';
import { LoginDto } from '../dto/login.dto';
import { Route } from '../enums/route';
import { DocumentationTag } from '../../../shared-kernel/enums/documentation-tag.enum';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiThrows } from '../../../decorators/api-throws.decorator';
import { wrongRequestApiResource } from '../../../shared-kernel/api/wrong-request-api-response';
import { ApiResourceResponse } from '../../../decorators/api-resource-response.decorator';
import { UserNotFoundException } from '../../../shared-kernel/exception/user-not-found.exception';
import { LoginResource } from '../resources/login.resource';

@ApiTags(DocumentationTag.AUTH)
@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {
  }

  @ApiOperation({ summary: 'Логин' })
  @Post(Route.LOGIN)
  @ApiBody({ type: LoginCommand })
  @ApiThrows([UserNotFoundException])
  @ApiResponse(wrongRequestApiResource)
  @ApiResourceResponse(LoginResource, 'Токен авторизации успешно получен')
  async register(@Body() command: LoginCommand): Promise<LoginResource> {
    const dto = new LoginDto(new Email(command.email), new Password(command.password));
    const result = await this.loginService.login(dto);
    return new LoginResource(result);
  }
}
