import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "../styles/styles.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CryptoDetails = ({ selectedCryptoId, onGoBack }) => {
  const [cryptoDetails, setCryptoDetails] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchCryptoDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCryptoId}`
        );
        setCryptoDetails(response.data);
        const marketData = response.data.market_data;

        setChartData({
          labels: marketData.sparkline_7d.price.map((_, index) => index),
          datasets: [
            {
              label: "Price (USD)",
              data: marketData.sparkline_7d.price,
              borderColor: "#9374c2", 
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching crypto details:", error);
      }
    };

    if (selectedCryptoId) fetchCryptoDetails();
  }, [selectedCryptoId]);

  if (!cryptoDetails) return <p>Loading...</p>;

  return (
    <div className="crypto-details">
      <button onClick={onGoBack} className="back-button">Back to List</button>
      <h2>{cryptoDetails.name}</h2>
      <p>Symbol: {cryptoDetails.symbol.toUpperCase()}</p>
      <p>Current Price: ${cryptoDetails.market_data.current_price.usd}</p>
      <p>Market Cap Rank: {cryptoDetails.market_cap_rank}</p>
      <p>All-Time High: ${cryptoDetails.market_data.ath.usd}</p>
      <p>All-Time Low: ${cryptoDetails.market_data.atl.usd}</p>
      {chartData && (
        <div className="price-chart">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CryptoDetails;
