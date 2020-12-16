import React from 'react';
import QuestionIndexContainer from '../question/question_index_container'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import alert from 'alert';

class SurveyFactory extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let loading = document.querySelector("#loading");
    if (loading) loading.remove();
  }

  handleSubmit(e) {
    e.preventDefault();
    var user = document.querySelector("#user-name").value;
    if (!user) {
      alert("Please add your name for tracking purposes");
      return
    }
    var rawQuestions = JSON.parse(localStorage["questions"])
    var htmlQuestions = Array.from(document.querySelectorAll(".selected"));
    if (htmlQuestions.length == 0) {
      alert("Surveys generally include questions... click on the questions you'd like to include");
      return
    }
    var questionNums = htmlQuestions.map(question => question.dataset.number);
    var jsonQuestions = questionNums.map(num => rawQuestions[num]);
    console.log(jsonQuestions, user);
    var data = { user, questions: jsonQuestions };
    this.props.newSurvey(data);
  }

  render() {
    return (
      <div id="survey-factory">
        <div className="label">Click on the questions you'd like to include in your survey:</div>
        <QuestionIndexContainer />
        <div className="label">Your Name</div>
        <input type="text" id="user-name"></input>
        <input
          type="submit"
          className="submit"
          onClick={this.handleSubmit}
          value="Make Survey"
        ></input>
      </div>
    );
  }
}

export default SurveyFactory;