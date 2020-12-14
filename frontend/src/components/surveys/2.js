module.exports = [
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
  {
    type: "single",
    content: "How many employees work at your company?",
    answers: [
      "1-50",
      "51-100",
      "101-500",
      "501-1,000",
      "1001-5,000",
      "5001-10,000",
      "10,001-25,000",
      "25,000+",
    ],
    name: "emp count"
  },
  {
    type: "single",
    content: "What is your role at your company?",
    answers: [
      "Data Scientist",
      "Data Analyst",
      "Data Engineer",
      "DevOps Engineer",
      "Software/App Developer",
      "Program Manager/Director",
      "Bussiness Analyst/Intelligence",
      "Machine Learning Engineer",
      "Technical Executive",
      "None of the Above",
    ],
    name: "role"
  },
  {
    type: "multi",
    content: "What lenses are you using when thinking about AI?",
    answers: [
      "Governance",
      "Risk Management",
      "Ethics",
      "Competitiveness",
      "Other",
    ],
    name: "lens"
  },
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