import * as mongoose from 'mongoose'

export const BooksSchema = new mongoose.Schema({
    name: String,
    ean: String
})