import { InputType } from "@nestjs/graphql";

@InputType()
export class CreateTodoInput {
    title: string;
    content: string;
}
