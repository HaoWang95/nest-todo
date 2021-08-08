import { CreateTodoInput } from './create-todo.input';
import { PartialType } from '@nestjs/mapped-types';
import { Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

export class UpdateTodoInput extends PartialType(CreateTodoInput) {
  @Field()
  id: string;

  @Field()
  @IsOptional()
  title: string;

  @Field()
  @IsOptional()
  content: string;

  @Field()
  @IsOptional()
  isSubscribed?:boolean;
}
