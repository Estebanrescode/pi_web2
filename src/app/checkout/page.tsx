'use client';

import React, { useState } from 'react';
import ShippingAddressForm from '@/components/ShippingAddressForm';
import PaymentMethodForm from '@/components/PaymentMethodForm';
import OrderSummary from '@/components/OrderSummary';
import PlaceOrderButton from '@/components/PlaceOrderButton';
import CartSummary from '@/components/CartSummary';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/cartContext';
import { useOrders } from '@/context/orderContext';

interface ShippingAddress {
  address1: string;
  city: string;
  state: string;
  zip: string;
}

const CheckoutPage = () => {
  const router = useRouter();
  const { cartItems, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    address1: '',
    city: '',
    state: '',
    zip: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 10000; // Ajusta según necesites (en pesos o lo que uses)
  const total = subtotal + shippingCost;

  const handlePlaceOrder = async () => {
    if (!shippingAddress.address1 || !paymentMethod) return;

    const orderId = addOrder({
      items: cartItems,
      shippingAddress,
      paymentMethod,
      subtotal,
      shippingCost,
      total,
    });
    clearCart();
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula delay
    router.push(`/order-confirmation/${orderId}`);
  };

  const isShippingAddressComplete = shippingAddress.address1 && shippingAddress.city && shippingAddress.state && shippingAddress.zip;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 bg-white shadow-lg rounded-lg p-8">
          <div className="mb-8 flex justify-center gap-4">
            <button
              onClick={() => setCurrentStep(1)}
              className={`px-6 py-2 rounded-full font-semibold ${
                currentStep === 1 ? 'bg-blue-600 text-black' : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              1. Envío
            </button>
            <button
              onClick={() => setCurrentStep(2)}
              className={`px-6 py-2 rounded-full font-semibold ${
                currentStep === 2 ? 'bg-blue-600 text-black' : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
              disabled={!isShippingAddressComplete}
            >
              2. Pago
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className={`px-6 py-2 rounded-full font-semibold ${
                currentStep === 3 ? 'bg-blue-600 text-black' : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
              disabled={!paymentMethod}
            >
              3. Revisar
            </button>
          </div>

          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Dirección de Envío</h2>
              <ShippingAddressForm
                initialData={shippingAddress}
                onSubmit={(data: ShippingAddress) => {
                  setShippingAddress(data);
                  setCurrentStep(2);
                }}
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Método de Pago</h2>
              <PaymentMethodForm
                initialMethod={paymentMethod}
                onSubmit={(method) => {
                  setPaymentMethod(method);
                  setCurrentStep(3);
                }}
                onBack={() => setCurrentStep(1)}
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Revisar Pedido</h2>
              <div className="mb-6 bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2">Dirección de Envío:</h3>
                {isShippingAddressComplete ? (
                  <p className="text-black">
                    {shippingAddress.address1}, {shippingAddress.city}, {shippingAddress.state}{' '}
                    {shippingAddress.zip}
                  </p>
                ) : (
                  <p className="text-black">No se ha proporcionado una dirección</p>
                )}
                <h3 className="font-semibold mt-4 mb-2">Método de Pago:</h3>
                <p className="text-black">{paymentMethod || 'No seleccionado'}</p>
              </div>
              <OrderSummary items={cartItems} />
              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-lg transition"
                >
                  ← Volver a Pago
                </button>
                <PlaceOrderButton
                  onPlaceOrder={handlePlaceOrder}
                  disabled={!isShippingAddressComplete || !paymentMethod}
                />
              </div>
            </div>
          )}
        </div>

        <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6 h-fit sticky top-4">
          <h2 className="text-2xl font-semibold mb-6 pb-4 border-b text-black">Tu Pedido</h2>
          <CartSummary subtotal={subtotal} shipping={shippingCost} total={total} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;