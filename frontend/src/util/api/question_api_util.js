import axios from 'axios';

export const getQuestion = (number) => {
  // debugger
  return axios.get(`/api/questions/data/${number}`);
}

export const getQuestionNumber = () => {
  // debugger
  return axios.get(`/api/questions/data`);
}

export const newQuestion = (data) => {
  // debugger
  return axios.post(`/api/questions/new`, data);
}