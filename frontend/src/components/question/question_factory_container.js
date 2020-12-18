import { connect } from "react-redux";
import QuestionFactory from './question_factory';
import { newQuestion } from '../../actions/questions_actions';

const mSTP = (state) => ({
  resultNo: localStorage.surveyNo
});

const mDTP = (dispatch) => ({
  addQuestion: (data) => newQuestion(data)
});

export default connect(mSTP, mDTP)(QuestionFactory);
