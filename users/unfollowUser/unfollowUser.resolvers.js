import client from "../../client";
import { protectedResolvers } from "../users.util";

export default {
  Mutation: {
    unfollowUser: protectedResolvers(
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
              disconnect: {
                username,
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
