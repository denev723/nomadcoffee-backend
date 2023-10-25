import bcrypt from "bcrypt";
import client from "../client";

export default {
  Mutation: {
    createAccount: async (_, { username, email, name, password }) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });
        if (existingUser) {
          return {
            ok: false,
            error: "Check that the username / email aren't taken",
          };
        }
        const uglyPassword = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            username,
            email,
            name,
            password: uglyPassword,
          },
        });
        return {
          ok: true,
        };
      } catch {
        return {
          ok: false,
          error: "Can't create account",
        };
      }
    },
  },
};
