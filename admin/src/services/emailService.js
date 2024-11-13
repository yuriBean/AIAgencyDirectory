// services/emailService.js
import axios from 'axios';

export const sendInviteEmail = async (email, password) => {
  const response = await axios.post('http://localhost:5000/api/send-invite', {
    email,
    password,
  });
  return response.data;
};
