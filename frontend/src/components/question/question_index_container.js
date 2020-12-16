import { connect } from "react-redux";
import QuestionIndex from "./question_index";
import { getQuestions, deleteQuestion } from "../../actions/questions_actions";

const mSTP = (state) => ({
  resultNo: localStorage.surveyNo,
});

const mDTP = (dispatch) => ({
  getQuestions: () => getQuestions(),
  deleteQuestion: (num) => deleteQuestion(num),
});

export default connect(mSTP, mDTP)(QuestionIndex);
