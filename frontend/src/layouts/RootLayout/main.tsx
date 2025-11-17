import { Outlet } from 'react-router-dom';
import type { RootLayoutProps } from './types';

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Catálogo de Carros</h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children || <Outlet />}</main>
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © 2024 Catálogo de Carros. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};
