import { connect } from "react-redux";
import Welcome from "./welcome";
import { getQuestions } from "../../actions/questions_actions";

const mSTP = (state) => ({
});

const mDTP = (dispatch) => ({
  getQuestions: () => getQuestions(),
  
});

export default connect(mSTP, mDTP)(Welcome);