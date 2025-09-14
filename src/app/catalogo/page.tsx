"use client";
import products from "@/components/productsData";  // 👈 sin llaves

export default function CatalogPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-10">Catálogo</h1>

            {/* Grid responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-orange-600 dark:bg-violet-700 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-97 object-contain bg-white"
                        />
                        <div className="p-4 flex flex-col items-center text-center">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-800 dark:text-gray-200 text-sm mt-2">
                                {product.category}
                            </p>                        
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
