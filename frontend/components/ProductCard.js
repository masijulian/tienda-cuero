// components/ProductCard.js
import React from 'react';

const ProductCard = ({ producto }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
                src={producto.imagenes[0]}
                alt={producto.nombre}
                className="w-full h-64 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{producto.nombre}</h3>
                <p className="mt-2 text-gray-600">{producto.descripcion}</p>
                <p className="mt-4 text-xl text-blue-600">${producto.precio}</p>
                <button className="mt-6 bg-blue-800 text-white py-2 px-4 rounded-lg">
                    Ver más
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
