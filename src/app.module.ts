import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      // adding the typePaths which indicates where the GraphQLModule should look for
      // GraphQL SDL schema definition
      
      autoSchemaFile: 'schema.gql'
    }),
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
