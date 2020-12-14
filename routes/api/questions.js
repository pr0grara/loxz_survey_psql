const express = require("express");
const bodyParser = require("body-parser");
const Question = require("../../models/Question");
const router = express.Router();

var jsonParser = bodyParser.json();

router.get("/test", (req, res) => {
  res.json({ msg: "This is results route" });
});

router.get("/data/:question_number", (req, res) => {
  console.log(req.params)
  // res.json(req.params)
  var num = req.params.question_number;
  Question.findOne({ number: num })
    // .then(result => res.json({"yo": "yooooo"}))
    .then(result => res.json(result))
    .catch(err => console.log(err))
});

router.post("/new", jsonParser, (req, res) => {
  // console.log(req.body);
  const [number, type, content, answers, user] = [
    req.body.number,
    req.body.type,
    req.body.content,
    req.body.answers,
    req.body.user,
  ];
  const newQuestion = new Question({
    number,
    type,
    content,
    answers,
    user,
  });
  // console.log(newResult);
  newQuestion
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

router.get("/count", (req, res) => {
  Question.find()
    .then(questions => res.json({ length: (questions.map(res => res).length) }))
    .catch(err => res.status(404).json({ notripsfound: 'No trips found' }));
})

module.exports = router;
