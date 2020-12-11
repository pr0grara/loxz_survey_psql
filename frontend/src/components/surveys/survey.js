import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import alert from 'alert';

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.analyzed = [];
  }

  async analyzeThis(answer) {
    this.analyzed.push( await
      axios.post("/api/answers/analyze", answer) // hits routes/api/answers.js backend
      .then(analyzed => {
        console.log(analyzed)
        return analyzed.data.keyPhrases[0].keyPhrases
      })
      .catch(err => console.log(err))
    )
  }

  async iterator(forAnalysis) {
    for (let i = 0; i < forAnalysis.length; i++) await this.analyzeThis(forAnalysis[i]);
  }

  async analyzer(unfilteredAnswers) {
    var filtered = unfilteredAnswers.map(answer => {
      return answer.length == 1 ? { text: answer[0].value } : null;
    })
    filtered = filtered.filter(answer => answer) //we want to end up with answers which only have one input field because those are the only ones which require analysis

    await this.iterator(filtered)
  }

  async handleSubmit(e) {
    e.preventDefault();
    var surveyNo = (await axios.get("/api/results/count")).data.length; // hits routes/api/results.js backend
    console.log(surveyNo);

    const newResult = {
      number: surveyNo,
      user: "Ara",
      answers: [],
    };

    var questions = Array.from(
      document.querySelectorAll('div[class="survey-question"]')
    );

    var answers = [];
    questions.forEach((question) => {
      answers.push(Array.from(question.querySelectorAll(".answer")));
    });

    if (
      answers.some(
        (answer) =>
          answer.length == 1 //questions with a single input field vs questions with multiple
            ? !Boolean(answer[0].value) //every open question is not equal to an empty string
            : !answer.some((ans) => ans.checked) //every radio/multiple choice question has at least one checked input
      )
    ) {
      console.log("survey not complete");
      alert("please fill 'em all out 😉");
      return;
    }

    await this.analyzer(answers);
    console.log(`this is analyzed: ${this.analyzed}`)
    var analysisCounter = 0;
    answers.forEach((answer, idx) => {
      var analysis = ""
      if (answer.length == 1) {
        analysis = this.analyzed[analysisCounter];
        analysisCounter++;
        console.log(analysis)
      }
      // console.log(answer)
      const newAnswer = {
        user: "Ara",
        question: questions[idx].querySelector("label").innerText,
        content:
          answer.length == 1
            ? answer[0].value
            : answer[0].checked
            ? answer[0].value
            : answer[1].value,
        analysis: analysis,
        // analysis: answer.length == 1 ? this.analyzed[analysisCounter] : "",
        resultNo: surveyNo,
      };
      newResult.answers.push(newAnswer);
      return axios.post("/api/answers/new", newAnswer); //hits routes/api/answers.js backend
    });
    axios.post("/api/results/new", newResult); //hits routes/api/results.js backend
    localStorage.setItem("surveyNo", surveyNo)
    window.location.assign(window.location.href + "/results")
  }

  render() {
    return (
      <div id="survey" className="survey">
        <div className="survey-question">
          <label className="label">
            What does your organization hope to gain by adopting ML?
          </label>
          <textarea type="text" className="answer" />
        </div>
        <div className="survey-question">
          <label className="label">
            What types of data are you currently collecting?
          </label>
          <textarea type="text" className="answer" />
        </div>
        <div className="survey-question">
          <label className="label">
            Do you have at least one data scientist on your team?
          </label>
          <div>
            <input
              type="radio"
              className="answer"
              name="data-scientist?"
              value="yes"
            />
            <label>yes</label>
            <input
              type="radio"
              className="answer"
              name="data-scientist?"
              value="no"
            />
            <label>no</label>
          </div>
        </div>
        <div className="survey-question">
          <label className="label">
            Have you allocated a budget for your ML initiatives?
          </label>
          <div>
            <input type="radio" className="answer" name="budget?" value="yes" />
            <label>yes</label>
            <input type="radio" className="answer" name="budget?" value="no" />
            <label>no</label>
          </div>          
        </div>
        <div className="survey-question">
          <label className="label">
            Do you have tools/frameworks in place to initiate your AI objective?
          </label>
          <div>
            <input type="radio" className="answer" name="tools-ai" value="yes" />
            <label>yes</label>
            <input type="radio" className="answer" name="tools-ai" value="no" />
            <label>no</label>
          </div>
        </div>
        <div className="survey-question">
          <label className="label">Is this your first AI/ML project?</label>
          <div>
            <input
              type="radio"
              className="answer"
              name="first-ai?"
              value="yes"
            />
            <label>yes</label>
            <input
              type="radio"
              className="answer"
              name="first-ai?"
              value="no"
            />
            <label>no</label>
          </div>
        </div>
        <div className="survey-question">
          <label className="label">
            What do you consider your biggest bottleneck to your AI/ML
            objectives?
          </label>
          <textarea type="text" className="answer" />
        </div>
        <div className="survey-question">
          <label className="label">
            Who do you plan to roll out the AI/ML project to?
          </label>
          <textarea type="text" className="answer" />
        </div>
        <div className="survey-question">
          <label className="label">
            Have you formulated a problem statement?
          </label>
          <div>
            <input
              type="radio"
              className="answer"
              name="problem-state?"
              value="yes"
            />
            <label>yes</label>
            <input
              type="radio"
              className="answer"
              name="problem-state?"
              value="no"
            />
            <label>no</label>
          </div>
        </div>
        <input
          type="submit"
          className="submit"
          onClick={this.handleSubmit}
        ></input>
      </div>
    );
  }
}

export default Survey;