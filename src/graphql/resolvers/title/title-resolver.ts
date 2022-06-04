import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Title, TitleModel} from "../../entities/title-entity";
import { BaseTitleInput } from "./title-arguments";

@Resolver()
export class TitleResolver {

  @Query(returns => [Title])
  async titles():Promise<Title[]> {
    return await TitleModel.find({})
  }

  @Query(returns => Title)
  async title(@Arg("_id") _id: string):Promise<Title> {
    return await TitleModel.findById(_id);
  }

  @Mutation(returns => Title)
  async createTitle(@Arg("data") data: BaseTitleInput):Promise<Title> {
    const newTitle = new TitleModel(data);
    await newTitle.save();
    return newTitle;
  }

  @Mutation(returns => Title)
  async deleteTitle(@Arg("_id") _id: string):Promise<Title> {
    return await TitleModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Title)
  async editTitle(@Arg("_id") _id: string, @Arg("data") data: BaseTitleInput):Promise<Title> {
    return await TitleModel.findByIdAndUpdate(_id, data, {new: true});
  }

}