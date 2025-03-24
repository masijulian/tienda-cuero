const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Producto {
    id: ID!
    nombre: String!
    descripcion: String
    precio: Float!
    imagenes: [String]
    categoria: String
    promocion: Boolean
  }

  type Query {
    obtenerProductos: [Producto]
    obtenerProducto(id: ID!): Producto
  }

  type Mutation {
    crearProducto(nombre: String!, descripcion: String, precio: Float!, imagenes: [String], categoria: String, promocion: Boolean): Producto
    editarProducto(id: ID!, nombre: String, descripcion: String, precio: Float, imagenes: [String], categoria: String, promocion: Boolean): Producto
    eliminarProducto(id: ID!): Producto
  }
`;

module.exports = typeDefs;
