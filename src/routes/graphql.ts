import { graphqlHTTP } from "express-graphql";
import express from "express";

import schema from "../schema";

export const graphqlRouter = express.Router();

graphqlRouter.use(
  "/graphql",
  graphqlHTTP((req) => ({
    schema,
    graphiql: false,
    context: {
      token: req.headers.authorization,
    },
  }))
);
