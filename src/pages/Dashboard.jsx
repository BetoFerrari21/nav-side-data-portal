import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import FacebookAdSearch from '../components/FacebookAdSearch';

const Dashboard = () => {
  const barChartData = [
    { name: 'Jan', receita: 4000, despesas: 2400 },
    { name: 'Fev', receita: 3000, despesas: 1398 },
    { name: 'Mar', receita: 2000, despesas: 9800 },
    { name: 'Abr', receita: 2780, despesas: 3908 },
    { name: 'Mai', receita: 1890, despesas: 4800 },
    { name: 'Jun', receita: 2390, despesas: 3800 },
  ];

  const pieChartData = [
    { name: 'Produto A', valor: 400 },
    { name: 'Produto B', valor: 300 },
    { name: 'Produto C', valor: 300 },
    { name: 'Produto D', valor: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Visão Geral do Painel</h2>
      
      <FacebookAdSearch />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Receita vs Despesas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="receita" fill="#8884d8" />
              <Bar dataKey="despesas" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Distribuição de Produtos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="valor"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Receita Total</h3>
          <p className="text-3xl font-bold text-green-600">R$ 24.000</p>
          <p className="text-sm text-gray-500">+15% em relação ao mês passado</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Usuários Ativos</h3>
          <p className="text-3xl font-bold text-blue-600">1.234</p>
          <p className="text-sm text-gray-500">+7% em relação à semana passada</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Taxa de Conversão</h3>
          <p className="text-3xl font-bold text-purple-600">2,8%</p>
          <p className="text-sm text-gray-500">+0,3% em relação ao último trimestre</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;