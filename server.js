require("dotenv").config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./schema";

const server = new ApolloServer({
  schema,
});

const startApolloServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

startApolloServer();
