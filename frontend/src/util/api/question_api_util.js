import axios from 'axios';

export const getQuestions = () => {
  // debugger
  return axios.get(`/api/questions/all`);
}

export const getQuestion = (number) => {
  // debugger
  return axios.get(`/api/questions/data/${number}`);
}

export const getQuestionNumber = () => {
  // debugger
  return axios.get(`/api/questions/count`);
}

export const newQuestion = (data) => {
  // debugger
  return axios.post(`/api/questions/new`, data);
}

export const deleteQuestion = (number) => {
  return axios.post(`api/questions/delete/${number}`)
}