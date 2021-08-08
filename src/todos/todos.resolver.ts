import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { FindTodoArgs } from './dto/find-todo.args';
import { DeleteTodoArgs } from './dto/delete-todo.input';

@Resolver('Todo')
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Mutation('createTodo')
  create(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todosService.create(createTodoInput);
  }

  @Query('todos')
  findAll() {
    return this.todosService.findAll();
  }

  @Query('todo')
  findOne(@Args() findTodoArgs: FindTodoArgs) {
    return this.todosService.findOne(findTodoArgs);
  }

  @Mutation('updateTodo')
  update(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    return this.todosService.update(updateTodoInput);
  }

  @Mutation('removeTodo')
  remove(@Args('deleteTodoArgs') deleteToDoargs: DeleteTodoArgs) {
    return this.todosService.remove(deleteToDoargs);
  }
}
