import { connect } from "react-redux";
import Home from "./home";
import { getQuestions } from "../../actions/questions_actions";
import { getSurveys } from '../../actions/surveys_actions';

const mSTP = (state) => ({
});

const mDTP = (dispatch) => ({
  getQuestions: () => getQuestions(),
  getSurveys: () => getSurveys()
});

export default connect(mSTP, mDTP)(Home);