import axios from 'axios';

export const registerApi = async (val) => {
  const data = await axios.post('http://localhost:6060/api/auth/register', val);
  return data.data;
};
export const loginApi = async (val) => {
  const data = await axios.post('http://localhost:6060/api/auth/login', val);
  return data.data;
};
