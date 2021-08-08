import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TodosModule, 
    GraphQLModule.forRoot({
      // adding the typePaths which indicates where the GraphQLModule should look for
      // GraphQL SDL schema definition
      typePaths:['./**/*.graphql'],
      debug: true,
      playground: true,
      mocks: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
