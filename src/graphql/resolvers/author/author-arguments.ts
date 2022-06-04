import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseAuthorInput {
  @Field()
  fname: string;

  @Field()
  lname: string;
}

@InputType()
export class AuthorInput extends BaseAuthorInput {
  @Field()
  _id: ObjectId;
}

@InputType()
export class EditAuthorInput {
  @Field({nullable: true})
  fname?: string;

  @Field({nullable: true})
  lname?: string;
}