import * as APIUtil from "../util/api/result_api_util";

export const RECEIVE_RESULT = "RECEIVE_RESULT";

export const receiveResult = (result) => ({
  type: RECEIVE_RESULT,
  result
});

export const gatherResult = (id) => {
  return APIUtil.getResult(id)
    .then((result) => {
      // console.log(result.data)
      localStorage.setItem("result", JSON.stringify(result.data.answers))
      // dispatch(receiveResult(result))
    })
    .catch((err) => console.log(err));
};