import { Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

export class DeleteTodoArgs{
    @Field()
    @IsNotEmpty()
    id: string;
}