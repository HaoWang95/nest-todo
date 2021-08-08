import { Field, ObjectType } from "@nestjs/graphql";
import { ToDo } from "./todo.model";

@ObjectType()
export class Author{
    @Field({
        description:'the user id'
    })
    id: number;

    @Field({nullable: false})
    userName: string;

    @Field({nullable: true})
    todos: [ToDo]
}