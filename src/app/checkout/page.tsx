'use client';

import React, { useState } from 'react';
import ShippingAddressForm from '@/components/ShippingAddressForm';
import PaymentMethodForm from '@/components/PaymentMethodForm';
import OrderSummary from '@/components/OrderSummary';
import PlaceOrderButton from '@/components/PlaceOrderButton';
import CartSummary from '@/components/CartSummary';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/cartContext';

interface ShippingAddress {
  address1: string;
  city: string;
  state: string;
  zip: string;
}

const CheckoutPage = () => {
  const router = useRouter();
  const { cart, clearCart } = useCart(); // 🔥 Usamos `cart`, no `cartItems`

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    address1: '',
    city: '',
    state: '',
    zip: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🔥 Calcular subtotal en base al `cart`
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 10000;
  const total = subtotal + shippingCost;

  const handlePlaceOrder = async () => {
    if (!shippingAddress.address1 || !paymentMethod) return;

    setLoading(true);
    setError(null);

    try {
      const orderData = {
        items: cart.map(item => ({
          productId: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        shippingAddress,
        paymentMethod,
        subtotal,
        shippingCost,
        total,
      };

      const response = await fetch('http://localhost:8080/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Pedido procesado:', result);

      clearCart();
      router.push(`/order-confirmation/${result.orderId || 'success'}`);
    } catch (err) {
      console.error(err);
      setError('Ocurrió un problema al procesar tu pedido.');
    } finally {
      setLoading(false);
    }
  };

  const isShippingAddressComplete =
    shippingAddress.address1 && shippingAddress.city && shippingAddress.state && shippingAddress.zip;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Paso principal */}
        <div className="lg:w-2/3 bg-white shadow-lg rounded-lg p-8">
          {/* Pasos */}
          <div className="mb-8 flex justify-center gap-4">
            <button
              onClick={() => setCurrentStep(1)}
              className={`px-6 py-2 rounded-full font-semibold ${
                currentStep === 1
                  ? 'bg-blue-600 text-black'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              1. Envío
            </button>
            <button
              onClick={() => setCurrentStep(2)}
              disabled={!isShippingAddressComplete}
              className={`px-6 py-2 rounded-full font-semibold ${
                currentStep === 2
                  ? 'bg-blue-600 text-black'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              2. Pago
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              disabled={!paymentMethod}
              className={`px-6 py-2 rounded-full font-semibold ${
                currentStep === 3
                  ? 'bg-blue-600 text-black'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              3. Revisar
            </button>
          </div>

          {/* Paso 1 */}
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

          {/* Paso 2 */}
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

          {/* Paso 3 */}
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

              {/* 🔥 Actualizado: pasar `cart` */}
              <OrderSummary items={cart} />

              {error && <p className="text-red-600 mt-4">{error}</p>}

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-lg transition"
                >
                  ← Volver a Pago
                </button>

                <PlaceOrderButton
                  onPlaceOrder={handlePlaceOrder}
                  disabled={!isShippingAddressComplete || !paymentMethod || loading}
                >
                  {loading ? 'Procesando...' : 'Finalizar Pedido'}
                </PlaceOrderButton>
              </div>
            </div>
          )}
        </div>

        {/* Resumen lateral */}
        <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6 h-fit sticky top-4">
          <h2 className="text-2xl font-semibold mb-6 pb-4 border-b text-black">Tu Pedido</h2>
          <CartSummary subtotal={subtotal} shipping={shippingCost} total={total} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
