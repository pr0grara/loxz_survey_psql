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
    this.activeQuestionIdx = 0;
    this.activeQuestion;
    this.selectSingle = this.selectSingle.bind(this);
    this.selectBinary = this.selectBinary.bind(this);
    this.revealNext = this.revealNext.bind(this);
    this.questionCount = 0;
    this.answeredCount = 0;
    this.scrollHeight = 0;
  }

  check(question) {
    let answer = question.querySelectorAll(".answer");
    switch (question.ariaLabel) {
      case "binary":
        return answer[0].checked || answer[1].checked ? false : true;
      case "open":
        return answer[0].value !== "" ? false : true;
      case "multi":
        return Array.from(answer).some((ans) => ans.checked) ? false : true;
    }
  }

  async loading() {
    let percentDone = Math.ceil(this.answeredCount / this.questionCount * 100);
    let loading = document.querySelector("#loading-bar")
    loading.style.width = `${percentDone}%`;
    // loading.classList.toggle("animate");
    // setTimeout(() => {
    //   document.querySelector("#loading-bar").classList.toggle("animate")
    // }, 400);
    // loading.innerText = `${percentDone}%`;
  }

  revealNext() {
    let previous = document.querySelectorAll(".survey-question")[this.activeQuestionIdx]
    if (this.check(previous)) {
      alert("please answer");
      return
    }

    if (this.activeQuestionIdx + 2 == this.questionCount) {
      document.querySelector("#submit").classList.toggle("hidden");
      document.querySelector("#next").classList.toggle("hidden");
    } 

    this.activeQuestionIdx = this.activeQuestionIdx + 1;
    previous.classList.toggle("answered");

    if (this.activeQuestionIdx !== this.questionCount) {
      this.activeQuestion = document.querySelectorAll(".survey-question")[this.activeQuestionIdx];
      this.scrollHeight = this.scrollHeight + previous.scrollHeight;
      this.activeQuestion.classList.toggle("unanswered");
      // window.innerHeight = 700 + this.scrollHeight;
      window.scrollTo(0, this.scrollHeight + 10);
    }

    this.answeredCount = this.answeredCount + 1;
    this.loading();
  }

  nextButton() {
    document.querySelector("#next").classList.toggle("hidden");
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
    // console.log(unfilteredAnswers);
    var filtered = unfilteredAnswers.filter(answer => Object.keys(answer)[0] == "open");
    filtered = filtered.map(obj => obj["open"]);
    filtered = filtered.map(answer => ({ text: answer[0].value }));
    // console.log(filtered);
    await this.iterator(filtered)
  }

  selectMulti(e) {
    e.target.checked = true;
    e.target.classList.toggle("selected");
  }

  selectBinary(e) {
    // e.preventDefault();
    let parentElement = e.target.parentElement;
    let children = parentElement.children;
    let [child1, child2] = [children[0], children[1]];
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
    if (e.target.parentElement.parentElement == this.activeQuestion) {
      this.revealNext();
    }
  }

  selectSingle(e) {
    // e.preventDefault()
    let parent = e.target.parentElement;
    let children = parent.children;
    if (e.target.checked) return;
    for (let i = 0; i < children.length; i++) {
      if (children[i].checked) children[i].classList.toggle("selected");
      children[i].checked = false;
    }
    e.target.checked = true;
    e.target.classList.toggle("selected")
    if (e.target.parentElement.parentElement == this.activeQuestion) {
      this.revealNext();
    }  
  }

  classNamer(i) {
    return i == 0 ? "survey-question" : "survey-question unanswered";
  }

  binaryFactory(question, i) {
    return (
      <div className={this.classNamer(i)} aria-label="binary" key={question._id}>
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

  openFactory(question, i) {
    return (
      <div className={this.classNamer(i)} aria-label="open" key={question._id}>
        <label className="question-content">{question.content}</label>
        <textarea className="answer open" />
      </div>
    );
  }

  multiFactory(question, i) {
    return (
      <div className={this.classNamer(i)} aria-label="multi" key={question._id}>
        <label className="question-content">
          {question.content}
        <div style={{fontSize:"small", marginTop:"10px"}}>(select all that apply)</div>
        </label>
        <div className="multi-answers">
          {question.answers.map((answer, idx) => <div className="answer multi" onClick={this.selectMulti} key={question._id + idx} checked={false}>{answer}</div>)}  
        </div>
      </div>
    )
  }

  singleFactory(question, i) {
    return (
      <div
        className={this.classNamer(i)}
        aria-label="single"
        key={question._id}
      >
        <label className="question-content">{question.content}</label>
        <div className="single-answers">
          {question.answers.map((answer, idx) => (
            <div
              className="answer single"
              onClick={this.selectSingle}
              key={question._id + idx}
              checked={false}
            >
              {answer}
            </div>
          ))}
        </div>
      </div>
    );
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

    // var surveyNo = (await axios.get("/api/results/count")).data.length; // hits routes/api/results.js backend
    var surveyNo = (await this.props.resultCount()).data + 1; // hits results backend, collects last results number and adds one for the new result
    // debugger
    console.log(surveyNo);

    const newResult = {
      number: surveyNo,
      user: "Ara",
      answers: [],
    };

    var questions = Array.from(
      document.querySelectorAll('.survey-question')
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
      // console.log(answer)
      if (Object.keys(answer)[0] == "open") {
        analysis = this.analyzed[analysisCounter];
        analysisCounter++;
        // console.log(analysis)
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
      this.props.newAnswer(newAnswer)
      // return axios.post("/api/answers/new", newAnswer); //hits routes/api/answers.js backend
    });
    this.props.newResult(newResult);
    // axios.post("/api/results/new", newResult); //hits routes/api/results.js backend
    localStorage.setItem("surveyNo", surveyNo)
    this.props.loadResults(surveyNo);
    // window.location.assign(window.location.href + "/results")
  }

  render() {
    var survey = JSON.parse(localStorage.surveys)[this.props.match.params.id].questions || jsonQuestions
    var htmlQuestions = survey.map((question, idx) => {
      switch (question.type) {
        case "binary":
          return this.binaryFactory(question, idx);
        case "open":
          return this.openFactory(question, idx);
        case "multi":
          return this.multiFactory(question, idx);
        case "single":
          return this.singleFactory(question, idx);
        default:
          console.log("error in switch survey.js");
      }
    })
    this.questionCount = htmlQuestions.length;
    return (
      <div id="survey" className="survey">
        {htmlQuestions}
        <div id="controls">
          {/* <div id="previous">previous</div> */}
          <div id="next" onClick={this.revealNext}>next</div>
        </div>
        <input
        type="submit"
        id="submit"
        className="submit hidden"
        onClick={this.handleSubmit}
        ></input>
        <div id="loading-bar-container">
          <div id="loading-bar"></div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Survey;