import { Book } from "../../entities/book-entity";
import { BookInput, EditBookInput } from "./book-arguments";
export declare class BookResolver {
    books(): Promise<Book[]>;
    book(_id: string): Promise<Book>;
    createBook(data: BookInput): Promise<Book>;
    deleteBook(_id: string): Promise<Book>;
    editBook(_id: string, data: EditBookInput): Promise<Book>;
}
