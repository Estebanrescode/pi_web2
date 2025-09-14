// app/catalogo/[productId]/page.tsx
import ProductDetail from '@/components/ProductDetail';
import AddToCartButton from '@/components/AddToCartButton';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

// Esta función podría obtener los datos del producto de una API o base de datos.
// Por ahora, usamos un mock.
async function getProductDetails(productId: string) {
  // Simula una llamada a API
  await new Promise(resolve => setTimeout(resolve, 500)); // Simula carga
  return {
    id: productId,
    name: `Producto Ejemplo ${productId}`,
    description: `Esta es la descripción detallada del Producto Ejemplo ${productId}. Es un producto increíble con muchas características.`,
    price: 99.99 + parseInt(productId) * 0.5, // Precio dinámico
    imageUrl: `/images/product-${productId}.jpg`, // Asegúrate de tener imágenes en public/images
    stock: 10,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductDetails(params.productId);

  if (!product) {
    return <div className="p-8 text-center">Producto no encontrado.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Detalles del Producto</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          {/* Aquí podrías mostrar una imagen más grande del producto */}
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-md"
            onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg'; }} // Imagen de fallback
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <ProductDetail product={product} />
          <div className="mt-6">
            <AddToCartButton productId={product.id} quantity={1} />
          </div>
        </div>
      </div>
    </div>
  );
}