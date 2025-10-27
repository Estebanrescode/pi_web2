"use client";
import React, { useEffect, useState } from "react";
import { useUser, SignInButton } from "@clerk/nextjs";
type Product = {
  id: number;
  name: string;
  // campos opcionales que tu API pueda devolver
  image?: string;
  price?: number;
};

type OrderDetail = {
  id: number;
  product: Product;
  quantity: number;
  price: number;
};

type Order = {
  id: number;
  status: string;
  orderDate: string; // o Date dependiendo de la API
  totalAmount: number;
  orderDetails: OrderDetail[];
};

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      setLoading(false);
      return;
    }

    const userId = user?.id;

    const fetchOrders = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/orders/user/${userId}`);
        if (!res.ok) throw new Error("Error al obtener pedidos");
        const data = (await res.json()) as Order[];
        setOrders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [isLoaded, isSignedIn, user]);

  if (loading) return <p className="text-center mt-10">Cargando tus pedidos...</p>;

  if (!isSignedIn)
    return (
      <div className="text-center mt-10">
        <p className="mb-4 text-gray-300">Debes iniciar sesión para ver tus pedidos.</p>
        <SignInButton>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded">Iniciar sesión</button>
        </SignInButton>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Mis Pedidos</h1>
      {orders.length === 0 ? (
        <p className="text-center text-gray-400">Aún no tienes pedidos.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-700 rounded-2xl p-5 bg-gray-900 shadow-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-yellow-300">Pedido #{order.id}</h2>
                <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">
                  {order.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Fecha: {new Date(order.orderDate).toLocaleDateString()}
              </p>
              <p className="text-gray-400 text-sm">Total: ${order.totalAmount}</p>

              <div className="mt-3">
                <h3 className="text-yellow-400 font-medium mb-2">Productos:</h3>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                  {order.orderDetails.map((detail) => (
                    <li key={detail.id}>
                      {detail.product.name} — Cantidad: {detail.quantity} — ${detail.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
