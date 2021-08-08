import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

export class FindTodosArgs{
    @Field(() => [String])
    @IsArray()
    id: string[];
}