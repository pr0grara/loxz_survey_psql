import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import alert from 'alert';
import loxzLogo from '../../footer-logo.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  hover(e) {
    e.preventDefault();
    e.target.classList.toggle("hide");
  }
  
  leave(e) {
    e.preventDefault();
    e.target.classList.toggle("hide");
  }

  render() {
    return (
      <div id="navbar" >
        <Link to="/home">
          <Button name="make survey">Home</Button>{" "}
        </Link>
        {/* <Link to="/survey/new">
          <Button name="make survey">Make a Survey</Button>{" "}
        </Link>
        <Link to="/surveys">
          <Button name="take">Take a Survey</Button>{" "}
        </Link>
        <Link to="/survey/results">
          <Button>Results</Button>{" "}
        </Link>
        <Link to="/questions/new">
          <Button name="make question">Create New Questions</Button>{" "}
        </Link> */}
      </div>
    );
  }
}

export default NavBar;