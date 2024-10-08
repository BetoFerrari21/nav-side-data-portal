import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, CreditCard, Building, Percent, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FinanceBlock = ({ title, value, subtitle }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
    </CardContent>
  </Card>
);

const ActionLink = ({ href, icon: Icon, children }) => (
  <Link to={href} className="flex items-center text-gray-600 hover:text-gray-800">
    <Icon className="mr-2 h-5 w-5" />
    <span>{children}</span>
  </Link>
);

const Financeiro = () => {
  const saldoDisponivel = 5000.00;
  const saldoPendente = 2500.00;
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const transactions = [
    { id: 1, date: '2024-03-15', description: 'Venda do Produto A', value: 1500.00, status: 'Concluído' },
    { id: 2, date: '2024-03-14', description: 'Comissão de Afiliado', value: 250.00, status: 'Pendente' },
    { id: 3, date: '2024-03-13', description: 'Saque para Conta Bancária', value: -2000.00, status: 'Processando' },
    { id: 4, date: '2024-03-12', description: 'Venda do Produto B', value: 750.00, status: 'Concluído' },
    { id: 5, date: '2024-03-11', description: 'Estorno - Produto C', value: -500.00, status: 'Concluído' },
  ];

  const filteredTransactions = transactions.filter(transaction => {
    if (startDate && endDate) {
      return transaction.date >= startDate && transaction.date <= endDate;
    }
    return true;
  });

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Financeiro</h2>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Exportar
        </Button>
      </div>
      
      <p className="text-muted-foreground mb-6">Aqui você poderá gerenciar seus produtos e finanças.</p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
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
        <FinanceBlock 
          title="Total de vendas (mês)" 
          value="R$ 15.000,00"
          subtitle="20% de aumento"
        />
        <FinanceBlock 
          title="Comissões de afiliados" 
          value="R$ 3.750,00"
          subtitle="15% das vendas totais"
        />
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="space-y-3">
          <ActionLink href="/saques" icon={CreditCard}>Saques</ActionLink>
          <ActionLink href="/dados-bancarios" icon={Building}>Dados bancários</ActionLink>
          <ActionLink href="/taxas" icon={Percent}>Taxas</ActionLink>
          <ActionLink href="/identidade" icon={UserCheck}>Identidade</ActionLink>
        </div>
        <Button className="mt-4 md:mt-0">
          Solicitar saque
        </Button>
      </div>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Transações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <div className="space-x-2">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border rounded p-1"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border rounded p-1"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      R$ {transaction.value.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-500">
              Mostrando {(currentPage - 1) * itemsPerPage + 1} a {Math.min(currentPage * itemsPerPage, filteredTransactions.length)} de {filteredTransactions.length} resultados
            </p>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Financeiro;