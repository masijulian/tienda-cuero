// frontend/pages/[id].js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductoDetalle = ({ id }) => {
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query {
                        obtenerProducto(id: "${id}") {
                            id
                            nombre
                            descripcion
                            precio
                            imagenes
                        }
                    }
                `,
            }),
        })
            .then(response => response.json())
            .then(data => setProducto(data.data.obtenerProducto));
    }, [id]);

    if (!producto) return <div>Cargando...</div>;

    return (
        <div className="container">
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
            <Image src={producto.imagenes[0]} alt={producto.nombre} />
        </div>
    );
};

ProductoDetalle.getInitialProps = async ({ query }) => {
    return { id: query.id };
};

export default ProductoDetalle;
