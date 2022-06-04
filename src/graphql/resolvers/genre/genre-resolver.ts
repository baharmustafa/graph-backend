import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Genre, GenreModel } from "../../entities/genre-entity";
import { BaseGenreInput } from "./genre-arguments";

@Resolver()
export class GenreResolver {

  @Query(returns => [Genre])
  async genres():Promise<Genre[]> {
    return await GenreModel.find({})
  }

  @Query(returns => Genre)
  async genre(@Arg("_id") _id: string):Promise<Genre> {
    return await GenreModel.findById(_id);
  }

  @Mutation(returns => Genre)
  async createGenre(@Arg("data") data: BaseGenreInput):Promise<Genre> {
    const newGenre = new GenreModel(data);
    await newGenre.save();
    return newGenre;
  }

  @Mutation(returns => Genre)
  async deleteGenre(@Arg("_id") _id: string):Promise<Genre> {
    return await GenreModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Genre)
  async editGenre(@Arg("_id") _id: string, @Arg("data") data: BaseGenreInput):Promise<Genre> {
    return await GenreModel.findByIdAndUpdate(_id, data, {new: true});
  }

}