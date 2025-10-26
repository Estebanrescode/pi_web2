'use client';

import React from 'react';
import Image from 'next/image';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface OrderSummaryProps {
  items: OrderItem[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return <p className="text-gray-600">No hay productos en tu pedido.</p>;
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 border-b border-gray-200 pb-3"
        >
          {/* Imagen del producto */}
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={item.image || '/images/default-product.jpg'}
              alt={item.name}
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* Info del producto */}
          <div className="flex-1">
            <h3 className="text-black font-medium">{item.name}</h3>
            <p className="text-sm text-gray-600">
              {item.quantity} x ${item.price.toLocaleString('es-CO')}
            </p>
          </div>

          {/* Subtotal */}
          <div className="text-right font-semibold text-black">
            ${(item.price * item.quantity).toLocaleString('es-CO')}
          </div>
        </div>
      ))}

      {/* Total final */}
      <div className="flex justify-between border-t border-gray-300 pt-3 mt-4 font-bold text-lg text-black">
        <span>Total</span>
        <span>
          $
          {items
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toLocaleString('es-CO')}
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
