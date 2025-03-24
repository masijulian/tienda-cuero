const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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
        editarProducto: async (_, { id, ...datos }) => {
            return await prisma.producto.update({ where: { id }, data: datos });
        },
        eliminarProducto: async (_, { id }) => {
            return await prisma.producto.delete({ where: { id } });
        },
    },
};

module.exports = resolvers;
