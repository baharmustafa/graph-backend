import { LoginArguments } from "./login-arguments";
import { Context } from "./context";
import { User } from "./user-entity";
export declare class AuthResolver {
    currentUser(ctx: Context): Promise<User>;
    login({ email, password }: LoginArguments): Promise<any>;
}
