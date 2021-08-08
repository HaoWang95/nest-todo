import { Injectable } from '@nestjs/common';
import { ToDo } from './models/todo.model';

@Injectable()
export class TodoService {
    async findAll(): Promise<ToDo[]>{
        const todo = new ToDo();
        todo.id = 1
        todo.title = "Test nestjs graphql server";
        todo.content = "Do it asap";
        return [todo]
    }

    findOne(){

    }

    createOne(){

    }

    updateOne(){

    }

    removeOne(){

    }
}
