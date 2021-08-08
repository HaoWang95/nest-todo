import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDo } from './models/todo.model';

@Module({
  imports: [TypeOrmModule.forFeature([ToDo])],
  providers: [TodoService, TodoResolver]
})
export class TodoModule {}
