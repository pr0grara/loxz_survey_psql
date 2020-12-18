import * as APIUtil from "../util/api/answer_api_util";
import { Link } from "react-router-dom";

export const RECEIVE_ANSWER = "RECEIVE_ANSWER";

export const receiveAnswer = (answer) => ({
  type: RECEIVE_ANSWER,
  result,
});

export const newAnswer = (data) => {
  return APIUtil.newAnswer(data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
};
