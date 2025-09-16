// src/components/OrderSummary.tsx
import React from 'react';
import Image from 'next/image';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderSummaryProps {
  items: OrderItem[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 border-b pb-2">
          <Image src={item.image} alt={item.name} width={50} height={50} className="rounded" />
          <div>
            <h3>{item.name}</h3>
            <p>{item.quantity} x ${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderSummary;