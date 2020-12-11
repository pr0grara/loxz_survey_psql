import { RECEIVE_RESULT } from "../actions/results_actions";

export const resultsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_RESULT:
      debugger
      console.log(action.result)
      nextState[action.result.number] = action.result;
      return nextState;
    default:
      return state;
  }
};

export default resultsReducer;
