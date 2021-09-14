import axios from 'axios';
import { uuid } from 'uuidv4';

const token = localStorage.getItem('token');
export const axiosRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL || 'http://localhost:5000/api'
});
axiosRequest.interceptors.request.use((config) => {
  config.headers['Authorization'] = 'Bearer ' + token;
  return config;
});
axiosRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/error';
    }
  }
);

interface UserProps {
  homeAccountId: string;
  environment: string;
  tenantId: string;
  username: string;
  localAccountId: string;
  name?: string;
  idTokenClaims?: object;
}

export async function saveUser({ name, username }: UserProps) {
  const [lastName, firstName] = name!.trim().replace(/\s+/g, ' ').split(' ');
  const uuidv4 = uuid();
  return await axiosRequest.post('/user', {
    email: username,
    userName: username,
    lastName,
    firstName,
    microsoftToken: localStorage.getItem('microsoftToken'),
    profileImage: `${uuidv4}_profileImage${firstName}.png`,
    userRoles: [{ roleId: 1 }]
  });
}
