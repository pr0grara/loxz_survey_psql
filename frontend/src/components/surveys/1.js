export default [
  {
    div: {
      className: "open-question",
      label: {
        content: "What does your organization hope to gain by adopting ML?",
        className: "label"
      },
      input: {
        type: "text",
        className="open-answer"
      }
    }
  },
  {
    div: {
      className: "open-question",
      label: {
        content: "What types of data are you currently collecting?",
        className: "label"
      },
      input: {
        type: "text",
        className="open-answer"
      }
    }
  },
  {
    div: {
      className: "binary-question",
      label: {
        content: "Do you have at least one data scientist on your team?",
        className: "label"
      },
      input: {
        type: "radio",
        className="binary-answer"
      }
    }
  },
]