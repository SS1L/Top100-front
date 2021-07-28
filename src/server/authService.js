import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const registartion = () => {

};

const login = (data) => {
  return axios.post(`${API_URL}/api/login`, data)
    .then((res) => {
      if (res.data.accessToken && res.data.refreshToken) {
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export default {
  registartion,
  login,
  logout,
};
