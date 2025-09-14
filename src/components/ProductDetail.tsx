"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
  };
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [imgSrc, setImgSrc] = useState(product.imageUrl);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      {/* Imagen del producto */}
      <Image
        src={imgSrc}
        alt={product.name}
        width={400}
        height={400}
        className="w-full h-96 object-contain rounded-lg bg-gray-100"
        onError={() => setImgSrc("/images/placeholder.jpg")} // fallback
        priority
      />

      {/* Nombre */}
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
        {product.name}
      </h2>

      {/* Precio */}
      <p className="text-2xl font-semibold text-blue-600 mb-4">
        ${product.price.toFixed(2)}
      </p>

      {/* Descripción */}
      <p className="text-gray-700 leading-relaxed mb-6">
        {product.description}
      </p>

      {/* Disponibilidad */}
      <div className="flex items-center text-gray-600">
        <span className="font-medium">Disponibilidad:</span>
        <span
          className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold ${
            product.stock > 0
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {product.stock > 0 ? `En Stock (${product.stock})` : "Agotado"}
        </span>
      </div>
    </div>
  );
}
