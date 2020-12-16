import React from 'react';
import trash_icon from './trash.png';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import alert from 'alert';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentWillMount() {
    this.props.getQuestions();
  }

  handleSubmit(e) {
    e.preventDefault();
    var selected = document.querySelectorAll(".selected")
    console.log(selected)
  }

  selectQuestion(e) {
    e.preventDefault();
    e.currentTarget.classList.toggle("selected")
  }

  deleteQuestion(e) {
    if (!confirm("delete permanently?")) return;
    let parent = e.currentTarget.parentElement;
    let number = parent.dataset.number;
    console.log(number);
    this.props.deleteQuestion(number);
  }

  trashIcon() {
    return <img src={trash_icon} alt="delete" className="icon" onClick={this.deleteQuestion} />
  }

  binaryFactory(question) {
    return (
      <div className="survey-question" aria-label="binary" key={question.name} data-number={question.number} onClick={this.selectQuestion}>
        <label className="question-content">{question.content}</label>
        <div className="binary-answers">
          <div
            className="answer binary"
            onClick={this.selectBinary}
            checked={false}
          >
            Yes
          </div>
          <div
            className="answer binary"
            onClick={this.selectBinary}
            checked={false}
          >
            No
          </div>
        </div>
        {this.trashIcon()}
      </div>
    );
  }

  openFactory(question) {
    return (
      <div className="survey-question" aria-label="open" key={question.name} data-number={question.number} onClick={this.selectQuestion}>
        <label className="question-content">{question.content}</label>
        <textarea className="answer open" />
        {this.trashIcon()}
      </div>
    );
  }

  multiFactory(question) {
    return (
      <div className="survey-question" aria-label="multi" key={question.name} data-number={question.number} onClick={this.selectQuestion}>
        <label className="question-content">{question.content}</label>
        <div className="multi-answers">
          {question.answers.map((answer, idx) => (
            <div
              className="answer multi"
              onClick={this.selectMulti}
              key={question.name + idx}
              checked={false}
            >
              {answer}
            </div>
          ))}
        </div>
        {this.trashIcon()}
      </div>
    );
  }

  singleFactory(question) {
    return (
      <div className="survey-question" aria-label="single" key={question.name} data-number={question.number} onClick={this.selectQuestion}>
        <label className="question-content">{question.content}</label>
        <div className="single-answers">
          {question.answers.map((answer, idx) => (
            <div className="answer single" key={question.name + idx} checked={false}>
              {answer}
            </div>
          ))}
        </div>
        {this.trashIcon()}
      </div>
    );
  }

  render() {
    var htmlQuestions = JSON.parse(localStorage.questions).map((question) => {
      switch (question.type) {
        case "binary":
          return this.binaryFactory(question);
        case "open":
          return this.openFactory(question);
        case "multi":
          return this.multiFactory(question);
        case "single":
          return this.singleFactory(question);
        default:
          console.log("WTF");
      }
    });
    return (
      <div id="question-index">
        {htmlQuestions}
        <input
          type="submit"
          className="submit"
          onClick={this.handleSubmit}
        ></input>
      </div>
    );
  }
}

export default QuestionIndex;