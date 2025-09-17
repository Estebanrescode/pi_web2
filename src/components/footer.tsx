import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const dataFooter = [
  { id: 1, title: "Sobre Nosotros", link: "#" },
  { id: 2, title: "Productos", link: "#" },
  { id: 3, title: "Mi Cuenta", link: "#" },
  { id: 4, title: "Política de Privacidad", link: "#" },
];

const Footer = () => {
  return (
    <footer
      className="
        mt-16 
        border-t border-gray-200 dark:border-gray-800 
        bg-gradient-to-r from-orange-100 to-orange-200
        dark:from-violet-900 dark:to-violet-950
      "
    >
      <div className="w-full max-w-screen-xl mx-auto px-6 py-14">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Marca */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              NEONIX
            </h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Somos una marca de moda urbana que combina estilo y comodidad.
              Descubre nuestras camisetas, buzos, pantalones y accesorios
              diseñados para destacar ❤️
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {dataFooter.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="hover:text-orange-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Suscríbete
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Recibe ofertas exclusivas y novedades.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu correo"
                className="w-full px-3 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-r-lg bg-orange-600 dark:bg-violet-600 text-white text-sm font-semibold hover:bg-orange-700 dark:hover:bg-violet-700 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Síguenos
            </h3>
            <div className="flex space-x-5">
              <Link
                href="#"
                className="text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-violet-400 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-violet-400 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-violet-400 transition-colors"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="#" className="font-semibold">
            NEONIX
          </Link>
          . Diseñado con ❤️ por el equipo NEONIX.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
