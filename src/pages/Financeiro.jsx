import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const FinanceBlock = ({ title, value, subtitle }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
    {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
  </div>
);

const ActionLink = ({ href, children }) => (
  <Link to={href} className="text-blue-600 hover:text-blue-800 flex items-center">
    {children}
    <ArrowRight className="ml-1 h-4 w-4" />
  </Link>
);

const Financeiro = () => {
  const saldoDisponivel = 0.12;
  const saldoPendente = 0.00;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Financeiro</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
          <Download className="mr-2 h-4 w-4" />
          Exportar
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
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
        <div className="space-y-2 mb-4 md:mb-0">
          <ActionLink href="/saques">Saques</ActionLink>
          <ActionLink href="/dados-bancarios">Dados bancários</ActionLink>
          <ActionLink href="/taxas">Taxas</ActionLink>
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
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
              {/* Exemplo de linha, você deve mapear sobre dados reais aqui */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-03-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Venda do produto X</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">R$ 100,00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Aprovado
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Financeiro;