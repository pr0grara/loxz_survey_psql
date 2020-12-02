import React from 'react';
import ReactDOM from 'react-dom';

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDemo = this.handleDemo.bind(this);
    // this.clearErrors = this.clearErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    document.querySelector('div[id="survey"]').remove()
    console.log('bitch')
  }

  render() {
    return (
      <div id="survey" className="survey" onClick={this.handleSubmit}>
        <div className="survey-question">
          <label className="label">What does your organization hope to gain by adopting ML?</label>
          <input type="text"/> 
        </div>
        <div className="survey-question">
          <label className="label">What types of data are you currently collecting?</label>
          <input type="text"/> 
        </div>
        <div className="survey-question">
          <label className="label">Do you have at least one data scientist on your team?</label>
          <input type="radio" name="data-scientist?" value="yes" />
          <label>yes</label>
          <input type="radio" name="data-scientist?" value="no" />
          <label>no</label>
        </div>
        <div className="survey-question">
          <label className="label">Have you allocated a budget for your ML initiatives?</label>
          <input type="radio" name="budget?" value="yes" />
          <label>yes</label>
          <input type="radio" name="budget?" value="no" />
          <label>no</label>
        </div>
        <div className="survey-question">
          <label className="label">Do you have tools/frameworks in place to initiate your AI objective?</label>
          <input type="radio" name="tools-ai" value="yes" />
          <label>yes</label>
          <input type="radio" name="tools-ai" value="no" />
          <label>no</label>
        </div>
        <div className="survey-question">
          <label className="label">Is this your first AI/ML project?</label>
          <input type="radio" name="first-ai?" value="yes" />
          <label>yes</label>
          <input type="radio" name="first-ai?" value="no" />
          <label>no</label>      
        </div>
        <div className="survey-question">
          <label className="label">What do you consider your biggest bottleneck to your AI/ML objectives?</label>
          <input type="text"/> 
        </div>
        <div className="survey-question">
          <label className="label">Who do you plan to roll out the AI/ML project to?</label>
          <input type="text"/> 
        </div>
        <div className="survey-question">
          <label className="label">Have you formulated a problem statement?</label>
          <input type="radio" name="problem-state?" value="yes" />
          <label>yes</label>
          <input type="radio" name="problem-state?" value="no" />
          <label>no</label>
        </div>
      </div>
    )
  }
}

export default Survey;