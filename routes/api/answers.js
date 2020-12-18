const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Answer = require("../../models/Answer");
const analyze = require("../../text_analysis/analyze");
const router = express.Router();
var jsonParser = bodyParser.json();
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const credentials = {
  key: process.env.TEXT_ANALYSIS_KEY_1,
  endpoint: process.env.ENDPOINT,
};

router.get("/test", (req, res) => {
  res.json({ msg: "This is answers route" });
});

router.post('/new', jsonParser, (req, res) => {
  // console.log(req.body)
  const [user, question, content, resultNo, analysis] = [req.body.user, req.body.question, req.body.content, req.body.resultNo, req.body.analysis];
  const newAnswer = new Answer({
    user,
    question,
    content,
    analysis,
    resultNo
  });
  // console.log(newAnswer);
  newAnswer
    .save()
    .then(answer => res.json(answer))
    // .then(answer => console.log("saved????"))
    .catch(err => console.log(err))
})

router.post('/analyze', jsonParser, (req, res) => {
  // console.log(req)
  const textToAnalyze = req.body.text;
  // console.log(textToAnalyze)
  analyze(credentials, [textToAnalyze])
    .then(analyzed => res.json(analyzed))
    .catch(err => console.log(err))
}) 

module.exports = router;
