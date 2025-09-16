// src/lib/orderUtils.ts
import { useEffect, useState } from 'react';

export interface Order {
  id: string;
  date: string;
  items: Array<{ productId: string; name: string; quantity: number; price: number }>;
  total: number;
  shippingAddress: { name: string; address: string; city: string; zip: string };
  paymentMethod: { type: string; details: string };
  status: 'confirmed' | 'shipped' | 'delivered';
}

export const generateOrderId = () => `order-${Date.now()}`;

export const saveOrder = (newOrder: Order) => {
  const orders = getOrders();
  const updatedOrders = [...orders, newOrder];
  localStorage.setItem('orders', JSON.stringify(updatedOrders));
};

export const getOrders = (): Order[] => {
  const stored = localStorage.getItem('orders');
  return stored ? JSON.parse(stored) : [];
};

export const getOrderById = (id: string): Order | null => {
  const orders = getOrders();
  return orders.find(order => order.id === id) || null;
};

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>(getOrders());

  useEffect(() => {
    const handleStorageChange = () => setOrders(getOrders());
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return orders;
};