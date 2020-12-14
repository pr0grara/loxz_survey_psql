import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import alert from 'alert';

class Home extends React.Component {
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
      <div id="home">
        HOME
        <Link to="/survey/new">
          <Button>Make a Survey</Button>{" "}
        </Link>
        <Link to="/surveys">
          <Button>Surveys</Button>{" "}
        </Link>
        <Link to="/survey/results">
          <Button>Results</Button>{" "}
        </Link>
        <Link to="/questions/new">
          <Button>Add Questions</Button>{" "}
        </Link>
      </div>
    );
  }
}

export default Home;