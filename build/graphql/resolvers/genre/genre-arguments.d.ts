import { ObjectId } from "mongodb";
export declare class BaseGenreInput {
    description: string;
}
export declare class GenreInput extends BaseGenreInput {
    _id: ObjectId;
}
