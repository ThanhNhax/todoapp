import { axiosConfig } from '../utils/configAxios/configAxios';

export const registerApi = async (val) => {
  const data = await axiosConfig.post('/auth/register', val);
  return data.data;
};
export const loginApi = async (val) => {
  const data = await axiosConfig.post('auth/login', val);
  return data.data;
};
export const getUserByEmail = async (email) => {
  console.log({ email });
  const data = await axiosConfig.get(`/auth/${email}`)

  return data.data;
};
