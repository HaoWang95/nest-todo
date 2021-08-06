import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

// module declaration
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Basic swagger document configuration
  const config = new DocumentBuilder()
    .setTitle('Nestjs Todo App Api Documentation')
    .setDescription('The todo api description')
    .setVersion('1.0')
    .addTag('ToDo')
    .build()
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);

  // Development hot-reload setup using webpack-hmr.config.js
  if(module.hot){
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
