import client from "../../client";
export default {
  Query: {
    seeProfile: (_, { username, followersLastId, followingLastId }) =>
      client.user.findUnique({
        where: {
          username,
        },
        include: {
          followers: {
            take: 5,
            skip: followersLastId ? 1 : 0,
            ...(followersLastId && { cursor: { id: followersLastId } }),
          },
          following: {
            take: 5,
            skip: followingLastId ? 1 : 0,
            ...(followingLastId && { cursor: { id: followingLastId } }),
          },
        },
      }),
  },
};
