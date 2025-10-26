'use client';

import React from 'react';

interface PlaceOrderButtonProps {
  onPlaceOrder: () => void;
  disabled: boolean;
  children?: React.ReactNode; // 👈 permite texto dinámico
}

const PlaceOrderButton: React.FC<PlaceOrderButtonProps> = ({
  onPlaceOrder,
  disabled,
  children,
}) => {
  return (
    <button
      onClick={onPlaceOrder}
      disabled={disabled}
      className={`px-6 py-3 rounded-lg font-bold transition 
        ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'}`}
    >
      {children || 'Realizar Pedido'} {/* 👈 usa el texto dinámico o el default */}
    </button>
  );
};

export default PlaceOrderButton;
