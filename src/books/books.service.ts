import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BookType } from "./dto/add-book.dto";
import { BookInput } from "./inputs/input-books.input";
import { Book } from "./interface/book.interface";

@Injectable()
export class BooksService {
    constructor(@InjectModel('Book') private bookModel: Model<Book>) {}

    async addBook(addBookDto: BookInput): Promise<BookType>{
        const book= new this.bookModel(addBookDto);
        return await book.save();
    }

    async findOne(ean: string): Promise<BookType>{
        return await this.bookModel.findOne({ean})
    }
}