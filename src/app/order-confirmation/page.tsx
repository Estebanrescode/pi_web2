"use client";

import Link from "next/link";

export default function OrderConfirmation() {
  return (
    <div className="max-w-2xl mx-auto text-center py-20 text-white">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">¡Gracias por tu compra! 🎉</h1>
      <p className="text-gray-300 mb-8">
        Tu pedido ha sido registrado exitosamente. Puedes ver el estado de tu orden en{" "}
        <Link href="/my-orders" className="text-yellow-400 hover:underline">
          Mis pedidos
        </Link>.
      </p>

      <Link
        href="/"
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300"
      >
        Volver a la tienda
      </Link>
    </div>
  );
}
