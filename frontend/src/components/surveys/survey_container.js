import { connect } from "react-redux";
import Survey from "./survey";
import { gatherResult } from "../../actions/results_actions";

const mSTP = (state) => ({
  resultNo: localStorage.surveyNo,
});

const mDTP = (dispatch) => ({
  loadResults: (surveyNo) => gatherResult(surveyNo),
});

export default connect(mSTP, mDTP)(Survey);
