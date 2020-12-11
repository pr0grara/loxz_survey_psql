import axios from 'axios';

export const getResult = number => {
  // debugger
  return axios.get(`/api/results/data/${number}`)
}