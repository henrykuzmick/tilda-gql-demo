import axios from "axios";

const userQueries = {
  user: async (_, { id }) => {
    return null;
  },

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
      throw new Error("Could not fetch");
    }
  },
};

export default userQueries;
