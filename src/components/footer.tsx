import Link from "next/link";
import { Separator } from "./ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

const dataFooter = [
  { id: 1, title: "Sobre Nosotros", link: "#" },
  { id: 2, title: "Productos", link: "#" },
  { id: 3, title: "Mi Cuenta", link: "#" },
  { id: 4, title: "Política de Privacidad", link: "#" },
];

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-screen-xl mx-auto px-6 py-10">
        {/* Top */}
        <div className="md:flex md:items-center md:justify-between">
          {/* Brand */}
          <p className="mb-6 md:mb-0 text-lg font-semibold text-gray-900 dark:text-gray-100">
            <span className="font-bold text-violet-600 dark:text-violet-400">
              NEONIX
            </span>{" "}
            E-commerce
          </p>

          {/* Navigation */}
          <ul className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
            {dataFooter.map((data) => (
              <li key={data.id}>
                <Link
                  href={data.link}
                  className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Separator className="my-8 border-gray-300 dark:border-gray-700" />

        {/* Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="#" className="font-semibold hover:underline">
              NEONIX
            </Link>
            . Todos los derechos reservados.
          </span>

          {/* Socials */}
          <div className="flex space-x-5 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Twitter size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
