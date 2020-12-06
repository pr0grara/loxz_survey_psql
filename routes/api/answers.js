const express = require("express");
const bodyParser = require("body-parser");
const Answer = require("../../models/Answer");
const router = express.Router();

var jsonParser = bodyParser.json();

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
    .catch(err => console.log(err))
})

module.exports = router;
