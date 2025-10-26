"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { usePathname } from "next/navigation";

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
}

const FeaturedProducts = () => {
  const pathname = usePathname();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔹 Cargar productos desde la API REST
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/products");
        if (!res.ok) {
          throw new Error(`Error ${res.status}: No se pudo cargar productos`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (err: unknown) {
        console.error("❌ Error cargando productos:", err);
        setError("No se pudieron cargar los productos. Intenta más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 🔹 Renderiza una categoría específica
  const renderCategory = (title: string, category: string) => {
    const filteredProducts = products.filter((p) => p.category === category);

    if (filteredProducts.length === 0) return null;

    return (
      <div key={category} className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-8">{title.toUpperCase()}</h2>
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4 flex">
            {filteredProducts.map((product) => (
              <CarouselItem key={product.id} className="p-2 md:basis-1/4">
                <div className="bg-auto rounded-lg shadow-md p-4 text-center shadow-orange-600 dark:shadow-violet-600 cursor-pointer hover:scale-105 transition-transform">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="mx-auto rounded-lg object-cover bg-auto"
                  />
                  <h4 className="mt-4 font-semibold">{product.name}</h4>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  };

  // 🔹 Estado de carga o error
  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Cargando productos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  // 🔹 Mostrar productos destacados solo en inicio
  if (pathname === "/") {
    return renderCategory("Productos Destacados", "destacados");
  }

  // 🔹 Mostrar todas las categorías en otras páginas
  return (
    <>
      {renderCategory("Productos Destacados", "destacados")}
      {renderCategory("Buzos", "buzos")}
      {renderCategory("Camisetas", "camisas")}
      {renderCategory("Pantalones", "pantalones")}
      {renderCategory("Accesorios", "accesorios")}
    </>
  );
};

export default FeaturedProducts;
