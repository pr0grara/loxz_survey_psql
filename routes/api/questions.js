const express = require("express");
const bodyParser = require("body-parser");
const Question = require("../../models/Question");
const { questionCount } = require("../util");
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

router.post("/new", jsonParser, async (req, res) => {
  debugger
  // console.log(req.body);
  // const number = await questionCount();
  const number = await Question.find()
    .then(res => res.map(r => r).length)
    .catch(err => console.log(err));
  console.log(number)
  const [type, content, answers, user] = [
    // req.body.number,
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

router.get("/all", (req, res) => {
  Question.find()
    .then(questions => res.json(questions))
    .catch(err => console.log(err))
})

router.get("/count", (req, res) => {
  debugger
  Question.find()
    .then(questions => res.json({ length: (questions.map(res => res).length) }))
    .catch(err => res.status(404).json({ notripsfound: 'No trips found' }));
})

router.post("/delete/:number", (req, res) => {
  var num = req.params.number;
  console.log(req.params)
  Question.deleteOne({ number: num })
    .then(result => console.log(result))
    .catch(err => console.log(err))
})

module.exports = router;
