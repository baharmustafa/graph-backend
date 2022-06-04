import { ObjectId } from "mongodb";
export declare class Title {
    readonly _id: ObjectId;
    name: string;
}
export declare const TitleModel: import("@typegoose/typegoose").ReturnModelType<typeof Title, import("@typegoose/typegoose/lib/types").BeAnObject>;
