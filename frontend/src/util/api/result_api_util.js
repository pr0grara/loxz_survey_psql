import axios from 'axios';

export const getResult = number => {
  return axios.get(`/api/results/data/${number}`)
}