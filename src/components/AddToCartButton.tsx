"use client";

import { useState } from "react";
import { useCart } from "@/context/cartContext";

interface Product {
  id: number;
  name: string;
  price?: number;
  precio?: number;
  image?: string;
}

export default function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (!product) return;
    addToCart(product, quantity); // ✅ pasa el objeto completo
  };

  return (
    <div className="flex items-center gap-3 mt-3">
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-16 text-center border rounded-md"
      />
      <button
        onClick={handleAdd}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg transition"
      >
        Agregar al carrito 🛒
      </button>
    </div>
  );
}
