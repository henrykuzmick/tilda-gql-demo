import { GraphQLYogaError } from "graphql-yoga";
import axios from "axios";

let sponsors: any[] | null = null;

export const Study = {
  sponsor: async (obj, __, { token }) => {
    if (!obj.sponsorid) {
      return null;
    }

    try {
      if (!sponsors) {
        const res = await axios.get(`/sponsors`, {
          headers: {
            authorization: token,
          },
        });

        sponsors = res.data.result;
        // console.log(sponsors);
      }

      const sponsor = sponsors?.find(
        (sponsor) => sponsor.tildaid === obj.sponsorid
      );

      return {
        ...sponsor,
        id: sponsor.tildaid,
      };
    } catch (e) {
      console.log(e);
      throw new GraphQLYogaError("Could not fetch");
    }
  },
};
