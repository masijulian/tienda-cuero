const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Crear un producto de prueba
    const producto = await prisma.producto.create({
        data: {
            nombre: "Cartera de cuero",
            descripcion: "Cartera hecha a mano",
            precio: 99.99,
            imagenes: ["https://ejemplo.com/imagen.jpg"],
            categoria: "Accesorios",
            promocion: false,
        },
    });
    console.log("Producto creado:", producto);

    // Consultar todos los productos
    const productos = await prisma.producto.findMany();
    console.log("Productos:", productos);
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
