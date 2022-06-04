import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseTitleInput {
  @Field()
  name: string;

}

@InputType()
export class TitleInput extends BaseTitleInput {
  @Field()
  _id: ObjectId;
}