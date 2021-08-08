import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class ToDo{
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    @IsNotEmpty()
    id: number;

    @Column({nullable: false})
    @Field({nullable: false})
    title: string;

    @Column({nullable: true})
    @Field({nullable: true})
    content: string;
}