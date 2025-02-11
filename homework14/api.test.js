const fetchData = require('./api');
const axios = require('axios');


jest.mock('axios');

describe('fetchData', () => {
  it('should throw an error if the request fails', async () => {
  
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(fetchData()).rejects.toThrow('Something went wrong while fetching data');
  });
});