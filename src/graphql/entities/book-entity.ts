import { ObjectType, InputType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"

import { Title } from "./title-entity";
import { Genre } from "./genre-entity";
import { Author } from "./author-entity";

@ObjectType()
export class Book {

  @Field()
  readonly _id: ObjectId;

  @Field(type => Title)
  @Prop({require: true})
  title: Title

  @Field(type => Genre)
  @Prop({require: true})
  genre: Genre
  
  @Field(type => Author)
  @Prop({require: true})
  author: Author


}

export const BookModel = getModelForClass(Book, { schemaOptions:  {}})