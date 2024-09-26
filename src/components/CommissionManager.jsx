import React, { useState } from 'react';

const CommissionManager = () => {
  const [commissionRate, setCommissionRate] = useState(10);

  const handleCommissionChange = (e) => {
    setCommissionRate(Number(e.target.value));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Gerenciar Comissões</h3>
      <div>
        <label htmlFor="commissionRate" className="block text-sm font-medium text-gray-700 mb-2">
          Taxa de Comissão (%)
        </label>
        <input
          type="number"
          id="commissionRate"
          value={commissionRate}
          onChange={handleCommissionChange}
          min="0"
          max="100"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Os afiliados receberão {commissionRate}% de comissão sobre as vendas.
      </p>
    </div>
  );
};

export default CommissionManager;