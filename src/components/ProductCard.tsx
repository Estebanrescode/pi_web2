// app/components/ProductCard.tsx
import Link from "next/link";

type ProductCardProps = {
  id: number;
  name: string;
  image: string;
  precio: number;
};

export default function ProductCard({ id, name, image, precio }: ProductCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 text-center">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-700 font-medium">${precio.toLocaleString()}</p>

      {/* 👇 Aquí agregamos el link al detalle */}
      <Link
        href={`/products/${id}`}
        className="inline-block mt-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Ver detalle
      </Link>
    </div>
  );
}
