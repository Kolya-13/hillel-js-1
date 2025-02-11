const axios = require('axios');

async function makeRequest(url, headers, params) {
    try {
        const response = await axios.get(url, {
            headers: headers,
            params: params
        });
        return response.data;
    } catch (error) {
        console.error('Error making request:', error);
        throw error;
    }
}

module.exports = makeRequest;