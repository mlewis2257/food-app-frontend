import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; 

const api = axios.create({
    baseURL: API_BASE_URL
});

// user login
export const login = async (username, password) => {
    const response = await api.post('/token/', { username, password });
    localStorage.setItem('accessToken', response.data.access);
    localStorage.setItem('refreshToken', response.data.refresh);
    return response.data;
};

// refresh token
export const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await api.post('/token/refresh/', { refresh: refreshToken });
    localStorage.setItem('accessToken', response.data.access);
    return response.data.access;
};

// user logout
export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
};

// axios Interceptor to handle automatic token refresh
api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        // Handling Authentication Error (Token Expiration)
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newAccessToken = await refreshToken();
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
                return api(originalRequest);
            } catch (refreshError) {
                // If refresh fails, it could be a sign to log out, or you might just reject the promise
                return Promise.reject(refreshError);
            }
        }

        // Handling Authorization Error
        if (error.response.status === 403) {
            // Handle forbidden access here (e.g., show a message to the user)
            // Do not log out the user
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);

export default api;
