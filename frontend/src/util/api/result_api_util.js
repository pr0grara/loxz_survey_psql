import axios from 'axios';

export const getResult = number => {
  // debugger
  return axios.get(`/api/results/data/${number}`)
}

export const resultCount = () => {
  return axios.get('/api/results/count')
}

export const newResult = data => {
  return axios.post(`/api/results/new`, data)
}