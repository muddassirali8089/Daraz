import axios from 'axios';

  const API_BASE_URL = 'http://localhost:5000'; 

export const loginUser = async (userData) => {
  console.log("Auth... " + userData);
    try {
      const response = await axios.post(`${API_BASE_URL}/Signin`, userData); // Adjust the endpoint
      
      return response.data;

    } catch (error) {
      throw error;
    }
  }