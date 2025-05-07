import authService from './auth.service';

class ApiService {
    constructor() {
        this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
    }

    // Get headers with authentication token
    async getHeaders() {
        const token = await authService.getToken();
        return {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : ''
        };
    }

    // Generic request method
    async request(endpoint, options = {}) {
        const headers = await this.getHeaders();
        const config = {
            ...options,
            headers: {
                ...headers,
                ...options.headers
            }
        };

        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, config);
            const data = await response.json();

            if (!response.ok) {
                // Handle authentication errors
                if (response.status === 401) {
                    // Token might be expired, try to refresh
                    const newToken = await authService.getToken();
                    if (newToken) {
                        // Retry the request with new token
                        config.headers['Authorization'] = `Bearer ${newToken}`;
                        const retryResponse = await fetch(`${this.baseURL}${endpoint}`, config);
                        return await retryResponse.json();
                    }
                }
                throw new Error(data.message || 'API request failed');
            }

            return data;
        } catch (error) {
            console.error('API Request Error:', error);
            throw error;
        }
    }

    // GET request
    async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    }

    // POST request
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    // PUT request
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    // DELETE request
    async delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }
}

// Create a singleton instance
const apiService = new ApiService();
export default apiService; 