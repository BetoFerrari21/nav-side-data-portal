import React from 'react';
import { Link } from 'react-router-dom';

const FinanceBlock = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
  </div>
);

const Financeiro = () => {
  // These values would typically come from an API or state management
  const saldoDisponivel = 0.12;
  const saldoPendente = 0.00;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Financeiro</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FinanceBlock title="Saldo disponível" value={`R$ ${saldoDisponivel.toFixed(2)}`} />
        <FinanceBlock title="Saldo pendente" value={`R$ ${saldoPendente.toFixed(2)}`} />
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <Link to="/alterar-conta-cnpj" className="text-blue-600 hover:text-blue-800">
          Alterar minha conta para CNPJ
        </Link>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Efetuar saque
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Link to="/saques" className="text-blue-600 hover:text-blue-800">Saques</Link>
        <Link to="/dados-bancarios" className="text-blue-600 hover:text-blue-800">Dados bancários</Link>
        <Link to="/taxas" className="text-blue-600 hover:text-blue-800">Taxas</Link>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Identidade</h3>
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Example row, you would map over actual data here */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-03-15</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">R$ 100,00</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Aprovado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Financeiro;