/* eslint-disable */
import Link from "next/link";
import Image from "next/image";
import products from "@/components/productsData";

// Definimos el tipo de los parámetros dinámicos
type Props = {
  params: { id: string };
};

// Exportamos la función como un componente de servidor
export default function ProductDetail({ params }: Props) {
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <p className="text-red-500 text-lg mb-4">
          Producto no encontrado. (ID recibido: {params.id})
        </p>
        <Link
          href="/catalogo"
          className="inline-block px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
        >
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={400}
        className="w-full h-80 object-contain rounded-lg mb-6 bg-white"
      />

      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      <p className="text-xl font-semibold mb-2">
        Precio: ${product.precio.toLocaleString()}
      </p>

      <p className="text-gray-600 mb-6">Categoría: {product.category}</p>

      <Link
        href="/catalogo"
        className="inline-block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Volver al catálogo
      </Link>
    </div>
  );
}