import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

async function registration(data) {
  await axios.post(`${API_URL}/api/registration`, data);
}

export default registration;
