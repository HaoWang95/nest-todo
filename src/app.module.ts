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
      definitions: {
        // get the TypeScript definitions(classes and interfaces) that correspond to the 
        // GraphQL SDL types
        // nestjs/graphql package can automatically generate TypeScript definitions from the
        // abstract syntax tree. The code below indicates where to save the generated TypeScript
        // output. By using this approach, it generates TypeScript definitions dynamically each time
        // the application starts.
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      debug: true,
      playground: true,
      mocks: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
