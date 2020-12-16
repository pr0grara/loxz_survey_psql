import * as APIUtil from "../util/api/survey_api_util";
import { Link } from 'react-router-dom';

export const RECEIVE_SURVEY = "RECEIVE_SURVEY";

export const receiveResult = (result) => ({
  type: RECEIVE_SURVEY,
  result
});

export const gatherSurvey = (id) => {
  return APIUtil.getSurvey(id)
    .then((survey) => {
      console.log(survey.data)
      if (survey.data) {
        localStorage.setItem("survey", JSON.stringify(survey.data.questions));
      }
      window.location.reload();
      // window.location.assign("https://loxz-survey.herokuapp.com/#/survey/results")
      // window.location.assign(window.location.href + "/results")
      // dispatch(receiveResult(result))
    })
    .catch((err) => console.log(err));
};

export const getSurveys = () => {
  return APIUtil.getSurveys()
    .then(surveys => {
      // debugger
      localStorage.setItem("surveys", JSON.stringify(surveys.data))
    })
    .catch(err => console.log(err))
}

export const newSurvey = (data) => {
  return APIUtil.newSurvey(data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}