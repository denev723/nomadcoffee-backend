import client from "../../client";

export default {
  Query: {
    seeFollowers: async (_, { username, page }) => {
      const checkedUser = await client.user.findUnique({
        where: { username },
        select: {
          id: true,
        },
      });
      if (!checkedUser) {
        return {
          ok: false,
          error: "User not found.",
        };
      }
      const followers = await client.user
        .findUnique({
          where: { username },
        })
        .followers({
          take: 5,
          skip: lastId ? 1 : 0,
          ...(lastId && { cursor: { id: lastId } }),
        });
      return {
        ok: true,
        followers,
      };
    },
  },
};
