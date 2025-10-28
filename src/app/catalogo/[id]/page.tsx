"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { Product } from "@/lib/types";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/products/${id}`);
        if (!res.ok) throw new Error("Error al cargar el producto");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-400 mt-10">Cargando producto...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-400 mt-10">Producto no encontrado.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </div>
  );
}
