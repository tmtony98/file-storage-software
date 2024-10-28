import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Set your API base URL
  // timeout: 10000, // Set a timeout for requests (in milliseconds)
});

// Add an interceptor to handle tokens
axiosInstance.interceptors.request.use(
  async (config) => {
    // Get the token using your authentication logic (e.g., from local storage or a global state)
    const token = sessionStorage.getItem('token'); // Assuming you store the token in localStorage

    // Set the token in the request headers
    config.headers.Authorization = `Bearer ${token}`

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;