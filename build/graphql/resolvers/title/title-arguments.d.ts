import { ObjectId } from "mongodb";
export declare class BaseTitleInput {
    name: string;
}
export declare class TitleInput extends BaseTitleInput {
    _id: ObjectId;
}
