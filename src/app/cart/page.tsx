"use client";

import { useCart } from "@/context/cartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        Tu carrito está vacío 🛒
      </div>
    );
  }

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Tu carrito</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
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
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg"
        >
          Vaciar carrito
        </button>

        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}
