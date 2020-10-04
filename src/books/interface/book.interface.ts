import { Document }  from 'mongoose';

export interface Book extends Document {
    readonly name: string;
    readonly ean: string;
}