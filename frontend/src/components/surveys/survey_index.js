import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import alert from 'alert';

class SurveyIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    // this.props.getSurveys()
    let loading = document.querySelector("#loading");
    if (loading) loading.remove();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    let surveys = JSON.parse(localStorage.surveys);
    let htmlSurveys = surveys.map(survey => (
      <div className="survey-index-item" key={survey.number}>
        <Link to={`/surveys/${survey.number}`}>Survey #{survey.number} by {survey.user}</Link>
      </div>
    ))
    // console.log(surveys)
    return (
      <div id="survey-index">
        SURVEY INDEX
        {htmlSurveys}
      </div>
    );
  }
}

export default SurveyIndex;