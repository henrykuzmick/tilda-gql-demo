import { GraphQLYogaError } from "graphql-yoga";
import axios from "axios";

export const Query = {
  myProfile: async (_, __, { token }) => {
    try {
      const res = await axios.get("/myprofile", {
        headers: {
          authorization: token,
        },
      });
      return {
        id: res.data.tildaid,
        ...res.data,
      };
    } catch (e) {
      console.log(e);
      throw new GraphQLYogaError("Could not fetch");
    }
  },

  organizations: async (_, __, { token }) => {
    try {
      const res = await axios.get("/organizations", {
        headers: {
          authorization: token,
        },
      });
      return res.data.map((org) => ({
        id: org.tildaid,
        ...org,
      }));
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },

  organization: async (_, { id }) => {
    return null;
  },
};
