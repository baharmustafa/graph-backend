import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseGenreInput {
    
  @Field()
  description: string;
}

@InputType()
export class GenreInput extends BaseGenreInput {
  @Field()
  _id: ObjectId;
}