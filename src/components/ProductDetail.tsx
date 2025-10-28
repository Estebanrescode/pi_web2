"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/cartContext";
import { useFavorites } from "@/context/favoritesContext";
import { Heart, ShoppingCart } from "lucide-react";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [quantity, setQuantity] = useState(1);

  const favoriteActive = isFavorite(product.id);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) setQuantity(value);
  };

  return (
    <div className="max-w-5xl mx-auto bg-orange-600 dark:bg-violet-700 text-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row p-6 gap-6">
      {/* Imagen */}
      <div className="flex-1 flex justify-center items-center bg-white p-4 rounded-lg">
        <Image
          src={product.imageUrl ?? "https://placehold.co/600x400"}
          alt={product.name}
          width={400}
          height={400}
          className="object-contain rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-sm text-gray-200 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-6">
            ${product.price?.toLocaleString()}
          </p>
        </div>

        {/* Acciones */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="flex items-center gap-2">
            <label className="text-sm">Cantidad:</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 text-black text-center rounded border border-gray-400"
            />
          </div>

          {/* Botón agregar al carrito */}
          <button
            onClick={() => addToCart(product, quantity)}
            className="flex items-center gap-2 bg-white hover:bg-yellow-300 text-black px-4 py-2 rounded-lg transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            <ShoppingCart className="w-5 h-5" />
            Agregar al carrito
          </button>

          {/* Botón favorito */}
          <button
            onClick={() => toggleFavorite(product)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-transform duration-200 hover:scale-105 ${
              favoriteActive
                ? "bg-pink-600 hover:bg-pink-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            <Heart className={`w-5 h-5 ${favoriteActive ? "fill-current" : ""}`} />
            {favoriteActive ? "Quitar" : "Favorito"}
          </button>
        </div>
      </div>
    </div>
  );
}
