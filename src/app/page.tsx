import CarouselTextBanner from "@/components/carousel-text-banner";
import FeaturedProducts from "@/components/feature-products";
import HeroBanner from "@/components/heroBanner";
import SplitBanner from "@/components/splitBanner";
import PromoBanner from "@/components/promobanner";
import CategoryBanner from "@/components/categorybanner";

export default function Home() {
  return (
    <main>

      <HeroBanner />
      <PromoBanner />
      <SplitBanner />
      <CategoryBanner
        title="Pantalones"
        image="/BannerPantalones.png"
        link="/camisetas"
        buttonLabel="Ver Camisetas"
        position="center 5%"   // 👈 otra posición
      />
      <FeaturedProducts />
      <CategoryBanner
        title="Accesorios"
        image="/BannerAccesorios.png"
        link="/accesorios"
        buttonLabel="Ver Accesorios"
        position="center 30%"   // 👈 ajustas la parte visible
      />
    </main>
  );
}


