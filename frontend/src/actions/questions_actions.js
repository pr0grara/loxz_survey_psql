import * as APIUtil from "../util/api/question_api_util";
import { Link } from 'react-router-dom';

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";

export const receiveQuestion = (question) => ({
  type: RECEIVE_QUESTION,
  question
});

export const makeQuestion = (data) => {
  return APIUtil.newQuestion(data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};