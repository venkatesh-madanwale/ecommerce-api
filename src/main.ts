import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { RolesGuards } from './common/gaurds/roles.guards';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve static files from the 'prodimgs' directory
  app.useStaticAssets(join(__dirname, '..', 'prodimgs'));

  // Apply global role guard
  app.useGlobalGuards(new RolesGuards(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe({whitelist:true, transform: true}))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
