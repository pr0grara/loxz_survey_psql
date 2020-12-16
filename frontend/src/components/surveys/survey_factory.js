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
  }

  render() {
    return (
      <div id="survey-factory">
        <div className="label">Click on the questions you'd like to include in your survey:</div>
        <QuestionIndexContainer />
      </div>
    );
  }
}

export default SurveyFactory;