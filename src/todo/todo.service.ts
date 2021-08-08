import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoInput } from './dto/create-todo.input';
import { ToDo } from './entities/todo.entity';

@Injectable()
export class TodoService {

    constructor(@InjectRepository(ToDo) private ToDoRepository: Repository<ToDo>){
    }

    async findAll(): Promise<ToDo[]>{
        const todo = new ToDo();
        todo.id = 1
        todo.title = "Test nestjs graphql server";
        todo.content = "Do it asap";
        console.log('Find all todos')
        return this.ToDoRepository.find(); 
    }

    findOne(id: number){
        return this.ToDoRepository.findOne(id);
    }

    createOne(createTodoInput: CreateTodoInput): Promise<ToDo>{
        const newTodo = this.ToDoRepository.create(createTodoInput);
        return this.ToDoRepository.save(newTodo);
    }

    updateOne(){

    }

    removeOne(){

    }
}
