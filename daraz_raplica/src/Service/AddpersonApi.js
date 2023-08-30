  import axios from 'axios';

  const API_BASE_URL = 'http://localhost:5000'; 

  export const registerUser = async (userData) => {

    try {
      const response = await axios.post(`${API_BASE_URL}/Registration`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
