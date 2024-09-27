import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, Users, ShoppingBag, UserCheck, DollarSign, Repeat, CreditCard, BarChart2, Users as UsersIcon, Grid, Gift, HelpCircle, Layers } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Produtos', icon: Package, path: '/products' },
    { name: 'Área de Membros', icon: Users, path: '/members' },
    { name: 'Marketplace', icon: ShoppingBag, path: '/marketplace' },
    { name: 'Meus Afiliados', icon: UserCheck, path: '/affiliates' },
    { name: 'Vendas', icon: DollarSign, path: '/sales' },
    { name: 'Assinaturas', icon: Repeat, path: '/subscriptions' },
    { name: 'Financeiro', icon: CreditCard, path: '/financial' },
    { name: 'Relatórios', icon: BarChart2, path: '/reports' },
    { name: 'Colaboradores', icon: UsersIcon, path: '/collaborators' },
    { name: 'Apps', icon: Grid, path: '/apps' },
    { name: 'Indique & Ganhe 1.5%', icon: Gift, path: '/refer' },
    { name: 'Ajuda', icon: HelpCircle, path: '/help' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link to="/" className="text-white flex items-center space-x-2 px-4">
        <Layers className="h-8 w-8" />
        <span className="text-2xl font-extrabold">Zpixpay</span>
      </Link>
      <nav className="space-y-1 overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            <item.icon className="inline-block mr-2" size={20} />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;