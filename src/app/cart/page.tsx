"use client";
import Cart from "@/components/cart";

export default function CartPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Tu Carrito</h1>
      <Cart />
    </main>
  );
}
