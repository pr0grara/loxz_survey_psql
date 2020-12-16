import { connect } from "react-redux";
import SurveyFactory from "./survey_factory";
import { newSurvey } from "../../actions/surveys_actions";

const mSTP = (state) => ({
  resultNo: localStorage.surveyNo,
});

const mDTP = (dispatch) => ({
  newSurvey: (data) => newSurvey(data)
});

export default connect(mSTP, mDTP)(SurveyFactory);
