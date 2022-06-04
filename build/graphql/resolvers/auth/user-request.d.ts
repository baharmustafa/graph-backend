import { User } from "./user-entity";
declare module "express" {
    interface Request {
        user: User;
    }
}
