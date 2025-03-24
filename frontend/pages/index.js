// frontend/pages/index.js
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const HomePage = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/graphql', {
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
                            precio
                            imagenes
                        }
                    }
                `,
            }),
        })
            .then(response => response.json())
            .then(data => setProductos(data.data.obtenerProductos));
    }, []);

    return (
        <div className="container">
            {/* Header */}
            <header className="header">
                <h1>Bienvenido a la Tienda de Muebles de Cuero</h1>
            </header>

            {/* Product Section */}
            <section className="productos">
                <h2>Productos Destacados</h2>
                <div className="productos-lista">
                    {productos.map(producto => (
                        <div key={producto.id} className="producto-card">
                            {/* Utilizamos Image de Next.js */}
                            <Image
                                src={producto.imagenes[0]} // Asegúrate de que la URL esté correcta
                                alt={producto.nombre}
                                width={500}
                                height={500}
                                quality={75}  // Puedes ajustar la calidad de la imagen
                            />
                            <h3>{producto.nombre}</h3>
                            <p>${producto.precio}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 Tienda de Muebles de Cuero. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default HomePage;
