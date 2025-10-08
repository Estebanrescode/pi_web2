import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Para optimizar el despliegue
  images: {
    domains: [''], // Dominios permitidos para imágenes
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

export default nextConfig;
