import { connect } from "react-redux";
import SurveyIndex from "./survey_index";
import { getSurveys } from '../../actions/surveys_actions';

const mSTP = (state) => ({
  resultNo: localStorage.surveyNo
});

const mDTP = (dispatch) => ({
  getSurveys: () => getSurveys()
});

export default connect(mSTP, mDTP)(SurveyIndex);
