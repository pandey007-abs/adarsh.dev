import axios from "axios";
import toast from "react-hot-toast";

// Create Axios instance with environment-based baseURL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth token here if needed
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Show success toast if message exists
    if (response.data?.success && response.data?.message) {
      toast.success(response.data.message);
    }
    return response;
  },
  (error) => {
    // Show error toast if message exists
    if (error.response?.data?.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred");
    }
    return Promise.reject(error);
  }
);

export default api;
