import axios from 'axios';

  const API_BASE_URL = 'http://localhost:5000'; 

export const loginUser = async (userData) => {
 
    try {
      const response = await axios.post(`${API_BASE_URL}/Signin`, userData); // Adjust the endpoint
      console.log(response);
      return response.data;
      

    } catch (error) {
      throw error;
    }
  }