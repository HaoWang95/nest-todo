import { Field, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";


@ObjectType()
export class ToDo{
    @Field()
    @IsNotEmpty()
    id: number;

    @Field({nullable: false})
    title: string;

    @Field({nullable: true})
    content: string;
}