
import { buildSchema } from "type-graphql";
import { TypegooseMiddleware } from "./typegoose-middleware";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";

import * as path from "path"
import { TitleResolver } from "./graphql/resolvers/title/title-resolver";
import { GenreResolver } from "./graphql/resolvers/genre/genre-resolver";
import { BookResolver } from "./graphql/resolvers/book/book-resolver";
import { AuthorResolver } from "./graphql/resolvers/author/author-resolver";
import { AuthResolver } from "./graphql/resolvers/auth/auth-resolver";
import { authChecker } from "./graphql/resolvers/auth/auth-checker";

export const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [
            AuthResolver,
            TitleResolver,
            GenreResolver,
            AuthorResolver,
            BookResolver            
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        // use document converting middleware
        globalMiddlewares: [TypegooseMiddleware],
        // use ObjectId scalar mapping
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
        authChecker
      });
    return schema
}