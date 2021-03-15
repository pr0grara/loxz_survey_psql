import React from 'react';
import trash_icon from './trash.png';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import alert from 'alert';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  // UNSAFE_componentWillMount() {
  //   this.props.getQuestions();
  // }

  selectQuestion(e) {
    e.preventDefault();
    e.currentTarget.classList.toggle("selected")
  }

  dropQuestion(num) {
    let htmlQuestions = document.querySelectorAll(".survey-question");
    for (let i = 0; i < htmlQuestions.length; i++) {
      if (htmlQuestions[i].dataset.number == num) {
        htmlQuestions[i].remove();
        return
      }
    }
  }

  async deleteQuestion(e) {
    if (!confirm("delete permanently?")) return;
    let parent = e.currentTarget.parentElement;
    let number = parent.dataset.number;
    // console.log(number);
    await this.props.deleteQuestion(number);
    this.dropQuestion(number)
  }

  trashIcon() {
    return <img src={trash_icon} alt="delete" className="icon" onClick={this.deleteQuestion} />
  }

  binaryFactory(question) {
    return (
      <div className="survey-question" aria-label="binary" key={question.id} data-number={question.id} onClick={this.selectQuestion}>
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
      <div className="survey-question" aria-label="open" key={question._id} data-number={question.number} onClick={this.selectQuestion}>
        <label className="question-content">{question.content}</label>
        <textarea className="answer open" />
        {this.trashIcon()}
      </div>
    );
  }

  multiFactory(question) {
    return (
      <div className="survey-question" aria-label="multi" key={question._id} data-number={question.number} onClick={this.selectQuestion}>
        <label className="question-content">{question.content}</label>
        <div className="multi-answers">
          {question.answers.map((answer, idx) => (
            <div
              className="answer multi"
              onClick={this.selectMulti}
              key={question._id + idx.toString()}
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
      <div className="survey-question" aria-label="single" key={question._id} data-number={question.number} onClick={this.selectQuestion}>
        <label className="question-content">{question.content}</label>
        <div className="single-answers">
          {question.answers.map((answer, idx) => (
            <div className="answer single" key={question._id + idx} checked={false}>
              {answer}
            </div>
          ))}
        </div>
        {this.trashIcon()}
      </div>
    );
  }

  likertFactory(question) {
    var likertAnswers = ["strongly agree", "agree", "neutral", "disagree", "strongly disagree"]

    return (
      <div className="survey-question" aria-label="likert" key={question._id} data-number={question.number} onClick={this.selectQuestion}>
        <label className="question-content">{question.content}</label>
        <div className="likert-answers">
          {likertAnswers.map((answer, idx) => (
            <div className="answer likert" key={question._id + idx} checked={false}>
              {answer}
            </div>
          ))}
        </div>
        {this.trashIcon()}
      </div>
    );
  }

  scaleFactory(question) {
    var scaleAnswers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    return (
      <div className="survey-question" aria-label="scale" key={question._id} data-number={question.number} onClick={this.selectQuestion}>
        <label className="question-content">{question.content}</label>
        <div className="scale-answers">
          {scaleAnswers.map((answer, idx) => (
            <div className="answer scale" key={question._id + idx} checked={false}>
              {answer}
            </div>
          ))}
        </div>
        {this.trashIcon()}
      </div>
    );
  }

  matrixFactory(question) {
    var matrixAnswers = ["1-Very Satisfied", "2-Somewhat Satisfied", "3-Neither satisfied nor dissatisfied", "4-Somewhat Dissatisfied", "5-Very Dissatisfied", "N/A"]

    return (
      <div className="survey-question" aria-label="matrix" key={question._id} data-number={question.number} onClick={this.selectQuestion}>
        <label className="question-content">{question.content}</label>
        <div className="matrix-answers">
          {matrixAnswers.map((answer, idx) => (
            <div className="answer matrix" key={question._id + idx} checked={false}>
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
      switch (question.question_type) {
        case "binary":
          return this.binaryFactory(question);
        case "open":
          return this.openFactory(question);
        case "multi":
          return this.multiFactory(question);
        case "single":
          return this.singleFactory(question);
        case "likert":
          return this.likertFactory(question);
        case "scale":
          return this.scaleFactory(question);
        case "matrix":
          return this.matrixFactory(question);
        default:
          console.log("error in render function switch statement");
      }
    });
    return (
      <div id="question-index">
        {htmlQuestions}
      </div>
    );
  }
}

export default QuestionIndex;