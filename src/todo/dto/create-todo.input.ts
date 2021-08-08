import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class CreateTodoInput{
    @IsAlpha()
    @Field({nullable: false})
    title: string;

    
    @Field({nullable: true})
    content: string;
}