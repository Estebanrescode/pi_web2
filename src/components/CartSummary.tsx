import React from 'react';
import { CartItem } from '@/lib/types';

type Props = {
  cartItems: CartItem[];
  total: number;
};

export default function CartSummary({ cartItems, total }: Props) {
  return (
    <div className="border rounded-lg p-4 bg-white mb-4">
      <h2 className="text-lg font-semibold mb-2">Resumen del carrito</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="font-bold text-lg text-right">Total: ${total.toFixed(2)}</div>
    </div>
  );
}
