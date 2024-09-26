import React from 'react';

const AffiliateList = ({ affiliates }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Lista de Afiliados</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Nome</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Vendas</th>
              <th className="py-2 px-4 text-left">Comissão</th>
            </tr>
          </thead>
          <tbody>
            {affiliates.map((affiliate) => (
              <tr key={affiliate.id} className="border-b">
                <td className="py-2 px-4">{affiliate.name}</td>
                <td className="py-2 px-4">{affiliate.email}</td>
                <td className="py-2 px-4">{affiliate.sales}</td>
                <td className="py-2 px-4">R$ {affiliate.commission.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AffiliateList;