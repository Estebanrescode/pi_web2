'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useOrders } from '@/context/orderContext';
import OrderConfirmationDetails from '@/components/OrderConfirmationDetails';

const OrderConfirmationPage = () => {
  const { orderId } = useParams();
  const { getOrderById } = useOrders();
  const order = getOrderById(orderId as string);

  if (!order) {
    return <p>Pedido no encontrado.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <OrderConfirmationDetails order={order} />
    </div>
  );
};

export default OrderConfirmationPage;