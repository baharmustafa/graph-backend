import { ObjectType, InputType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"

@ObjectType()
export class Title {

  @Field()
  readonly _id: ObjectId;

  @Prop({required: true})
  @Field()
  name: string;

  
}

export const TitleModel = getModelForClass(Title, { schemaOptions:  {}})