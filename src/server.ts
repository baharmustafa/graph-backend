import { ApolloServer } from "apollo-server-express"
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import express from "express"
import jwt from "express-jwt"; 
import "reflect-metadata";
import mongoose from "mongoose";
import http from "http"
import cors from "cors";
import bodyParser from 'body-parser';
import { getSchema } from "./schema";
import geoip from "geoip-lite";
import MobileDetect from "mobile-detect";
import dotenv from "dotenv";
import { Context } from "./graphql/resolvers/auth/context";

dotenv.config();

const app = express()
const PORT = 3001
app.use(express.json())
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

const graphQlPath = process.env.GRAPHQL_PATH;
const port = process.env.PORT;
const dbUrl = process.env.MONGODB_URL

const auth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  credentialsRequired: false,
})

mongoose.connect(dbUrl, {
    autoIndex: true,
  }).then(() => {
    console.log("connected to mongodb")
  }).catch((e) => {
    console.log(e);
  })
  
  async function startApolloServer() {

    const app = express();
    const httpServer = http.createServer(app);
  
    app.use(
      graphQlPath,
      cors({
        origin: '*'
      }),
      bodyParser.json(),
      auth
    )
      
    const schema = await getSchema();

    const server = new ApolloServer({
      schema,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
      introspection: true,
      context: ({req}) => {
          const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
          const context: Context = {
            req,
            user: req.user,
            ip,
            location: geoip.lookup(ip),
            md: new MobileDetect(req.headers['user-agent']),
          }
          return context;
      },
    
    });
    await server.start();
  
    server.applyMiddleware({ app, path: graphQlPath });
    await new Promise(resolve => httpServer.listen({ port }));
    
    console.log(`Server started at http://localhost:${port}/${graphQlPath}`)
    return { server, app}
  
  }
  
  startApolloServer()