import { useState, useMemo } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Lista de productos con sus respectivas categorías e imágenes
const products = [
    { id: 1, name: "Silla de Cuero", category: "Sillas", price: "$50,000", image: "/images/1.jpg" },
    { id: 2, name: "Sillón Clásico", category: "Sillones", price: "$120,000", image: "/images/2.jpg" },
    { id: 3, name: "Banqueta Alta", category: "Banquetas", price: "$30,000", image: "/images/3.jpg" },
    { id: 4, name: "Bolso de Cuero", category: "Accesorios", price: "$25,000", image: "/images/4.jpg" },
];

// Categorías disponibles para filtrar los productos
const categories = ["Todos", "Sillas", "Sillones", "Banquetas", "Accesorios"];

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    // Optimizamos el filtrado de productos con useMemo
    const filteredProducts = useMemo(() => {
        return selectedCategory === "Todos"
            ? products
            : products.filter((p) => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Encabezado con gradiente y tipografía elegante */}
            <header className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 text-white py-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-center tracking-tight">
                    Tienda de Cuero
                </h1>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Navegación de categorías */}
                <nav className="mb-10">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                aria-label={`Filtrar por ${cat}`} // Mejora de accesibilidad
                                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === cat
                                    ? "bg-amber-700 text-white shadow-lg scale-105"
                                    : "bg-white text-amber-900 border border-amber-200 hover:bg-amber-50 hover:scale-105"
                                    }`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </nav>

                {/* Cuadrícula de productos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <Card
                            key={product.id}
                            className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 max-w-xs mx-auto"
                        >
                            {/* Contenedor de la imagen ajustado */}
                            <div className="relative w-full h-40 overflow-hidden flex items-center justify-center">
                                {product.image && (
                                    <Image
                                        src={product.image.trim()}
                                        alt={product.name}
                                        width={160}
                                        height={160}
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                )}
                            </div>
                            {/* Contenido de la tarjeta */}
                            <CardContent className="p-4 text-center">
                                <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
                                    {product.name}
                                </h2>
                                <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                                <p className="text-amber-700 font-bold text-lg">{product.price}</p>
                                <Button
                                    className="mt-3 w-full bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-300 text-sm py-1"
                                >
                                    Ver Detalles
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}