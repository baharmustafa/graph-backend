import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Author, AuthorModel } from "../../entities/author-entity";
import { BaseAuthorInput, EditAuthorInput } from "./author-arguments";

@Resolver()
export class AuthorResolver {

  @Query(returns => [Author])
  async authors():Promise<Author[]> {
    return await AuthorModel.find({})
  }

  @Query(returns => Author)
  async author(@Arg("_id") _id: string):Promise<Author> {
    return await AuthorModel.findById(_id);
  }

  @Mutation(returns => Author)
  async createAuthor(@Arg("data") data: BaseAuthorInput):Promise<Author> {
    const newAuthor = new AuthorModel(data);
    await newAuthor.save();
    return newAuthor;
  }

  @Mutation(returns => Author)
  async deleteAuthor(@Arg("_id") _id: string):Promise<Author> {
    return await AuthorModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Author)
  async editAuthor(@Arg("_id") _id: string, @Arg("data") data: EditAuthorInput):Promise<Author> {
    return await AuthorModel.findByIdAndUpdate(_id, data, {new: true});
  }

}