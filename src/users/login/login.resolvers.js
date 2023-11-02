import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../../client";

export default {
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await client.user.findUnique({
        where: { username },
      });
      if (!user) {
        return {
          ok: false,
          error: "User not found.",
        };
      }
      const verifiedUser = await bcrypt.compare(password, user.password);
      if (!verifiedUser) {
        return {
          ok: false,
          error: "Incorrect password",
        };
      }
      const token = await jwt.sign(
        {
          id: user.id,
        },
        process.env.SECRET_KEY
      );
      return {
        ok: true,
        token,
      };
    },
  },
};
