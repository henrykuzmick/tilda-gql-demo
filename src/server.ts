import { createServer } from "http";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import axios from "axios";

import { graphqlRouter } from "./routes/graphql";

axios.defaults.baseURL = "https://eap-demo.dev.tilda.pizza/api";
axios.defaults.headers.common["accept"] = "application/json";
axios.defaults.headers.common["accept-encoding"] = "gzip, deflate, br";
axios.defaults.headers.common["accept-language"] = "en-GB,en-US;q=0.9,en;q=0.8";

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(graphqlRouter);

export const startServer = (port: number, onStart: () => void) => {
  const server = createServer(app);
  server.listen(port, () => {
    // setupSubscriptions(server);
    onStart();
  });
};
