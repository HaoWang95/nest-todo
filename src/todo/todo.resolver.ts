import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class TodoResolver {

    @Query(() => String)
    public sayHello(): string{
        return "Hello World";
    }
}
