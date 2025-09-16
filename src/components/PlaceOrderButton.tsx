// src/components/PlaceOrderButton.tsx
'use client';

import React from 'react';

interface PlaceOrderButtonProps {
  onPlaceOrder: () => void;
  disabled: boolean;
}

const PlaceOrderButton: React.FC<PlaceOrderButtonProps> = ({ onPlaceOrder, disabled }) => {
  return (
    <button
      onClick={onPlaceOrder}
      disabled={disabled}
      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition disabled:opacity-50"
    >
      Realizar Pedido
    </button>
  );
};

export default PlaceOrderButton;