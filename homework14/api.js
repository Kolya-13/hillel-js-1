const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://incorrect-url.com');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong while fetching data');
  }
}

module.exports = fetchData;