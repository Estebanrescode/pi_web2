"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartContext";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/products");
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        const data: Product[] = await res.json();
        setProducts(data);

        const initialQuantities: { [key: number]: number } = {};
        data.forEach((p) => (initialQuantities[p.id] = 1));
        setQuantities(initialQuantities);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleQuantityChange = (productId: number, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: isNaN(value) || value < 1 ? 1 : value,
    }));
  };

  if (loading) return <p className="text-center text-gray-700">Cargando productos...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => {
        const quantity = quantities[product.id] || 1;
        return (
          <div key={product.id} className="bg-orange-600 dark:bg-violet-700 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <Image
              src={product.imageUrl || "https://placehold.co/600x400"}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-97 object-contain bg-white"
            />
            <div className="p-4 flex flex-col items-center text-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-200 text-sm mt-2">{product.description}</p>
              <p className="text-gray-100 text-lg font-semibold mt-8">
                ${product.price?.toLocaleString() ?? "0"}
              </p>

              <div className="flex items-center gap-2 mt-3">
                <label className="text-sm">Cantidad:</label>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) =>
                    handleQuantityChange(product.id, parseInt(e.target.value))
                  }
                  className="w-16 border rounded text-center"
                />
              </div>

              <button
                onClick={() => addToCart(product, quantity)}
                className="mt-4 bg-white hover:bg-yellow-300 text-black px-4 py-2 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                Agregar al carrito
              </button>


              <Link
                href={`/catalogo/${product.id}`}
                className="mt-3 text-sm text-blue-200 underline hover:text-yellow-300"
              >
                Ver detalle
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
