import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; 

export const registerUser = async (userData) => {
  console.log('user data', userData); // Log the user data properly

  try {
    const response = await axios.post(`${API_BASE_URL}/Registration`, userData);
    console.log(response.data);
    console.log(response.data + " api response");
    
    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
    if (error.response) {
      console.error('Response data:', error.response.data); // Log the response data for debugging
      // Extract and throw the message from the response
      throw new Error(error.response.data.message || 'Registration failed'); 
    } else {
      throw new Error('Registration failed, please try again later');
    }
  }
};
