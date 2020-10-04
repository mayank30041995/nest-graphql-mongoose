import { Field, ID,  ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from 'class-validator'

@ObjectType()
export class BookType{

    @Field(() => ID)
    @IsString()
    readonly id?: string;
    @Field()
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @Field()
    readonly ean: string;
}