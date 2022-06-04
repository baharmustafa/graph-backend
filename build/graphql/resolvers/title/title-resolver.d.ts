import { Title } from "../../entities/title-entity";
import { BaseTitleInput } from "./title-arguments";
export declare class TitleResolver {
    titles(): Promise<Title[]>;
    title(_id: string): Promise<Title>;
    createTitle(data: BaseTitleInput): Promise<Title>;
    deleteTitle(_id: string): Promise<Title>;
    editTitle(_id: string, data: BaseTitleInput): Promise<Title>;
}
