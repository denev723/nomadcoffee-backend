import client from "../../client";

export default {
  Query: {
    seeProfile: (_, { username }) =>
      client.user.findFirst({
        where: {
          username,
        },
      }),
  },
};
