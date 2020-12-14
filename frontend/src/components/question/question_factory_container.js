import { connect } from "react-redux";
import QuestionFactory from './question_factory';
import { makeQuestion } from '../../actions/questions_actions';

const mSTP = (state) => ({
  resultNo: localStorage.surveyNo
});

const mDTP = (dispatch) => ({
  addQuestion: (data) => makeQuestion(data)
});

export default connect(mSTP, mDTP)(QuestionFactory);
