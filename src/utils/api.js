import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoData = async (endpoint) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${endpoint}`);
    return data;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return null;
  }
};