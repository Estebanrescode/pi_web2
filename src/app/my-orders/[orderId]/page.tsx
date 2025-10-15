// ./src/app/my-orders/[orderId]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import products from "@/components/productsData";  // Tus productos para mostrar detalles

// Tipo para Order (adáptalo a tu estructura real)
interface Order {
  id: number;
  date: string;  // 'YYYY-MM-DD'
  total: number;
  products: number[];  // Array de IDs de productos (en lugar de objetos completos, para ahorrar espacio)
}

// Función para cargar órdenes reales (ej. de localStorage o API)
async function getOrders(): Promise<Order[]> {
  // Opción 1: De localStorage (para dev; en prod, usa API o server-side)
  if (typeof window !== 'undefined') {
    const storedOrders = localStorage.getItem('confirmedOrders');
    if (storedOrders) {
      return JSON.parse(storedOrders) as Order[];
    }
  }

  // Opción 2: Fetch de API (ej. si tienes un backend)
  // const res = await fetch('/api/orders', { cache: 'no-store' });
  // return res.ok ? await res.json() : [];

  // Fallback: Datos de ejemplo si no hay nada
  return [
    {
      id: 1,
      date: '2025-10-11',  // Fecha actual
      total: 397000,
      products: [1, 2, 6],  // IDs de tus productos: Set Midnight Drop, etc.
    },
    // Agrega más...
  ];
}

// Función helper para obtener productos completos de IDs
function getOrderProducts(orderProductsIds: number[]): Array<typeof products[0]> {
  return orderProductsIds.map(id => products.find(p => p.id === id) || null).filter(Boolean) as Array<typeof products[0]>;
}

type Props = {
  params: Promise<{ orderId: string }>;
};

export default async function OrderDetail({ params }: Props) {
  const { orderId } = await params;
  const orderNumber = Number(orderId);

  // Carga las órdenes
  const orders = await getOrders();
  const order = orders.find(o => o.id === orderNumber);

  if (!order) {
    notFound();
  }

  // Obtiene los productos completos
  const orderProducts = getOrderProducts(order.products);

  const formattedDate = new Date(order.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link
        href="/my-orders"
        className="inline-block px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 mb-4"
      >
        Volver a mis órdenes
      </Link>

      <h1 className="text-3xl font-bold mb-4">Detalles de la Orden #{order.id}</h1>
      <p className="text-gray-600 mb-2"><strong>Fecha:</strong> {formattedDate}</p>
      <p className="text-xl font-semibold mb-6"><strong>Total:</strong> ${order.total.toLocaleString('es-CO')}</p>

      <h2 className="text-2xl font-semibold mb-4">Productos en la orden:</h2>
      <ul className="space-y-4">
        {orderProducts.map((product) => (
          <li key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg bg-white">
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="object-contain rounded w-20 h-20"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600">{product.category}</p>
              <p className="font-semibold text-green-600">${product.precio.toLocaleString('es-CO')}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}