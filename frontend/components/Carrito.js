/* eslint-disable @typescript-eslint/no-unused-vars */
// frontend/components/Carrito.js
import React, { useState, useEffect } from 'react';

const Carrito = () => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter((producto) => producto.id !== id));
    };

    return (
        <div className="carrito">
            <h2>Carrito</h2>
            {carrito.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ) : (
                <ul>
                    {carrito.map((producto) => (
                        <li key={producto.id}>
                            {producto.nombre} - ${producto.precio}
                            <button onClick={() => eliminarDelCarrito(producto.id)}>
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Carrito;
