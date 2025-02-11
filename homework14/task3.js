// api.js
const axios = require('axios');

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

module.exports = { fetchData };
