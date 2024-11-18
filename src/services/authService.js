import axios from 'axios';

const API_URL = ''; 

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token); 
    }
    return response.data;
  } catch (error) {
    throw new Error('Erro no login');
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};