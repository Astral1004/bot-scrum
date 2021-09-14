import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { GlobalExceptionsFilter } from './api/filters/httpExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = app.get(ConfigService);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Scrum Bot 2.0')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const port = config.get<number>('PORT');
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/swagger', app, document);
  await app.listen(port);
  app.useGlobalFilters(new GlobalExceptionsFilter());
}

bootstrap();
