import React from 'react';

class SurveyFactory extends React.Component {
  
  render() {
    <div></div>
  }
}

var firstDistilate = {
  content: "",
  type: "binary",
}
var biQuestion = {
  div: {
    className: "binary-question",
    label: {
      content: "",
      className: "label"
    },
    yes: {
      type: "radio",
      className: "binary-answer",
      name: "",
      value: "yes",
    },
    no: {
      type: "radio",
      className: "binary-answer",
      name: "",
      value: "no",
    }
  }
}

var openQuestion = {
  div: {
    className: "open-question",
    label: {
      content: "",
      className: "label"
    },
    input: {
      type: "text",
      className: "open-answer"
    }
  }
}

var firstDistillation = (questions) => {
  var results = {};
  results = questions.map(question => {
    var copy = Object.assign({}, firstDistilate);
    copy.content = question
    return copy;
  });
  console.log(results);
}

var secondDistillation = (questions) => {
  questions = questions.map(question => {
    switch (question.type) {
      case "binary":
        var name = question.content.length * question.content.split(' ')[4].length
        var copy = Object.assign({}, biQuestion)
        copy.div.label.content = question.content;
        copy.div.yes.name = name;
        copy.div.no.name = name;
        return copy
    }
  })
  console.log(JSON.stringify(questions))
}

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

// firstDistillation(questions)
secondDistillation([
  {
    content: 'What does your organization hope to gain by adopting ML?',
    type: 'binary'
  },
  {
    content: 'What types of data are you currently collecting?',
    type: 'binary'
  },
  {
    content: 'Do you have at least one data scientist on your team?',
    type: 'binary'
  },
  {
    content: 'Have you allocated a budget for your ML initiatives?',
    type: 'binary'
  },
  {
    content: 'Do you have tools/frameworks in place to initiate your AI objective?',
    type: 'binary'
  },
  { content: 'Is this your first AI/ML project?', type: 'binary' },
  {
    content: 'What do you consider your biggest bottleneck to your AI/ML objectives?',
    type: 'binary'
  },
  {
    content: 'Who do you plan to roll out the AI/ML project to?',
    type: 'binary'
  },
  {
    content: 'Have you formulated a problem statement?',
    type: 'binary'
  }
])
// console.log(biQuestion)