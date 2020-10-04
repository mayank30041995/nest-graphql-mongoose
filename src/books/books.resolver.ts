import {Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BooksService } from "./books.service";
import { BookType } from "./dto/add-book.dto";
import { BookInput } from "./inputs/input-books.input";

@Resolver()
export class BooksResolver {
    constructor(private readonly bookService: BooksService){}

    @Query(()=> BookType)
    async book(
        @Args('ean')  ean: string ): Promise<BookType>{
            return this.bookService.findOne(ean);
    }

    @Mutation(()=> BookType)
    async addBook(@Args('input') input: BookInput): Promise<BookInput> {
        return this.bookService.addBook(input);
    }
}

