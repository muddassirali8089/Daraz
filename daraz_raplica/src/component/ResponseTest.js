import React, { useState } from 'react';
import { registerUser } from '../'; // Import the function that makes the API call

const ResponseTest = () => {
  const [userData, setUserData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    birthdate: '1990-01-01',
    gender: 'male',
  });

  const handleRegister = async () => {
    try {
      const response = await registerUser(userData);
      console.log('API Response:', response.token);

      // Now you can use the response data in your component state or perform other actions
      // For example, you can set the response in the component state:
      // setMyResponse(response);

    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <div>
      <h1>ResponseTest Component</h1>
      <button onClick={handleRegister}>Register User</button>
      {/* You can display the response or other UI based on the API response */}
    </div>
  );
};

export default ResponseTest;
