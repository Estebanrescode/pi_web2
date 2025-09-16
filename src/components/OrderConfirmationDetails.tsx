// src/components/OrderConfirmationDetails.tsx
import React from 'react';
import OrderDetailView from './OrderDetailView'; // Reusa el componente de detalles

interface OrderConfirmationDetailsProps {
  order: any; // Tipo igual a Order
}

const OrderConfirmationDetails: React.FC<OrderConfirmationDetailsProps> = ({ order }) => {
  return (
    <div className="text-center">
      <h1>¡Pedido Confirmado!</h1>
      <p>Gracias por tu compra. Tu pedido #{order.id} ha sido procesado.</p>
      <OrderDetailView order={order} />
    </div>
  );
};

export default OrderConfirmationDetails;