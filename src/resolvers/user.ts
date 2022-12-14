import { GraphQLYogaError } from "graphql-yoga";
import axios from "axios";

export const User = {
  orgMemberships: async (_, __, { token }) => {
    try {
      const res = await axios.get("/myprofile", {
        headers: {
          authorization: token,
        },
      });

      return res.data.organizations;
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },
};
