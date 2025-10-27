"use client";
import { CartItem } from '@/lib/types';

type Props = {
  userId: string | number | null;
  addressId: number | null;
  paymentId: number | null;
  cartItems: CartItem[];
  total: number;
};

export default function PlaceOrderButton({ userId, addressId, paymentId, cartItems, total }: Props) {
  const handlePlaceOrder = async () => {
    if (!userId || !addressId || !paymentId) {
      alert('Por favor, completa todos los campos antes de confirmar.');
      return;
    }

    const orderData = {
      userId,
      shippingAddressId: addressId,
      paymentMethodId: paymentId,
      totalAmount: total,
      orderDetails: cartItems.map((item: CartItem) => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    const response = await fetch('http://localhost:8080/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      alert('Pedido realizado con éxito 🎉');
      localStorage.removeItem('cart');
      window.location.href = '/';
    } else {
      alert('Error al crear el pedido.');
    }
  };

  return (
    <button
      onClick={handlePlaceOrder}
      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
    >
      Confirmar pedido
    </button>
  );
}
