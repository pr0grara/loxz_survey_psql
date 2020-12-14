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
      <>
        <div id="welcome-page">
          <div className="header">Welcome to LOXZ's alpha survey</div>
          <div className="paragraph">
            The main purpose of this software is to build out LOXZ's
            AI/ML-readiness survey backend, i.e. database infrastructure and
            frontend integration, internal and external API calls, etc. However it
            is also a starting point for our UI/UX and data harvesting
            conceptualization.
          </div>
          <div className="paragraph-small">
            It is the intention of this software to one day be developed into
            a backend tool for survey creation.
          </div>
          <ol className="instructions">
            <label>How to use:</label>
            <li>proceed to the sample survey</li>
            <li>fill it out and submit</li>
            <li>View results</li>
          </ol>
          <div className="paragraph-small">
            here's what happens after you click "submit":
            <ol>
              <li>Raw answers are grabbed from input fields and packaged for either analytics or storage</li>
              <li>Open ended questions are sent off to Azure Cognitive Services APIs</li>
              <li>Once all processing is complete, analytics results are added to appropriate answers</li>
              <li>Data is submitted to our database for storage. Currently stored individually as "Answers" and also grouped together as "Results"</li>
            </ol>
          </div>
          <div className="paragraph-small">
            Note the lag you experience between "submit" and "results". This is due to each open ended answer being analyzed by Azure's Key Phrase Extraction API. In the future as we use more of their API's (not just key extract) and we have more questions to ask, this lag time will naturally want to grow out of control but we will keep it in check with smart survey flow/design and browser animations to maximize that dopamine
          </div>
          <Link to="/home">
            <Button>proceed</Button>{" "}
          </Link>
        </div>
        <footer>Ara Baghdassarian 12/11/2020</footer>
      </>
    );
  }
}

export default Welcome;