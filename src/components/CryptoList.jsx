import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/styles.css";  
import SearchBar from "./SearchBar"; 

const CryptoList = ({ onCryptoSelect }) => {
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      const fetchCryptos = async () => {
        try {
          const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets",
            {
              params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 50,
                page: 1,
                sparkline: false,
              },
            }
          );
          setCryptos(response.data);
        } catch (error) {
          console.error("Error fetching crypto data:", error);
        }
      };
  
      fetchCryptos();
    }, []);
  
    const filteredCryptos = cryptos.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="crypto-list-container">
        <SearchBar onSearch={(term) => setSearchTerm(term)} />
        <div className="crypto-list">
          {filteredCryptos.length > 0 ? (
            filteredCryptos.map((crypto) => (
              <div
                className="crypto-card"
                key={crypto.id}
                onClick={() => onCryptoSelect(crypto.id)}
              >
                <h2>{crypto.name}</h2>
                <p>Current Price: ${crypto.current_price.toFixed(2)}</p>
                <p>Market Cap: ${crypto.market_cap.toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>No cryptocurrencies found matching your search.</p>
          )}
        </div>
      </div>
    );
};

export default CryptoList;
