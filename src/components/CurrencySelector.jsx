import React from "react";
import "../styles/styles.css";

const CurrencySelector = ({ currency, onCurrencyChange }) => {
  return (
    <div className="currency-selector">
      <label htmlFor="currency">Select Currency: </label>
      <select 
        id="currency" 
        value={currency} 
        onChange={(e) => onCurrencyChange(e.target.value)}
        className="dropdown"
      >
        <option value="usd">USD</option>
        <option value="eur">Euro</option>
        <option value="jpy">Yen</option>
        <option value="gbp">Pound</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
