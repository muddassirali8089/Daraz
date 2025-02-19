import React, { useState } from 'react';
import { resendVerification } from '../Service/AuthuserApi'; // Your resend verification API
import { toast } from 'react-toastify';

const ResendVerification = () => {
  const [email, setEmail] = useState('');

  const handleResend = async () => {
    try {
      if (!email) {
        toast.error('Please enter your email.');
        return;
      }

      const response = await resendVerification({ email });
      toast.success(response.message);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error resending verification email.');
    }
  };

  return (
    <div>
      <h2>Resend Verification Email</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResend}>Resend Verification</button>
    </div>
  );
};

export default ResendVerification;
