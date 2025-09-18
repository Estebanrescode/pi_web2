  
import React from "react";


export const metadata = {
  title: "Acerca de Neonix — Estilo urbano",
  description: "Neonix — Moda urbana diseñada para moverte, expresarte y destacar. Conoce nuestra misión, valores y equipo.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-slate-100">

      

  
      <section className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Nuestra historia</h2>
            <p className="mt-4 text-slate-300">
              Neonix nació en 2020 como un proyecto entre amigos apasionados 
              por la moda urbana. Queríamos crear ropa que representara nuestra 
              forma de vivir la ciudad: auténtica, cómoda y con personalidad.
            </p>
            <p className="mt-4 text-slate-300">
              Hoy diseñamos colecciones completas trabajando con talento local 
              y materiales de calidad. Cada prenda cuenta una historia y refleja 
              la cultura urbana.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold">Lo que nos mueve</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-3 w-3 rounded-full bg-violet-500" />
                  <span className="text-slate-300">Diseño auténtico y original</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-3 w-3 rounded-full bg-violet-500" />
                  <span className="text-slate-300">Calidad en cada detalle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-3 w-3 rounded-full bg-violet-500" />
                  <span className="text-slate-300">Colaboración local</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-3 w-3 rounded-full bg-violet-500" />
                  <span className="text-slate-300">Moda consciente</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-tr from-white/5 to-white/2 p-1">
            <div className="rounded-lg bg-neutral-850 p-6">
              <h3 className="text-lg font-semibold">Misión</h3>
              <p className="mt-3 text-slate-300 text-sm">
                Crear moda urbana auténtica que empodere la expresión personal 
                de cada individuo en las calles, combinando diseño original, 
                calidad premium y cultura local.
              </p>

              <h3 className="text-lg font-semibold mt-6">Visión</h3>
              <p className="mt-3 text-slate-300 text-sm">
                Ser la marca de referencia en moda urbana que conecte comunidades 
                globales a través del estilo, promoviendo la creatividad y 
                autenticidad en cada prenda.
              </p>

              <div className="mt-6 pt-4 border-t border-slate-700">
                <h4 className="text-sm font-medium text-white mb-3">Nuestros productos</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                  <span>• Hoodies premium</span>
                  <span>• Camisetas urbanas</span>
                  <span>• Zapatillas exclusivas</span>
                  <span>• Accesorios únicos</span>
                  <span>• Gorras streetwear</span>
                  <span>• Sudaderas oversized</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700">
                <h4 className="text-sm font-medium text-white mb-3">Garantías</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span className="text-slate-300"> devolución de productos</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span className="text-slate-300">Calidad garantizada</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span className="text-slate-300">Envío asegurado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>);}