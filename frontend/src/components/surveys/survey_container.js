import { connect } from "react-redux";
import Survey from "./survey";
import { gatherResult } from "../../actions/results_actions";
import { gatherSurvey } from "../../actions/surveys_actions";

const mSTP = (state) => ({
  resultNo: localStorage.surveyNo,
});

const mDTP = (dispatch) => ({
  loadSurvey: (surveyId) => gatherSurvey(surveyId),
  loadResults: (surveyNo) => gatherResult(surveyNo),
});

export default connect(mSTP, mDTP)(Survey);
