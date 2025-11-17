import { useParams, useNavigate } from 'react-router-dom';
import { LoadingSpinner, ErrorMessage } from '@/core/components';
import type { VehicleDetailPageProps } from './types';

/**
 * @page VehicleDetailPage
 * @summary Vehicle detail page displaying vehicle information and contact form
 * @domain vehicle
 * @type detail-page
 * @category vehicle-management
 *
 * @routing
 * - Path: /vehicle/:id
 * - Params: { id: string }
 * - Guards: None (public page)
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Vehicle details, contact form
 *
 * @data
 * - Sources: Vehicle API
 * - Loading: Skeleton loading states
 * - Caching: 5 minutes stale time
 */
export const VehicleDetailPage = (props: VehicleDetailPageProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return (
      <ErrorMessage
        title="Veículo não encontrado"
        message="ID do veículo não foi fornecido."
        onBack={() => navigate('/')}
      />
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Detalhes do Veículo</h2>
        <p className="text-gray-700">Esta página exibirá os detalhes do veículo com ID: {id}</p>
        <p className="text-gray-600 mt-2">
          As funcionalidades de visualização de detalhes e formulário de contato serão implementadas
          aqui.
        </p>
      </div>
    </div>
  );
};

export default VehicleDetailPage;
