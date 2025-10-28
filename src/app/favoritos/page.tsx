"use client";

import { useFavorites } from "@/context/favoritesContext";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import Link from "next/link";

export default function FavoritosPage() {
  const { favoriteItems, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  if (favoriteItems.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          No tienes productos en favoritos ❤️
        </h1>
        <Link
          href="/catalogo"
          className="mt-6 inline-block bg-orange-600 dark:bg-violet-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
        >
          Ir al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-8 text-center text-orange-600 dark:text-yellow-400">
        Mis Favoritos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {favoriteItems.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-violet-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={product.imageUrl ?? "https://placehold.co/600x400"}
              alt={product.name}
              width={500}
              height={400}
              className="w-full h-72 object-contain bg-gray-100 dark:bg-gray-700"
            />

            <div className="p-5 flex flex-col items-center text-center text-gray-900 dark:text-gray-100">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 line-clamp-3">
                {product.description}
              </p>
              <p className="text-lg font-semibold mt-4 text-orange-600 dark:text-yellow-400">
                ${product.price?.toLocaleString()}
              </p>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => addToCart(product, 1)}
                  className="bg-orange-600 dark:bg-yellow-500 text-white dark:text-black px-4 py-2 rounded-lg hover:opacity-90 active:scale-95 transition"
                >
                  Agregar al carrito
                </button>

                <button
                  onClick={() => toggleFavorite(product)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 active:scale-95 transition"
                >
                  Quitar
                </button>
              </div>

              <Link
                href={`/catalogo/${product.id}`}
                className="mt-3 text-sm text-blue-600 dark:text-blue-300 underline hover:text-yellow-400"
              >
                Ver detalle
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
