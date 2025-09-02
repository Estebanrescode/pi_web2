// app/sign-in/layout.tsx
import { ReactNode } from "react";

export const metadata = {
  title: "Iniciar sesión | NEONIX",
};

export default function SignUpLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="h-2 bg-gradient-to-r dark:from-indigo-400 via-purple-400 to-pink-400"></div>
        <div className="p-8">
          <div className="flex justify-center mb-6">
             <div className="w-16 h-16 bg-orange-600 dark:bg-violet-600 rounded-full flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800">Registrate</h2>
          <p className="text-gray-500 mt-2 text-center">Se parte de NEONIX</p>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
