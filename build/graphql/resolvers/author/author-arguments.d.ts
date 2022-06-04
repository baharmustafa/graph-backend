import { ObjectId } from "mongodb";
export declare class BaseAuthorInput {
    fname: string;
    lname: string;
}
export declare class AuthorInput extends BaseAuthorInput {
    _id: ObjectId;
}
export declare class EditAuthorInput {
    fname?: string;
    lname?: string;
}
