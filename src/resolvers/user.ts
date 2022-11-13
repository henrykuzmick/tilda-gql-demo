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

      const response: any = [];

      for (const org of res.data.organizations) {
        const organization = await axios.get(`/organizations/${org.orgId}`, {
          headers: {
            authorization: token,
          },
        });

        response.push({
          role: org.role,
          organization: {
            id: org.orgId,
            ...organization.data,
          },
        });

        return response;
      }
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },
};
