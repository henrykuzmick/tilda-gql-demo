import { GraphQLYogaError } from "graphql-yoga";
import axios from "axios";

export const Organization = {
  orgMemberships: async (obj, __, { token }) => {
    try {
      const res = await axios.get(`/organizations/${obj.id}/members`, {
        headers: {
          authorization: token,
        },
      });

      return res.data;
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },
};
