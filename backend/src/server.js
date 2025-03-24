// backend/src/server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Define el esquema GraphQL
const typeDefs = /* GraphQL */ `
  type Producto {
    id: String!
    nombre: String!
    descripcion: String
    precio: Float!
    imagenes: [String!]!
    categoria: String
    promocion: Boolean!
  }

  type Query {
    obtenerProductos: [Producto!]!
    obtenerProducto(id: String!): Producto
  }

  type Mutation {
    crearProducto(
      nombre: String!
      descripcion: String
      precio: Float!
      imagenes: [String!]!
      categoria: String
      promocion: Boolean
    ): Producto
  }
`;

// Define los resolvers usando Prisma
const resolvers = {
    Query: {
        obtenerProductos: async () => {
            return await prisma.producto.findMany();
        },
        obtenerProducto: async (_, { id }) => {
            return await prisma.producto.findUnique({ where: { id } });
        },
    },
    Mutation: {
        crearProducto: async (_, args) => {
            return await prisma.producto.create({ data: args });
        },
    },
};

async function startServer() {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startServer();
