import * as APIUtil from "../util/api/survey_api_util";
import { Link } from 'react-router-dom';

export const RECEIVE_SURVEY = "RECEIVE_SURVEY";

export const receiveResult = (result) => ({
  type: RECEIVE_SURVEY,
  result
});

export const gatherSurvey = (id) => {
  debugger
  return APIUtil.getSurvey(id)
    .then((survey) => {
      console.log(survey.data)
      // debugger
      if (survey.data) {
        // debugger
        localStorage.setItem("survey", JSON.stringify(survey.data.questions));
      }
      // window.location.assign("https://loxz-survey.herokuapp.com/#/survey/results")
      // window.location.assign(window.location.href + "/results")
      // dispatch(receiveResult(result))
    })
    .catch((err) => console.log(err));
};