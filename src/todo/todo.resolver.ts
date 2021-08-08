import { Resolver, Query } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { ToDo } from './models/todo.model';
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
}
