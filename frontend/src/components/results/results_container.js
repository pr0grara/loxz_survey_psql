import { connect } from "react-redux";
import Results from './results';
import { gatherResult } from '../../actions/results_actions';

const mSTP = (state) => ({
  resultNo: localStorage.surveyNo
});

const mDTP = (dispatch) => ({
  gatherResult: (surveyNo) => gatherResult(surveyNo)
});

export default connect(mSTP, mDTP)(Results);
