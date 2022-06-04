import { Genre } from "../../entities/genre-entity";
import { BaseGenreInput } from "./genre-arguments";
export declare class GenreResolver {
    genres(): Promise<Genre[]>;
    genre(_id: string): Promise<Genre>;
    createGenre(data: BaseGenreInput): Promise<Genre>;
    deleteGenre(_id: string): Promise<Genre>;
    editGenre(_id: string, data: BaseGenreInput): Promise<Genre>;
}
