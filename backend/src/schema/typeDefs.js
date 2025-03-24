const { gql } = require("apollo-server-express");

const typeDefs = gql`
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

    editarProducto(id: String!, datos: EditarProductoInput!): Producto
    eliminarProducto(id: String!): Producto
  }

  input EditarProductoInput {
    nombre: String
    descripcion: String
    precio: Float
    imagenes: [String!]
    categoria: String
    promocion: Boolean
  }
`;

module.exports = typeDefs;
