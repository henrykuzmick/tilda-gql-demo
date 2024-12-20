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
      return res.data;
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },

  organizations: async (_, __, { token, organization }) => {
    try {
      const res = await axios.get("/organizations", {
        headers: {
          authorization: token,
          organization,
        },
      });

      return res.data;
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },

  organization: async (_, { id }, { token }) => {
    try {
      const res = await axios.get(`/organizations/${id}`, {
        headers: {
          authorization: token,
        },
      });

      return res.data;
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },

  studies: async (_, __, { token, organization }) => {
    try {
      const res = await axios.get("/studies", {
        params: {
          filter: "my-studies",
          limit: 30,
        },
        headers: {
          authorization: token,
          organization,
        },
      });

      return res.data;
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },

  study: async (_, { id }, { token }) => {
    try {
      const res = await axios.get(`/studies/${id}`, {
        headers: {
          authorization: token,
        },
      });

      return res.data;
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },

  sites: async (_, __, { token, organization }) => {
    try {
      const res = await axios.get("/sites", {
        headers: {
          authorization: token,
          organization,
        },
      });

      console.log(res.data);

      return res.data.sitesList;
    } catch (e) {
      console.log(e);
      throw new GraphQLYogaError("Could not fetch");
    }
  },
};
