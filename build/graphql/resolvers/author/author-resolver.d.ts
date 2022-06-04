import { Author } from "../../entities/author-entity";
import { BaseAuthorInput, EditAuthorInput } from "./author-arguments";
export declare class AuthorResolver {
    countries(): Promise<Author[]>;
    author(_id: string): Promise<Author>;
    createAuthor(data: BaseAuthorInput): Promise<Author>;
    deleteAuthor(_id: string): Promise<Author>;
    editAuthor(_id: string, data: EditAuthorInput): Promise<Author>;
}
