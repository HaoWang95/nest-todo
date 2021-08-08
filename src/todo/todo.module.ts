import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDo } from './entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToDo])],
  providers: [TodoService, TodoResolver]
})
export class TodoModule {}
