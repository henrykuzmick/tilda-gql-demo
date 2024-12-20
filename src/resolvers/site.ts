import { GraphQLYogaError } from "graphql-yoga";
import axios from "axios";

export const Site = {
  studies: async ({ tildaid }, __, { token, organization }) => {
    try {
      const res = await axios.get(`/sites/${tildaid}/studies`, {
        headers: {
          authorization: token,
          organization,
        },
      });

      return res.data.studiesList;
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },
};
