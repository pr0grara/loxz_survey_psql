const Question = require("../models/Question");

const questionCount = async () => {
  Question.find()
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

module.exports = questionCount;