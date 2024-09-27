import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, CreditCard, Bank, Percent, UserCheck } from 'lucide-react';

const FinanceBlock = ({ title, value, subtitle }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
    {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
  </div>
);

const ActionLink = ({ href, icon: Icon, children }) => (
  <Link to={href} className="flex items-center text-gray-600 hover:text-gray-800">
    <Icon className="mr-2 h-5 w-5" />
    <span>{children}</span>
  </Link>
);

const Financeiro = () => {
  const saldoDisponivel = 0.00;
  const saldoPendente = 0.00;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Financeiro</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded flex items-center">
          <Download className="mr-2 h-4 w-4" />
          Exportar
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FinanceBlock 
          title="Saldo disponível" 
          value={`R$ ${saldoDisponivel.toFixed(2)}`}
          subtitle="Disponível para saque"
        />
        <FinanceBlock 
          title="Saldo pendente" 
          value={`R$ ${saldoPendente.toFixed(2)}`}
          subtitle="Será liberado nos próximos dias"
        />
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="space-y-3">
          <ActionLink href="/saques" icon={CreditCard}>Saques</ActionLink>
          <ActionLink href="/dados-bancarios" icon={Bank}>Dados bancários</ActionLink>
          <ActionLink href="/taxas" icon={Percent}>Taxas</ActionLink>
          <ActionLink href="/identidade" icon={UserCheck}>Identidade</ActionLink>
        </div>
        <button className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
          Solicitar saque
        </button>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Transações</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Financeiro;