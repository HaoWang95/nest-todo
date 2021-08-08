import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { DeleteTodoArgs } from './dto/delete-todo.input';
import { FindTodoArgs } from './dto/find-todo.args';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';
import {v4 as uuid} from 'uuid'

@Injectable()
export class TodosService {
  // 
  private todos: Todo[] = [];

  create(createTodoInput: CreateTodoInput): Todo {
    const todo= {
      id: uuid().toString(),
      ...createTodoInput
    }
    this.todos.push(todo);
    return todo
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(findTodoArgs: FindTodoArgs): Todo {
    return this.todos.find(td => td.id === findTodoArgs.id)
  }

  update(updateTodoInput: UpdateTodoInput): Todo {
    const todo = this.todos.find(td => td.id === updateTodoInput.id);
    Object.assign(todo, updateTodoInput);
    return todo;
  }

  remove(deleteTodoArgs: DeleteTodoArgs) {
    return `This action removes a #${deleteTodoArgs.id} todo`;
  }
}
