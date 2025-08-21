// app/components/FeaturedProducts.tsx
"use client";

import React from "react";
import Image from "next/image";
import products from "./productsData";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const FeaturedProducts = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-8">PRODUCTOS DESTACADOS</h2>
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4 flex">
            {products.map((product) => (
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
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-8">BUSOS</h2>
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4 flex">
            {products.map((product) => (
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
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-8">CAMISAS</h2>
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4 flex">
            {products.map((product) => (
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
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-8">PANTALONES</h2>
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4 flex">
            {products.map((product) => (
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
      
    </>
  );
};

export default FeaturedProducts;


