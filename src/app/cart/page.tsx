"use client";

import { useCart } from "@/context/cartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        Tu carrito está vacío 🛒
      </div>
    );
  }

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Tu carrito</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.imageUrl ?? "/placeholder.png"}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold text-black">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  Cantidad: {item.quantity}
                </p>
                <p className="text-sm text-gray-500">
                  Precio: ${item.price.toFixed(2)}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:underline"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between items-center">
        <button
          onClick={clearCart}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg transition"
        >
          Vaciar carrito
        </button>

        <p className="text-xl font-semibold text-black">
          Total: ${total.toFixed(2)}
        </p>
      </div>

      {/* 🟢 BOTÓN DE CHECKOUT */}
      <div className="mt-8 text-center">
        <button
          onClick={() => router.push("/checkout")}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl shadow-lg transition-transform duration-200 hover:scale-105"
        >
          Proceder al pago
        </button>
      </div>
    </div>
  );
}
