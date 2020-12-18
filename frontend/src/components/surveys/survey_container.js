import { connect } from "react-redux";
import Survey from "./survey";
import { gatherResult, newResult, resultCount } from "../../actions/results_actions";
import { gatherSurvey } from "../../actions/surveys_actions";
import { newAnswer } from "../../actions/answers_actions";

const mSTP = (state) => ({
  resultNo: localStorage.surveyNo,
});

const mDTP = (dispatch) => ({
  loadSurvey: (surveyId) => gatherSurvey(surveyId),
  loadResults: (surveyNo) => gatherResult(surveyNo),
  newAnswer: (answer) => newAnswer(answer),
  newResult: (result) => newResult(result),
  resultCount: () => resultCount(),
});

export default connect(mSTP, mDTP)(Survey);
