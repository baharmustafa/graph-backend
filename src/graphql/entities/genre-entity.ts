import { ObjectType, InputType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"

@ObjectType()
export class Genre {

  @Field()
  readonly _id: ObjectId;

  @Prop()
  @Field()
  description: string;
}

export const GenreModel = getModelForClass(Genre, { schemaOptions:  {}})