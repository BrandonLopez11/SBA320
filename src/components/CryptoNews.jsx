import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/styles.css";

const CryptoNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://cryptonews-api.com/api/v1", {
          params: {
            apikey: "your_api_key",
            category: "general",
          },
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="news-widget">
      <h2>Latest Crypto News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoNews;
