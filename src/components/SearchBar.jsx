import React from 'react';
import "../styles/styles.css";


const SearchBar = ({ onSearch }) => {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a cryptocurrency..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  };

export default SearchBar;
