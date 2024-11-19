import React, { useState } from 'react';
import CryptoList from '../components/CryptoList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CryptoList searchTerm={searchTerm} />
    </div>
  );
};

export default Home;