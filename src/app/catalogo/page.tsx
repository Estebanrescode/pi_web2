"use client";
import { useState } from "react";
import products from "@/components/productsData";
import { useCart } from "@/context/cartContext";

export default function HomePage() {
  const { addToCart } = useCart();
  // 👇 Estado para manejar las cantidades de todos los productos
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleQuantityChange = (index: number, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: value > 0 ? value : 1, // nunca menor a 1
    }));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Catálogo</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => {
          const quantity = quantities[index] || 1; // por defecto 1

          return (
            <div
              key={index}
              className="bg-orange-600 dark:bg-violet-700 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-97 object-contain bg-white"
              />
              <div className="p-4 flex flex-col items-center text-center">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-800 dark:text-gray-200 text-sm mt-2">
                  {product.category}
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-lg font-semibold mt-8">
                  {product.precio}
                </p>

                {/* Selector de cantidad */}
                <div className="flex items-center gap-2 mt-3">
                  <label className="text-sm">Cantidad:</label>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                    className="w-16 border rounded text-center"
                  />
                </div>

                {/* Botón */}
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id ?? index, // usa product.id si existe
                      name: product.name,
                      price: parseInt(
                        product.precio.toString().replace(/\./g, "")
                      ),
                      image: product.image,
                      quantity: quantity, // 👈 ahora usa el valor elegido
                    })
                  }
                  className="mt-4 bg-white hover:bg-yellow-300 text-black px-4 py-2 rounded-lg"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
