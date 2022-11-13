import { GraphQLYogaError } from "graphql-yoga";
import axios from "axios";

export const Mutation = {
  updateOrganization: async (_, { id, value }, { token }) => {
    try {
      const org = await axios.get(`/organizations/${id}`, {
        headers: {
          authorization: token,
        },
      });

      const res = await axios.put(
        `/organizations/${id}`,
        {
          ...org.data,
          ...value,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      return {
        id: res.data.tildaid,
        ...res.data,
      };
    } catch (e) {
      throw new GraphQLYogaError("Could not update");
    }
  },
};
