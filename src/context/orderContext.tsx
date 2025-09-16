// src/context/orderContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  subtotal: number;
  shippingCost: number;
  total: number;
  date: string;
}

interface ShippingAddress {
  address1: string;
  city: string;
  state: string;
  zip: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, "id" | "date">) => string; // Retorna orderId
  getOrderById: (orderId: string) => Order | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) setOrders(JSON.parse(storedOrders));
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (newOrder: Omit<Order, "id" | "date">) => {
    const orderId = "ORD-" + Math.floor(Math.random() * 1000000).toString();
    const order: Order = {
      ...newOrder,
      id: orderId,
      date: new Date().toISOString(),
    };
    setOrders((prev) => [...prev, order]);
    return orderId;
  };

  const getOrderById = (orderId: string) => orders.find((o) => o.id === orderId);

  return (
    <OrderContext.Provider value={{ orders, addOrder, getOrderById }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrders must be used within an OrderProvider");
  return context;
};