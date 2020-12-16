import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import alert from 'alert';
import loxzLogo from '../../footer-logo.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getQuestions();
    this.props.getSurveys();
    let loading = document.querySelector("#loading");
    if (loading) loading.remove();
  }

  hover(e) {
    e.preventDefault()
    let popup = document.createElement("div");
    popup.id = "popup";
    popup.innerText = "hi";
    switch (e.target.name) {
      case "make survey":
        popup.innerText = "Click here to be taken to an index of all available questions found in our database. Select questions by clicking on them to create a new survey which will be saved to our DB and can then be taken by anyone from the 'take a survey' section. Deleting questions will remove them from our DB forever so use caution. Editing question, re-ordering questions, creating multi-phase surveys, searching for questions by type, etc are all out of scope of this features capabilities as of now but will be added in due time."
        break
      case "take":
        popup.innerText = "Click here to be taken to an index of all the surveys stored in our database. Editing and deleting surveys can only be done by me for the time being"
        break
      case "make question":
        popup.innerText = "Click here to be taken to a question generator tool. Once a question is made here it will be added to our DB and will then be available in the 'make a survey' tool. Currently supports [true/false, open ended, multiple choice, and all of the above] type questions" 
        break
      default:
        console.log("default")
    }
    document.querySelector("#home").insertBefore(popup, document.querySelector("#footer"))
  }

  clear(e) {
    e.preventDefault();
    let popup = document.querySelector("#popup")
    popup.remove();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div id="home">
        <div id="navigation">
          <Link to="/survey/new">
            <Button onMouseOver={this.hover} onMouseOut={this.clear} name="make survey">Make a Survey</Button>{" "}
          </Link>
          <Link to="/surveys">
            <Button onMouseOver={this.hover} onMouseOut={this.clear} name="take">Take a Survey</Button>{" "}
          </Link>
          {/* <Link to="/survey/results">
            <Button>Results</Button>{" "}
          </Link> */}
          <Link to="/questions/new">
            <Button onMouseOver={this.hover} onMouseOut={this.clear} name="make question">Create New Questions</Button>{" "}
          </Link>
        </div>
        <div id="footer">
          <img src={loxzLogo} id="loxz-logo"></img>
          <div className="label">contact Ara on slack with any suggestions or bug reports</div>
        </div>
      </div>
    );
  }
}

export default Home;