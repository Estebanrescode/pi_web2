import React from 'react';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, shipping, total }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-black">Subtotal</span>
        <span className="text-black">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-black">Envío</span>
        <span className="text-black">${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold border-t pt-2">
        <span className="text-black">Total</span>
        <span className="text-black">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;