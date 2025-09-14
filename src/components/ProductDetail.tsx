// src/components/ProductDetail.tsx
import React from 'react';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900">{product.name}</h2>
      <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
      <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
      <div className="flex items-center text-gray-600">
        <span className="font-medium">Disponibilidad:</span>
        <span className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {product.stock > 0 ? `En Stock (${product.stock})` : 'Agotado'}
        </span>
      </div>
    </div>
  );
};

export default ProductDetail;