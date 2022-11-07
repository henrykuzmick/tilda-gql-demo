import axios from "axios";

const organizationQueries = {
  organization: async (_, { id }) => {
    return null;
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
      throw new Error("Could not fetch");
    }
  },
};

export default organizationQueries;
