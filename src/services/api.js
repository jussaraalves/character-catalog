import axios from 'axios';

const apiDomain = "https://rickandmortyapi.com/api"

const api = axios.create({
  baseURL: apiDomain
})

export default api;