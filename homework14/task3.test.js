const axios = require('axios');
const { fetchData } = require('./task3');

jest.mock('axios');

describe('fetchData', () => {
  it('повертає дані при успішному запиті', async () => {
    
    axios.get.mockResolvedValue({ data: { name: 'John', age: 30 } });

    const result = await fetchData();
    expect(result).toEqual({ name: 'John', age: 30 });
  });

  it('кидає помилку при невдалому запиті', async () => {
    
    axios.get.mockRejectedValue(new Error('Network Error'));

    try {
      await fetchData();
    } catch (error) {
      expect(error.message).toBe('Failed to fetch data');
    }
  });
});