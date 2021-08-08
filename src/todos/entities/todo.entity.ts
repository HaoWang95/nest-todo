import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Todo {
    id: string;
    title: string;
    content: string;
}
