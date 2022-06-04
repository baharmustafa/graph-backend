import { ObjectId } from "mongodb";
export declare class Genre {
    readonly _id: ObjectId;
    description: string;
}
export declare const GenreModel: import("@typegoose/typegoose").ReturnModelType<typeof Genre, import("@typegoose/typegoose/lib/types").BeAnObject>;
