import { ObjectId } from "mongodb";
import { Title } from "./title-entity";
import { Genre } from "./genre-entity";
import { Author } from "./author-entity";
export declare class Book {
    readonly _id: ObjectId;
    title: Title;
    genre: Genre;
    author: Author;
}
export declare const BookModel: import("@typegoose/typegoose").ReturnModelType<typeof Book, import("@typegoose/typegoose/lib/types").BeAnObject>;
