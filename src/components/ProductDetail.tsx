interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    image: string;
    precio: number;
    category: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900">{product.name}</h2>
      <p className="text-2xl font-semibold text-blue-600 mb-4">${product.precio.toLocaleString()}</p>
      <p className="text-gray-700 leading-relaxed mb-6">
        {`Este es un ${product.name} de la categoría ${product.category}.`}
      </p>
    </div>
  );
};
