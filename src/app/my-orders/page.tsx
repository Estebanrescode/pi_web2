'use client';

import React from 'react';
import OrderList from '@/components/OrderList';

const MyOrdersPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Mis Pedidos</h1>
      <OrderList />
    </div>
  );
};

export default MyOrdersPage;