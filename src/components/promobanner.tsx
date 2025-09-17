"use client";

export default function PromoBanner() {
  const promos = [
    "🔥 2x1 en camisetas este fin de semana",
    "🚚 Envío gratis en pedidos mayores a $50",
    "🧥 20% de descuento en buzos seleccionados",
    "💳 Paga a crédito con Addi",
  ];

  return (
    <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 py-3 overflow-hidden border-y border-gray-300 dark:border-gray-700">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Primer bloque */}
        {promos.map((promo, i) => (
          <span
            key={i}
            className="mx-8 text-sm md:text-base font-semibold flex items-center"
          >
            {promo}
          </span>
        ))}
        {/* Segundo bloque (duplicado para que no haya huecos) */}
        {promos.map((promo, i) => (
          <span
            key={`dup-${i}`}
            className="mx-8 text-sm md:text-base font-semibold flex items-center"
          >
            {promo}
          </span>
        ))}
      </div>
    </div>
  );
}
