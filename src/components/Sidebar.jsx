import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, DollarSign, Users, UserCheck, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link to="/" className="text-white flex items-center space-x-2 px-4">
        <span className="text-2xl font-extrabold">Zpixpay</span>
      </Link>
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link to="/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Package className="inline-block mr-2" size={20} />
          Produtos
        </Link>
        <Link to="/sales" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <DollarSign className="inline-block mr-2" size={20} />
          Vendas
        </Link>
        <Link to="/customers" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Users className="inline-block mr-2" size={20} />
          Clientes
        </Link>
        <Link to="/affiliates" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <UserCheck className="inline-block mr-2" size={20} />
          Afiliados
        </Link>
        <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Settings className="inline-block mr-2" size={20} />
          Configurações
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;