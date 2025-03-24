// utils/api.js
export const obtenerProductos = async () => {
    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                query {
                    obtenerProductos {
                        id
                        nombre
                        descripcion
                        precio
                        imagenes
                        categoria
                        promocion
                    }
                }
            `,
        }),
    });
    const data = await response.json();
    return data.data.obtenerProductos;
};
