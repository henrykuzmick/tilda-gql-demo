import { createServer } from "@graphql-yoga/node";
import { readFileSync } from "fs";
import { join } from "path";
import axios from "axios";

import { resolvers } from "./resolvers";

const typeDefs = readFileSync(join(process.cwd(), "./schema.graphql"), {
  encoding: "utf-8",
});

export const gqlServer = createServer({
  endpoint: "/",
  graphiql: true,
  context: async ({ req }) => {
    return {
      token: req.headers.authorization,
    };
  },
  schema: {
    typeDefs,
    resolvers,
  },
});

axios.defaults.baseURL = "https://final-test.dev.tilda.pizza/api";
axios.defaults.headers.common["accept"] = "application/json";
axios.defaults.headers.common["accept-encoding"] = "gzip, deflate, br";
axios.defaults.headers.common["accept-language"] = "en-GB,en-US;q=0.9,en;q=0.8";

gqlServer.start();
