import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AffiliateList from '../components/AffiliateList';
import AffiliateForm from '../components/AffiliateForm';
import AffiliateStats from '../components/AffiliateStats';
import CommissionManager from '../components/CommissionManager';

const fetchAffiliates = async () => {
  // Simulated API call
  return [
    { id: 1, name: 'John Doe', email: 'john@example.com', sales: 10, commission: 100 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', sales: 15, commission: 150 },
  ];
};

const Affiliates = () => {
  const [showForm, setShowForm] = useState(false);
  const { data: affiliates, isLoading, error } = useQuery({
    queryKey: ['affiliates'],
    queryFn: fetchAffiliates,
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar afiliados: {error.message}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Gerenciamento de Afiliados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AffiliateStats affiliates={affiliates} />
        <CommissionManager />
      </div>
      <div className="mt-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mb-4"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Fechar Formulário' : 'Adicionar Novo Afiliado'}
        </button>
        {showForm && <AffiliateForm />}
      </div>
      <AffiliateList affiliates={affiliates} />
    </div>
  );
};

export default Affiliates;