import Query from "./queries";
import relationships from "./relationships";

const resolversMap = {
  Query,
  ...relationships,
};

export default resolversMap;
