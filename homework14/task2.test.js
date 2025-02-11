const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const makeRequest = require('./task2'); // Шлях до вашої функції

describe('makeRequest function', () => {
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.restore();
    });

    it('should include custom headers and params in the request', async () => {
        const url = 'https://example.com/api';
        const headers = { 'Authorization': 'Bearer token' };
        const params = { key: 'value' };

        mock.onGet(url).reply(config => {
            // Перевіряємо, чи заголовки та параметри правильно включені в запит
            expect(config.headers).toEqual(expect.objectContaining(headers));
            expect(config.params).toEqual(params);
            return [200, {}];
        });

        await makeRequest(url, headers, params);
    });
});