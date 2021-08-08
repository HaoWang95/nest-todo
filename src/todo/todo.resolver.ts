import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateTodoInput } from './dto/create-todo.input';
import { ToDo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Resolver(of => ToDo)
export class TodoResolver {

    constructor(
        private todoService: TodoService
    ){}

    @Query(() => String)
    public sayHello(): string{
        return "Hello World";
    }

    @Query(returns => [ToDo])
    findTodos(): Promise<ToDo[]>{
        return this.todoService.findAll();
    } 

    @Mutation(returns => ToDo)
    createTodo(@Args('createTodoInput')  createTodoInput: CreateTodoInput): Promise<ToDo>{
        return this.todoService.createOne(createTodoInput);
    }

    @Query(returns => ToDo)
    findOneTodo(@Args('id', {type: () => Int}) id: number): Promise<ToDo>{
        return this.todoService.findOne(id);
    }
}
