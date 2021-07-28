import axios from 'axios';
import authHeader from './authHeader';

const API_URL = process.env.REACT_APP_API_URL;

const getMovieInfo = () => axios.get(`${API_URL}/api/movie`, { headers: authHeader });

const getMovieList = () => axios.get(`${API_URL}/api/moviesList`, { headers: authHeader });

const addMovie = () => axios.post(`${API_URL}/api/movie`, { headers: authHeader });

const updateMovie = () => axios.put(`${API_URL}/api/movie`, { headers: authHeader });

const deleteMovie = () => axios.delete(`${API_URL}/api/movie`, { headers: authHeader });

export default {
  getMovieInfo,
  getMovieList,
  addMovie,
  updateMovie,
  deleteMovie,
};
