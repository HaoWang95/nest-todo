import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateTodoInput } from './dto/create-todo.input';
import { ToDo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
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
}
