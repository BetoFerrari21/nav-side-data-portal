import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import SalesFilters from '../components/SalesFilters';

// Simulated API call
const fetchSales = async () => {
  // This would be replaced with an actual API call
  return [
    { id: 1, date: '2023-03-01', product: 'Product A', customer: 'John Doe', status: 'approved', value: 100 },
    { id: 2, date: '2023-03-02', product: 'Product B', customer: 'Jane Smith', status: 'pending', value: 150 },
    { id: 3, date: '2023-03-03', product: 'Product C', customer: 'Bob Johnson', status: 'approved', value: 200 },
    // Add more mock data as needed
  ];
};

const Sales = () => {
  const [filters, setFilters] = useState({
    status: 'all',
    startDate: '',
    endDate: '',
    product: '',
    customer: '',
  });

  const { data: sales, isLoading, error } = useQuery({
    queryKey: ['sales'],
    queryFn: fetchSales,
  });

  const filteredSales = useMemo(() => {
    if (!sales) return [];
    return sales.filter(sale => {
      if (filters.status !== 'all' && sale.status !== filters.status) return false;
      if (filters.startDate && new Date(sale.date) < new Date(filters.startDate)) return false;
      if (filters.endDate && new Date(sale.date) > new Date(filters.endDate)) return false;
      if (filters.product && !sale.product.toLowerCase().includes(filters.product.toLowerCase())) return false;
      if (filters.customer && !sale.customer.toLowerCase().includes(filters.customer.toLowerCase())) return false;
      return true;
    });
  }, [sales, filters]);

  const totalValue = useMemo(() => {
    return filteredSales.reduce((sum, sale) => sum + sale.value, 0);
  }, [filteredSales]);

  const approvedValue = useMemo(() => {
    return filteredSales.filter(sale => sale.status === 'approved').reduce((sum, sale) => sum + sale.value, 0);
  }, [filteredSales]);

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar vendas: {error.message}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Vendas</h2>
      
      <SalesFilters filters={filters} setFilters={setFilters} />
      
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">Vendas encontradas</h3>
          <p className="text-2xl font-bold">{filteredSales.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">Valor líquido (todas)</h3>
          <p className="text-2xl font-bold">R$ {totalValue.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">Valor líquido (aprovadas)</h3>
          <p className="text-2xl font-bold">R$ {approvedValue.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor Líquido</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredSales.map((sale) => (
              <tr key={sale.id}>
                <td className="px-6 py-4 whitespace-nowrap">{sale.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sale.product}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sale.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    sale.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {sale.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">R$ {sale.value.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;