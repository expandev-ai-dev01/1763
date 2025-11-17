import { useNavigate } from 'react-router-dom';
import type { NotFoundPageProps } from './types';

export const NotFoundPage = (props: NotFoundPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página não encontrada</h2>
      <p className="text-gray-600 mb-8">
        A página que você está procurando não existe ou foi movida.
      </p>
      <button
        onClick={() => navigate('/')}
        className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
      >
        Voltar para a página inicial
      </button>
    </div>
  );
};

export default NotFoundPage;
