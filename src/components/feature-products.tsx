// app/components/FeaturedProducts.tsx
"use client";

import React from "react";
import Image from "next/image";
import products from "./productsData";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { usePathname } from "next/navigation";

const renderCategory = (title: string, category: string) => {
  const filteredProducts = products.filter((p) => p.category === category);

  if (filteredProducts.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8">{title.toUpperCase()}</h2>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4 flex">
          {filteredProducts.map((product) => (
            <CarouselItem key={product.id} className="p-2 md:basis-1/4">
              <div className="bg-auto rounded-lg shadow-md p-4 text-center shadow-orange-600 dark:shadow-violet-600 cursor-pointer">
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

const FeaturedProducts = () => {
  const pathname = usePathname();

  // ✅ En la página de inicio solo mostrar productos destacados
  if (pathname === "/") {
    return renderCategory("Productos Destacados", "destacados");
  }

  // ✅ En otras páginas mostrar todas las categorías
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
