const axios = require('axios');

class ExternalAPIService {
    constructor(baseURL) {
        this.apiClient = axios.create({ baseURL });
    }

    async fetchData(endpoint) {
        try {
            const response = await this.apiClient.get(endpoint);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching data: ${error.message}`);
        }
    }
}

module.exports = ExternalAPIService;