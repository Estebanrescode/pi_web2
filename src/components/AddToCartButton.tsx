// src/components/AddToCartButton.tsx
'use client'; // Esto indica que el componente usa características del cliente (hooks, manejo de eventos)

import React, { useState } from 'react';

interface AddToCartButtonProps {
  productId: string;
  quantity: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId, quantity }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [message, setMessage] = useState('');

  const handleAddToCart = async () => {
    setIsAdding(true);
    setMessage('');
    // Simula una llamada a API para añadir al carrito
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Producto ${productId} añadido al carrito (cantidad: ${quantity})`);
    setMessage('¡Producto añadido al carrito!');
    setIsAdding(false);
    // Aquí normalmente actualizarías el estado global del carrito (ej. con Context API o Redux)
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isAdding ? 'Añadiendo...' : 'Añadir al Carrito'}
      </button>
      {message && <p className="mt-3 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default AddToCartButton;