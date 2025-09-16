// src/components/OrderDetailView.tsx
import React from 'react';
import Image from 'next/image';

interface Order {
  id: string;
  items: { id: number; name: string; price: number; quantity: number; image: string }[];
  shippingAddress: { address1: string; city: string; state: string; zip: string };
  paymentMethod: string;
  total: number;
  date: string;
}

interface OrderDetailViewProps {
  order: Order;
}

const OrderDetailView: React.FC<OrderDetailViewProps> = ({ order }) => {
  return (
    <div>
      <h2>Detalles del Pedido #{order.id}</h2>
      <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
      <h3>Items:</h3>
      {order.items.map((item) => (
        <div key={item.id} className="flex gap-4">
          <Image src={item.image} alt={item.name} width={50} height={50} />
          <div>
            <p>{item.name} - {item.quantity} x ${item.price}</p>
          </div>
        </div>
      ))}
      <h3>Dirección de Envío:</h3>
      <p>{order.shippingAddress.address1}, {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
      <h3>Método de Pago: {order.paymentMethod}</h3>
      <p>Total: ${order.total}</p>
    </div>
  );
};

export default OrderDetailView;