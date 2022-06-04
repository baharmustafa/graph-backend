import { ObjectType, InputType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"

@ObjectType()
export class Author {

  @Field()
  readonly _id: ObjectId;

  @Prop({required: true})
  @Field()
  fname: string;

  @Prop()
  @Field()
  lname: string;
}

export const AuthorModel = getModelForClass(Author, { schemaOptions:  {}})