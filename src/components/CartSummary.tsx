import React from "react";
import { CartItem } from "@/lib/types";

type Props = {
  cartItems: CartItem[];
  total: number;
};

export default function CartSummary({ cartItems, total }: Props) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-violet-800 shadow-md transition-colors duration-300 mb-6">
      <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-yellow-400">
        Resumen del carrito
      </h2>

      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {cartItems.map((item, index) => (
          <li
            key={index}
            className="flex justify-between py-2 text-gray-800 dark:text-gray-100"
          >
            <span>
              {item.name} <span className="text-gray-500 dark:text-gray-400">x {item.quantity}</span>
            </span>
            <span className="font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-3 text-right">
        <p className="font-bold text-lg text-gray-900 dark:text-yellow-400">
          Total: ${total.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
