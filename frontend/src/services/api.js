import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function getErrorMessage(error) {
  return (
    error?.response?.data?.error?.message ||
    'Something went wrong. Please check your connection and try again.'
  );
}

export const contentApi = {
  getByPage: (page) => api.get('/content', { params: { page } }),
  getBySectionKey: (sectionKey) => api.get(`/content/${sectionKey}`),
};

export const productsApi = {
  list: () => api.get('/products'),
};

export const featuresApi = {
  list: () => api.get('/features'),
};

export const contactApi = {
  submit: (payload) => api.post('/contact', payload),
};

export const healthApi = {
  check: () => api.get('/health'),
};
