import { TitleInput } from "../title/title-arguments";
import { AuthorInput } from "../author/author-arguments";
import { GenreInput } from "../genre/genre-arguments";
export declare class BookInput {
    title: TitleInput;
    genre: GenreInput;
    author: AuthorInput;
}
export declare class EditBookInput {
    title?: TitleInput;
    genre?: GenreInput;
    author?: AuthorInput;
}
