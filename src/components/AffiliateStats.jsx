import React from 'react';

const AffiliateStats = ({ affiliates }) => {
  const totalAffiliates = affiliates.length;
  const totalSales = affiliates.reduce((sum, affiliate) => sum + affiliate.sales, 0);
  const totalCommission = affiliates.reduce((sum, affiliate) => sum + affiliate.commission, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Estatísticas de Afiliados</h3>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-gray-600">Total de Afiliados</p>
          <p className="text-2xl font-bold">{totalAffiliates}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Total de Vendas</p>
          <p className="text-2xl font-bold">{totalSales}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Comissões Pagas</p>
          <p className="text-2xl font-bold">R$ {totalCommission.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateStats;