import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const FacebookAdSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (category) => {
    // Simular uma busca (substitua isso por uma chamada API real)
    const fakeResults = [
      { id: 1, title: `Anúncio ${category} 1`, description: 'Descrição do anúncio 1' },
      { id: 2, title: `Anúncio ${category} 2`, description: 'Descrição do anúncio 2' },
      { id: 3, title: `Anúncio ${category} 3`, description: 'Descrição do anúncio 3' },
    ];
    setSearchResults(fakeResults);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Buscador de Anúncios do Facebook</h2>
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Buscar anúncios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow mr-2"
        />
        <Button onClick={() => handleSearch('geral')}>
          <Search className="mr-2 h-4 w-4" /> Buscar
        </Button>
      </div>
      <Tabs defaultValue="recentes" className="w-full">
        <TabsList>
          <TabsTrigger value="recentes" onClick={() => handleSearch('recentes')}>Anúncios Recentes</TabsTrigger>
          <TabsTrigger value="populares" onClick={() => handleSearch('populares')}>Mais Buscados</TabsTrigger>
          <TabsTrigger value="relevantes" onClick={() => handleSearch('relevantes')}>Mais Relevantes</TabsTrigger>
        </TabsList>
        <TabsContent value="recentes">
          <SearchResults results={searchResults} />
        </TabsContent>
        <TabsContent value="populares">
          <SearchResults results={searchResults} />
        </TabsContent>
        <TabsContent value="relevantes">
          <SearchResults results={searchResults} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const SearchResults = ({ results }) => {
  return (
    <div className="mt-4">
      {results.map((result) => (
        <div key={result.id} className="bg-white p-4 rounded-lg shadow mb-4">
          <h3 className="text-lg font-semibold">{result.title}</h3>
          <p className="text-gray-600">{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FacebookAdSearch;