require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const { PrismaClient } = require("@prisma/client");
const typeDefs = require("./schema/typeDefs"); // Asegurar la ruta correcta
const resolvers = require("./resolvers");

const prisma = new PrismaClient();

async function startServer() {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ prisma }),
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
