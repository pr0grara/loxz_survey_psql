import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import alert from 'alert';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.result = this.result.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
  }

  result() {
    this.props.gatherResult(33)
    var answers = JSON.parse(localStorage.result)
    console.log(answers)
    answers = answers.map((answer, idx) => {
      return (
        <div className="survey-result">
          <label>{idx+1}</label>
          <ul className="survey-result-data">
            <li className="survey-result-question">Question: {answer.question}</li>
            <li className="survey-result-answer">Answer: {answer.content}</li>
            <li className="survey-result-analysis">Key Phrase(s): {answer.analysis === "" ? "n/a" : answer.analysis.join(', ')}</li>
          </ul>
        </div>
      )
  })
    return(
      answers
    )
  }

  render() {
    return (
      <div id="results">
        <h1>RESULTS</h1>
        {this.result()}
      </div>
    );
  }
}

export default Welcome;