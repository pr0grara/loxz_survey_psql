import axios from "axios";

export const newAnswer = (data) => {
  // debugger
  return axios.post(`/api/answers/new`, data);
};
