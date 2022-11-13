import { GraphQLYogaError } from "graphql-yoga";
import axios from "axios";

export const OrgMembership = {
  organization: async (obj, __, { token }) => {
    try {
      const res = await axios.get(`/organizations/${obj.orgId}`, {
        headers: {
          authorization: token,
        },
      });

      return {
        id: res.data.tildaid,
        ...res.data,
      };
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },

  user: async (obj, __, { token }) => {
    try {
      const res = await axios.get(`/users/${obj.userId}`, {
        headers: {
          authorization: token,
        },
      });

      return {
        id: res.data.tildaid,
        ...res.data,
      };
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },
};
