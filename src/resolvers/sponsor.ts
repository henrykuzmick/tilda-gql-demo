import { GraphQLYogaError } from "graphql-yoga";
import axios from "axios";
import fs from "fs";

export const Sponsor = {
  logo: async (obj, __, { token }) => {
    try {
      const res = await axios.get(`/sponsorLogos/${obj.tildaid}`, {
        responseType: "arraybuffer",
        headers: {
          authorization: token,
          accept: "image/png",
        },
      });

      const logo = Buffer.from(res.data).toString("base64");

      return `data:image/png;base64, ${logo}`;
    } catch (e) {
      throw new GraphQLYogaError("Could not fetch");
    }
  },
};
