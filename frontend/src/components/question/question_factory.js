import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import alert from 'alert';

class QuestionFactory extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // if () 
    let content = document.querySelector("#question-content").value;
    let user = document.querySelector("#question-author").value;
    let type = document.querySelectorAll(".selected");
    if (!Boolean(content) || type.length == 0 || !Boolean(user)) {
      alert("please fill out all fields")
      return
    }
    type = type[0].id;
    let answers;
    if (type == "multi" || type == "single") {
      answers = document.querySelectorAll(".answer-input");
      answers = Array.from(answers);
      answers = answers.map(answer => answer.value);
      answers = answers.slice(0, answers.length-1);
    }
    let number = 0;
    let newQuestion = {
      content, user, type, answers, number
    }
    this.props.addQuestion(newQuestion)
  }

  
  selectSingle(e) {
    e.preventDefault()
    if (e.target.checked) return;
    
    function addMoreAnswers() {
      let answers = document.querySelector("#answers-array")
      let newAnswer = document.createElement("input");
      newAnswer.type = "text"
      newAnswer.className = "answer-input"
      answers.insertBefore(newAnswer, document.querySelector("#add-more-answers"));
    }

    let parent = e.target.parentElement;
    let children = parent.children;
    let answersArr = document.querySelector('#answers-array');
    if (answersArr) answersArr.remove();
    for (let i = 0; i < children.length; i++) {
      if (children[i].checked) children[i].classList.toggle("selected");
      children[i].checked = false;
    }
    e.target.checked = true;
    e.target.classList.toggle("selected")
    if (e.target.id == "multi" || e.target.id == "single") {
      let answers = document.createElement("div");
      answers.id = "answers-array";
      parent.parentElement.insertBefore(answers, parent.nextSibling)
      addMoreAnswers()
      addMoreAnswers()
      let addMore = document.createElement("div");
      addMore.id = "add-more-answers";
      addMore.onclick = addMoreAnswers;
      addMore.innerText = "+"

      let shit = (
        <div id="answers-array">
          <input className="answer-input" type="text"></input>
          <div id="add-more-answers">+</div>
        </div>
      )
      answers.append(addMore);
      
    }
  }

  render() {
    return (
     <div id="question-factory">
       <div id="question-input">
        <div className="label">Your Question:</div>
        <textarea id="question-content"></textarea>
        <div className="label">Question Type:</div>
        <div id="type-selector">
          <div id="binary" className="answer" onClick={this.selectSingle} checked={false}>true/false</div>
          <div id="open" className="answer" onClick={this.selectSingle} checked={false}>open ended</div>
          <div id="multi" className="answer" onClick={this.selectSingle} checked={false}>choose multiple</div>
          <div id="single" className="answer" onClick={this.selectSingle} checked={false}>choose one</div>
        </div>
        <div className="label">Your Name:</div>
        <input id="question-author" type="text" className="answer-input"></input>
       </div>
      <input type="submit" className="submit" onClick={this.handleSubmit}></input>     
    </div>
    );
  }
}

export default QuestionFactory;