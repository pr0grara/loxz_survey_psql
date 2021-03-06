import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import alert from 'alert';
import { tokenizer, verifyier } from "../../util/auth_util";
// import verifyier from "../../util/auth_util";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verify = this.verify.bind(this);
  }

  hideNavBar() {
    let nav = document.querySelector("#navbar");
    if (!nav) return;
    nav.style.display = "none";
  }

  componentDidMount() {
    this.hideNavBar();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  verify() {
    let answer = prompt("password");
    if (!answer) return;
    if (verifyier(answer)) {
      localStorage.setItem("isAuthenticated", true);
    }
    let cookie = tokenizer(answer);
    // console.log(cookie);
    localStorage.setItem("cookie", cookie);
  }

  render() {
    return (
      <>
        <div className="welcome-page col-12">
          <div className="header">Welcome to LOXZ's survey HUB</div>
          <div className="paragraph">
            The main purpose of this software is to build out LOXZ's
            AI/ML-readiness survey backend, i.e. database infrastructure and
            frontend integration, internal and external API calls, etc. However it
            is also a starting point for our UI/UX and data harvesting
            conceptualization.
          </div>
            <div className="label">We use this for:</div>
          <ol id="instructions">
            <li>creating new questions</li>
            <li>storing/tracking our questions</li>
            <li>creating new surveys (survey = questions + styling)</li>
            <li>storing/tracking our surveys</li>
            <li>taking surveys (us for now, customers soon)</li>
            <li>using AI and ML to analysze answers in real time</li>
            <li>forging an algorithm to generate a readiness score</li>
            <li>storing/tracking answers, analysis and results</li>
          </ol>
          <Link to="/home">
            <Button onClick={this.verify}>proceed</Button>{" "}
          </Link>
        </div>
        <footer>Ara Baghdassarian 1/28/2020</footer>
      </>
    );
  }
}

export default Welcome;