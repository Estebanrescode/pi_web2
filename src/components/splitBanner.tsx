"use client";

export default function SplitBanner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full h-[80vh]">
      {/* Imagen izquierda */}
      <div
        className="relative bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="relative text-white text-3xl md:text-5xl font-bold z-10">
          Colección Hombre
        </h2>
      </div>

      {/* Imagen derecha */}
      <div
        className="relative bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="relative text-white text-3xl md:text-5xl font-bold z-10">
          Colección Mujer
        </h2>
      </div>
    </section>
  );
}
