import * as APIUtil from "../util/api/result_api_util";

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
      window.location.assign("https://loxz-survey.herokuapp.com/#/survey/results")
      // window.location.assign(window.location.href + "/results")
      // dispatch(receiveResult(result))
    })
    .catch((err) => console.log(err));
};