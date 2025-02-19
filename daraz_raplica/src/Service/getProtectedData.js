import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; 

export const getProtectedData = async () => {
  try {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    const response = await axios.get(`${API_BASE_URL}/`, {
      headers: {
        Authorization: token // Send token in Authorization header
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
