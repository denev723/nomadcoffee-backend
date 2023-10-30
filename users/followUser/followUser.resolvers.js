import client from "../../client";
import { protectedResolvers } from "../users.util";

export default {
  Mutation: {
    followUser: protectedResolvers(
      async (_, { username }, { loggedInUser }) => {
        const checkedUser = await client.user.findUnique({
          where: {
            username,
          },
        });
        if (!checkedUser) {
          return {
            ok: false,
            error: "That user does not exist.",
          };
        }
        await client.user.update({
          where: {
            id: loggedInUser.id,
          },
          data: {
            follwing: {
              connect: {
                username: username,
              },
            },
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};
