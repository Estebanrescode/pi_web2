
import Link from "next/link";
import products from "@/components/productsData"; // 👈 revisa esta ruta, puede que necesites "@/app/components/productsData"

type Props = {
  params: { id: string };
};

export default function ProductDetail({ params }: Props) {
  // 👇 convierto el id de la URL a número
  const productId = Number(params.id);

  // 👇 busco en la lista de productos
  const product = products.find((p) => p.id === productId);

  // 🟥 si no lo encuentra
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

  // 🟩 si lo encuentra
  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
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
