import { createServer } from "http";
import express from "express";
import morgan from "morgan";
import cors from "cors";

import { graphqlRouter } from "./routes/graphql";

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
