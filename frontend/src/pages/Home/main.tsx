import type { HomePageProps } from './types';

export const HomePage = (props: HomePageProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Bem-vindo ao Catálogo de Carros</h2>
        <p className="text-lg text-gray-600">Explore nossa seleção de veículos disponíveis</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-700">
          Esta é a página inicial do catálogo. As funcionalidades de listagem de veículos serão
          implementadas aqui.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
