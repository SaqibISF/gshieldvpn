import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { USER_COOKIE_KEY } from '@/lib/constants';

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_REST_API_BASE_URL}`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const rawUser = Cookies.get(USER_COOKIE_KEY);

        if (rawUser) {
            try {
                const user = JSON.parse(rawUser);
                if (user?.access_token) {
                    config.headers['Authorization'] = `Bearer ${user.access_token}`;
                }
            } catch (err) {
                console.error('Invalid user cookie:', err);
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('admin_token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
