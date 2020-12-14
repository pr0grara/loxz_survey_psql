import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import alert from 'alert';
import jsonQuestions from './2';

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
    console.log(unfilteredAnswers);
    var filtered = unfilteredAnswers.filter(answer => Object.keys(answer)[0] == "open");
    filtered = filtered.map(obj => obj["open"]);
    filtered = filtered.map(answer => ({ text: answer[0].value }));
    console.log(filtered);
    await this.iterator(filtered)
  }

  selectMulti(e) {
    e.target.checked = true;
    e.target.classList.toggle("selected");
  }

  selectBinary(e) {
    e.preventDefault();
    let parentElement = e.target.parentElement;
    let children = parentElement.children;
    let [child1, child2] = [children[0], children[1]];
    console.log(child1)
    if (e.target == child1) {
        child1.checked = child1.checked ? false : true;
        child1.classList.toggle("selected");
        if (child2.checked) {
          child2.checked = false;
          child2.classList.toggle("selected");
        }
      } else {
        child2.checked = child2.checked ? false : true;
        child2.classList.toggle("selected");
        if (child1.checked) {
          child1.checked = false;
          child1.classList.toggle("selected");
        }

    }
  }

  selectSingle(e) {
    e.preventDefault()
    let parent = e.target.parentElement;
    let children = parent.children;
    if (e.target.checked) return;
    for (let i = 0; i < children.length; i++) {
      if (children[i].checked) children[i].classList.toggle("selected");
      children[i].checked = false;
    }
    e.target.checked = true;
    e.target.classList.toggle("selected")
  }

  binaryFactory(question) {
    return (
      <div className="survey-question" aria-label="binary" key={question.name}>
        <label className="question-content">
          {question.content}
        </label>
        <div className="binary-answers">
          <div className="answer binary" onClick={this.selectBinary} checked={false}>Yes</div>
          <div className="answer binary" onClick={this.selectBinary} checked={false}>No</div>
        </div>
      </div>
    )
  }

  openFactory(question) {
    return (
      <div className="survey-question" aria-label="open" key={question.name}>
        <label className="question-content">
          {question.content}
        </label>
        <textarea className="answer open" />
      </div>
    )
  }

  multiFactory(question) {
    return (
      <div className="survey-question" aria-label="multi" key={question.name}>
        <label className="question-content">
          {question.content}
        </label>
        <div className="multi-answers">
          {question.answers.map((answer, idx) => <div className="answer multi" onClick={this.selectMulti} key={question.name + idx} checked={false}>{answer}</div>)}  
        </div>
      </div>
    )
  }

  singleFactory(question) {
    return (
      <div className="survey-question" aria-label="single" key={question.name}>
        <label className="question-content">
          {question.content}
        </label>
        <div className="single-answers">
          {question.answers.map((answer, idx) => <div className="answer single" onClick={this.selectSingle} key={question.name + idx} checked={false}>{answer}</div>)}  
        </div>
      </div>
    )
  }

  extractAnswers(answer) {
    let key = Object.keys(answer)[0]
    let values = Object.values(answer)[0]
    switch (key){
      case "binary":
        return values[0].checked ? values[0].innerText : values[1].innerText;
      case "open":
        return values[0].value;
      case "multi":
        let multi = values.filter(ans => ans.checked).map(ans => ans.innerText)
        return multi.join(", ");
      case "single":
        let single = values.filter(ans => ans.checked)[0];
        return single.innerText;
    }
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
      // console.log(question)
      let obj = {}
      let key = question.ariaLabel
      obj[key] = Array.from(question.querySelectorAll(".answer"))
      // obj[key] = question.querySelectorAll(".answer")
      answers.push(obj);
    });

    // console.log(answers)
    if (answers.some(answer => {
      // console.log(answer)
      let key = Object.keys(answer)[0];
      let values = Object.values(answer)[0];
      switch (key) {
        case "binary":
          return values[0].checked || values[1].checked ? false : true;
        case "open":
          return values[0].value !== "" ? false : true;
        case "multi":
          return values.some(ans => ans.checked) ? false : true;
      }
    })
    ) {
      console.log("survey not complete");
      alert("please fill 'em all out 😉");
      return;
    }

    var loading = document.createElement("a");
    loading.id = "loading";
    loading.href = "http://www.lowgif.com/f923243801ca43a0.html";
    loading.target = "_blank";
    var img = document.createElement("img");
    img.src = "http://cdn.lowgif.com/full/f923243801ca43a0-15-latest-and-best-loading-animations-to-make-user-enjoy-waiting.gif";
    loading.appendChild(img);
    document.querySelector("body").appendChild(loading);

    await this.analyzer(answers);
    console.log(`this is analyzed: ${this.analyzed}`)
    var analysisCounter = 0;
    answers.forEach((answer, idx) => {
      var analysis = ""
      console.log(answer)
      if (Object.keys(answer)[0] == "open") {
        analysis = this.analyzed[analysisCounter];
        analysisCounter++;
        console.log(analysis)
      }
      // console.log(answer)
      const newAnswer = {
        user: "Ara",
        question: questions[idx].querySelector("label").innerText,
        content: this.extractAnswers(answer),
        analysis: analysis,
        resultNo: surveyNo,
      };
      newResult.answers.push(newAnswer);
      return axios.post("/api/answers/new", newAnswer); //hits routes/api/answers.js backend
    });
    axios.post("/api/results/new", newResult); //hits routes/api/results.js backend
    localStorage.setItem("surveyNo", surveyNo)
    this.props.loadResults(surveyNo);
    // window.location.assign(window.location.href + "/results")
  }

  render() {
    let surveyId = this.props.match.params.id;
    let jsonSurvey = this.props.loadSurvey(surveyId);
    var htmlQuestions = jsonQuestions.map(question => {
      switch (question.type) {
        case "binary":
          return this.binaryFactory(question);
        case "open":
          return this.openFactory(question);
        case "multi":
          return this.multiFactory(question);
        case "single":
          return this.singleFactory(question);
        default:
          console.log("WTF");
      }
    })

    return (
      <div id="survey" className="survey">
        {htmlQuestions}
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