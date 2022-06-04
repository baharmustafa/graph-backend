import { ObjectId } from "mongodb";
export declare class Author {
    readonly _id: ObjectId;
    fname: string;
    lname: string;
}
export declare const AuthorModel: import("@typegoose/typegoose").ReturnModelType<typeof Author, import("@typegoose/typegoose/lib/types").BeAnObject>;
