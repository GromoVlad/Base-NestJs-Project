import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppExceptionFilter } from './filters/app-exception.filter';
import { INestApplication } from '@nestjs/common';
import { RedocModule, RedocOptions } from 'nestjs-redoc';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DocumentationTag } from './shared-kernel/enums/documentation-tag.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AppExceptionFilter());
  await setupDocumentation(app);
  await app.listen(3000);
}

async function setupDocumentation(app: INestApplication) {
  const documentConfig = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('My Notebook')
    .setDescription(`Документация API: My Notebook`)
    .addTag(DocumentationTag.AUTH, 'Авторизация')
    .build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup(`swagger`, app, document);

  const redocOptions: RedocOptions = {
    sortPropsAlphabetically: true,
    tagGroups: [
      { name: 'Authorization', tags: [DocumentationTag.AUTH] },
    ],
  };
  await RedocModule.setup(`docs`, app, document, redocOptions);
}

bootstrap();
