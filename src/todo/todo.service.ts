import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToDo } from './models/todo.model';

@Injectable()
export class TodoService {

    constructor(@InjectRepository(ToDo) private ToDoRepository: Repository<ToDo>){
    }

    async findAll(): Promise<ToDo[]>{
        const todo = new ToDo();
        todo.id = 1
        todo.title = "Test nestjs graphql server";
        todo.content = "Do it asap";
        return this.ToDoRepository.find(); 
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
