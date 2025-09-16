// src/components/OrderList.tsx
'use client';

import React from 'react';
import { useOrders } from '@/context/orderContext';
import Link from 'next/link';

const OrderList = () => {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return <p>No hay pedidos aún.</p>;
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="border p-4 rounded">
          <h3>Pedido #{order.id}</h3>
          <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
          <p>Total: ${order.total}</p>
          <Link href={`/my-orders/${order.id}`} className="text-blue-600">Ver Detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default OrderList;