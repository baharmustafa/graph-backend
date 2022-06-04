import { MaxLength, MinLength, Min, Max } from "class-validator";
import { Field, InputType } from "type-graphql";
import { TitleInput } from "../title/title-arguments";
import { AuthorInput } from "../author/author-arguments";
import { GenreInput } from "../genre/genre-arguments";

@InputType()
export class BookInput {
  @Field(type => TitleInput)
  title: TitleInput

  @Field(type => GenreInput)
  genre: GenreInput;

  @Field(type => AuthorInput)
  author: AuthorInput;

}

@InputType()
export class EditBookInput {
  @Field(type => TitleInput, {nullable: true})
  title?: TitleInput

  @Field(type => GenreInput, {nullable: true})
  genre?: GenreInput;

  @Field(type => AuthorInput, {nullable: true})
  author?: AuthorInput;

}