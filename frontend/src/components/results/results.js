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

  componentDidMount() {
    let loading = document.querySelector("#loading");
    if (loading) loading.remove();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  result() {
    // this.props.gatherResult(this.props.resultNo)
    var answers = JSON.parse(localStorage.result);
    // console.log(answers) 
    answers = answers.map((answer, idx) => {
      // console.log("Q" + idx.toString())
      return (
        <div className="survey-result" key={"Result" + idx}>
          <label>{idx + 1}</label>
          <ul className="survey-result-data">
            <li className="survey-result-question" key={"Q" + idx.toString()}>
              Question: {answer.question}
            </li>
            <li className="survey-result-answer" key={"A" + idx.toString()}>
              Answer: {typeof answer.content === "string" ? answer.content : answer.content}
            </li>
            <label key={"L" + idx}>{answer.analysis === "" ? "" : "Azure Key Phrase(s):"}</label>
            <li className="survey-result-analysis" key={"K" + idx.toString()}>
              {answer.analysis === "" ? "" : answer.analysis.join(", ")}
            </li>
          </ul>
        </div>
      );
    });
    return answers;
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