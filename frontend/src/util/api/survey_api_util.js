import axios from 'axios';

export const getSurvey = number => {
  // debugger
  return axios.get(`/api/surveys/data/${number}`)
}