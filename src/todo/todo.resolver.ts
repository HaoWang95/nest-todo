import { Resolver, Query } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { TodoService } from './todo.service';

@Resolver(of => Author)
export class TodoResolver {

    constructor(
        private todoService: TodoService
    ){}

    @Query(() => String)
    public sayHello(): string{
        return "Hello World";
    }

    @Query()
    findTodos(){
        return this.todoService.findAll();
    }
}
