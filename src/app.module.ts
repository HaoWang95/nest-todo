import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDo } from './todo/entities/todo.entity';
import { TodoModule } from './todo/todo.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      // adding the typePaths which indicates where the GraphQLModule should look for
      // GraphQL SDL schema definition
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot({
      type:'sqlite', // define the database type
       // in-memory db
      database: 'memory',
      entities: ["dist/**/**/*.entity{.ts,.js}", ToDo],
      synchronize: true
    }),
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private conn: Connection){}
}
