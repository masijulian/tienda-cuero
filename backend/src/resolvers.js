const resolvers = {
    Query: {
        obtenerProductos: async (_, __, { prisma }) => {
            try {
                return await prisma.producto.findMany();
            } catch (error) {
                console.error("Error obteniendo productos:", error);
                throw new Error("Error obteniendo productos");
            }
        },
        obtenerProducto: async (_, { id }, { prisma }) => {
            try {
                return await prisma.producto.findUnique({ where: { id } });
            } catch (error) {
                console.error("Error obteniendo el producto:", error);
                throw new Error("Producto no encontrado");
            }
        },
    },
    Mutation: {
        crearProducto: async (_, args, { prisma }) => {
            try {
                return await prisma.producto.create({ data: args });
            } catch (error) {
                console.error("Error creando producto:", error);
                throw new Error("Error creando producto");
            }
        },
    },
};

module.exports = resolvers;
