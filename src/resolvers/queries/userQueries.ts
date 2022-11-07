import fetch from "isomorphic-fetch";

const userQueries = {
  user: async (_, { id }) => {
    return null;
  },

  myProfile: async (_, __, { token }) => {
    // @ts-ignore
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    const res = await fetch("https://health.tilda.bio/api/studies", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));

    console.log(res);
    return null;
  },
};

export default userQueries;
