import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import alert from 'alert';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div id="welcome-page">
        <h1>Welcome to LOXZ's alpha survey</h1>
        <h3>
          The main purpose of this software is to build out the survey's backend: database integration / internal and external API calls. However also to be used for UI/UX and data harvesting conceptualization.
        </h3>
        <h3>
          This software may also one day be developed into a backend tool for survey creation as
          well.
        </h3>
        <h4>To use:</h4>
        <p>
          1. proceed to the first survey. 2. fill it out and submit 3. View
          results
        </p>
        <Link to="/survey">
          <Button>proceed</Button>{" "}
        </Link>
      </div>
    );
  }
}

export default Welcome;