import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class BookInput {
    @Field()
    readonly name: string;
    
    @Field()
    readonly ean: string;
}