import axios from 'axios';

const API_URL = 'https://your-api-endpoint.com'; // Replace with your API endpoint

export const fetchData = async (lang) => {
  try {
    const response = await axios.get(`${API_URL}/data?lang=${lang}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
