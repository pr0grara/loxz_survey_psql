import * as APIUtil from "../util/api/result_api_util";
import { Link } from 'react-router-dom';

export const RECEIVE_RESULT = "RECEIVE_RESULT";

export const receiveResult = (result) => ({
  type: RECEIVE_RESULT,
  result
});

export const gatherResult = (id) => {
  // debugger
  return APIUtil.getResult(id)
    .then((result) => {
      // console.log(result.data)
      // debugger
      if (result.data) {
        // debugger
        localStorage.setItem("result", JSON.stringify(result.data.answers));
      }
      // window.location.assign("https://loxz-survey.herokuapp.com/#/survey/results")
      window.location.assign("http://localhost:3000/#/survey/results")
      // dispatch(receiveResult(result))
    })
    .catch((err) => console.log(err));
};