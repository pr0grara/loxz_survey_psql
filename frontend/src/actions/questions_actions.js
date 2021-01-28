import * as APIUtil from "../util/api/question_api_util";
import { Link } from 'react-router-dom';

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";

export const receiveQuestion = (question) => ({
  type: RECEIVE_QUESTION,
  question
});

export const getQuestions = () => {
  // debugger
  return APIUtil.getQuestions()
    .then(res => {
        localStorage.setItem("questions", JSON.stringify(res.data))
      console.log("questions updated in local storage")
      return
    })
    .catch(err => {
      console.log(err)
    })
}

export const newQuestion = (data) => {
  return APIUtil.newQuestion(data)
    .then((res) => {
      // debugger
      console.log(res)
      getQuestions();
      // window.location.assign("https://loxz-survey.herokuapp.com/#/home")
      window.location.reload();
    })
    .catch((err) => console.log(err));
};

export const deleteQuestion = (number) => {
  return APIUtil.deleteQuestion(number)
    .then(res => {
      console.log(res)
      return getQuestions();
    })
    .catch(err => console.log(err))
}

// export const editQuestion = (data) => {
//   return APIUtil.editQuestion(data)
//     .then(res => {
//       localStorage.questions
//     })
// }