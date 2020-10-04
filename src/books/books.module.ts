import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BooksSchema } from "./books.schema";
import { BooksResolver } from "./books.resolver";
import { BooksService } from "./books.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Book', schema: BooksSchema}])],
    providers: [BooksResolver, BooksService]
})

export class BooksModule {}