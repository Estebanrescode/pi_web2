"use client";

import { useState, useEffect } from "react";
import ProductList from "@/components/ProductList";
import { useCart } from "@/context/cartContext";
import { Product } from "@/lib/types";


export default function CatalogoPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔹 Cargar productos desde la API REST (solo una vez)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/products");
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("❌ Error cargando productos:", err);
        setError("No se pudieron cargar los productos. Intenta más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <main className="max-w-7xl mx-auto px-4 py-10 text-center">
        <p className="text-gray-500 text-lg">Cargando productos...</p>
      </main>
    );

  if (error)
    return (
      <main className="max-w-7xl mx-auto px-4 py-10 text-center">
        <p className="text-red-600 font-semibold">{error}</p>
      </main>
    );

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Catálogo</h1>
      {/* ✅ Solo una lista (sin duplicados) */}
      <ProductList products={products} addToCart={addToCart} />
    </main>
  );
}
