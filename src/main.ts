import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const port = 4001;
  await app.listen(4001);
  app.getUrl().then((res) => {
    console.log('http://localhost:' + port);
  });
}
bootstrap();
