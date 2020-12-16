const binaryFactory = (question) => {
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

const openFactory = (question) => {
  return (
    <div className="survey-question" aria-label="open" key={question.name}>
      <label className="question-content">
        {question.content}
      </label>
      <textarea className="answer" />
    </div>
  )
}

const multiFactory = (question) => {
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

const jsonQuestions = [
  {
    type: "open",
    content: "What does your organization hope to gain by adopting ML?",
    name: "hope-to-gain?"
  },
  {
    type: "open",
    content: "What types of data are you currently collecting?",
    name: "types of data"
  },
  {
    type: "binary",
    content: "Have you allocated a budget for your ML initiatives?",
    name: "allocated budget"
  },
  {
    type: "binary",
    content: "Do you have tools/frameworks in place to initiate your AI objective?",
    name: "tools in place"
  },
  {
    type: "binary",
    content: "Is this your first AI/ML project?",
    name: "first AI"
  },
  {
    type: "binary",
    content: "Have you formulated a problem statement?",
    name: "problem statement"
  },
  {
    type: "open",
    content: "What do you consider your biggest bottleneck to your AI/ML objectives?",
    name: "bottleneck"
  },
  {
    type: "open",
    content: "Who do you plan to roll out the AI/ML project to?",
    name: "rollout"
  },
  // {
  //   type: "binary",
  //   content: "",
  //   name: ""
  // },
  // {
  //   type: "multi",
  //   content: "",
  //   answers: [
  //     ""
  //   ],
  //   name: ""
  // },
  // {
  //   type: "open",
  //   content: "",
  //   name: ""
  // },
  // {
  //   type: "binary",
  //   content: "",
  //   name: ""
  // },
  // {
  //   type: "multi",
  //   content: "",
  //   answers: [
  //     ""
  //   ],
  //   name: ""
  // },
]

const htmlQuestions = jsonQuestions.map(question => {
  switch (question.type) {
    case "binary":
      return binaryFactory(question);
    case "open":
      return openFactory(question);
    case "multi":
      return multiFactory(question);
    default:
      console.log("error in switch _FACTORY.js");
  }
})

const htmlSurvey = rawQs => {

}

console.log(htmlQuestions);

var questions = [
  "What does your organization hope to gain by adopting ML?",
  "What types of data are you currently collecting?",
  "Do you have at least one data scientist on your team?",
  "Have you allocated a budget for your ML initiatives?",
  "Do you have tools/frameworks in place to initiate your AI objective?",
  "Is this your first AI/ML project?",
  "What do you consider your biggest bottleneck to your AI/ML objectives?",
  "Who do you plan to roll out the AI/ML project to?",
  "Have you formulated a problem statement?"
]