"use client";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import Link from "next/link";


const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return <p className="text-center text-lg">Tu carrito está vacío 🛒</p>;
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
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
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-600">
                {item.quantity} × ${item.price}
              </p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:underline"
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className="text-right font-bold">Total: ${total}</div>

      <div className="flex justify-between">
        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Vaciar carrito
        </button>
        <Link href="/checkout" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Proceder a Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;