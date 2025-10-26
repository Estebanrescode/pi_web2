// src/components/ProductCard.tsx
"use client";

import React, { useState } from "react";
import { useCart } from "@/context/cartContext";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  return (
    <div className="border p-4 rounded shadow">
      <Image src={product.imageUrl} alt={product.name} width={200} height={200} />
      <h3 className="font-bold">{product.name}</h3>
      <p>${product.price.toLocaleString()}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className="border p-1 w-16"
      />
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ProductCard;