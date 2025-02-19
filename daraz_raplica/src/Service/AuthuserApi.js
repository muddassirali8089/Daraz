import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Backend URL

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);
    console.log('API Response:', response); // Log the API response
    return response.data;
  } catch (error) {
    if (error.response) {
      // Log error details from the backend
      console.error('Error response:', error.response.data);
      throw new Error(error.response.data.message || 'Login failed');
    } else {
      // Log general error
      console.error('Error:', error.message);
      throw new Error('Login failed');
    }
  }
};


export const resendVerification = async (userData) => {
  
  try {
    const response = await axios.post(`${API_BASE_URL}/resend-verification`, userData);
    console.log(`responce for backend {${response.data}}`);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};