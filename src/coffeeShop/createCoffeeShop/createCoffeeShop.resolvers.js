import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import client from "../../client";
import { protectedResolvers } from "../../users/users.util";
import { handleFile, processCategory } from "../coffeeShop.utils";

const createCoffeeShopResolver = async (
  _,
  { name, latitude, longitude, category, file },
  { loggedInUser }
) => {
  try {
    const shop = await client.coffeeShop.create({
      data: {
        name,
        latitude,
        longitude,
        user: {
          connect: {
            id: loggedInUser.id,
          },
        },
        categories: {
          connectOrCreate: processCategory(category),
        },
      },
    });
    if (file) {
      const photoUrl = await handleFile(file, loggedInUser.id);
      await client.coffeeShopPhoto.create({
        data: {
          url: photoUrl,
          shop: {
            connect: {
              id: shop.id,
            },
          },
        },
      });
    }
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
      error: `${error}`,
    };
  }
};

export default {
  Upload: GraphQLUpload,
  Mutation: {
    createCoffeeShop: protectedResolvers(createCoffeeShopResolver),
  },
};
