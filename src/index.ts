import "babel-polyfill";
import { startServer } from "./server";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4000;

startServer(PORT, () => {
  console.info(`Listening on PORT ${PORT}...`);
});
