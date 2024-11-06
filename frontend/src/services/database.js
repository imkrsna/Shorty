import axios from 'axios';

const baseUrl = "/"

const createUrl = (url) => {
  const request = axios.post(`${baseUrl}/new`, {url: url});
  return request.then(res => res.data);
}

export default createUrl;