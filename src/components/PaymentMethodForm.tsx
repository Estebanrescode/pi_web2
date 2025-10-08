// src/components/PaymentMethodForm.tsx
'use client';

import React, { useState } from 'react';
import Image from "next/image";

interface PaymentMethodFormProps {
  initialMethod?: string;
  onSubmit: (method: string) => void;
  onBack: () => void;
}

const PaymentMethodForm: React.FC<PaymentMethodFormProps> = ({ initialMethod = '', onSubmit, onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState(initialMethod);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMethod) {
      onSubmit(selectedMethod);
    } else {
      alert('Por favor, selecciona un método de pago.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <label className="block text-sm font-medium text-black">Selecciona un método de pago:</label>

        <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-3 cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            id="creditCard"
            name="paymentMethod"
            value="Tarjeta de Crédito/Débito"
            checked={selectedMethod === 'Tarjeta de Crédito/Débito'}
            onChange={() => setSelectedMethod('Tarjeta de Crédito/Débito')}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <label htmlFor="creditCard" className="text-lg font-medium text-black flex-grow">Tarjeta de Crédito/Débito</label>
          <Image src="/images/visa-mastercard.png" alt="Tarjetas" className="h-6" /> {/* Asegúrate de tener esta imagen */}
        </div>

        {selectedMethod === 'Tarjeta de Crédito/Débito' && (
          <div className="bg-gray-50 p-4 rounded-md space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-black">Número de Tarjeta</label>
              <input type="text" id="cardNumber" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black" placeholder="XXXX XXXX XXXX XXXX" required />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-black">Fecha Vencimiento (MM/AA)</label>
                <input type="text" id="expiryDate" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black" placeholder="MM/AA" required />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-black">CVV</label>
                <input type="text" id="cvv" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black" placeholder="123" required />
              </div>
              <div className="col-span-1"> {/* Para mantener el layout */}</div>
            </div>
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-black">Nombre en la Tarjeta</label>
              <input type="text" id="cardName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black" required />
            </div>
          </div>
        )}

        <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-3 cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="PayPal"
            checked={selectedMethod === 'PayPal'}
            onChange={() => setSelectedMethod('PayPal')}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <label htmlFor="paypal" className="text-lg font-medium text-black flex-grow">PayPal</label>
          <Image src="/images/paypal.png" alt="PayPal" className="h-6" /> {/* Asegúrate de tener esta imagen */}
        </div>

        {selectedMethod === 'PayPal' && (
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-black">Serás redirigido a PayPal para completar tu compra.</p>
          </div>
        )}

        {/* Añade más métodos de pago aquí */}

      </div>
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-lg transition"
        >
          ← Volver a Envío
        </button>
        <button
          type="submit"
          disabled={!selectedMethod}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuar a Revisar Pedido
        </button>
      </div>
    </form>
  );
};

export default PaymentMethodForm;