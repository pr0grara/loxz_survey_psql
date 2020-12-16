import axios from 'axios';

export const getSurvey = number => {
  // debugger
  return axios.get(`/api/surveys/data/${number}`)
}

export const getSurveys = () => {
  return axios.get(`api/surveys/all`)
}

export const newSurvey = data => {
  return axios.post(`/api/surveys/new/`, data);
}