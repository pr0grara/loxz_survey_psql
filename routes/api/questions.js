const express = require("express");
const bodyParser = require("body-parser");
const Question = require("../../models/Question");
const { questionCount } = require("../util");
const { DataTypes, ARRAY } = require("sequelize");
const router = express.Router();

var jsonParser = bodyParser.json();

router.get("/test", (req, res) => {
  res.json({ msg: "This is results route" });
});

router.get("/data/:question_number", (req, res) => {
  var num = req.params.question_number;
  Question.findOne({ id: num })
    .then(result => res.json(result))
    .catch(err => console.log(err))
});

router.post("/new", jsonParser, async (req, res) => {
  // const number = await Question.findOne().sort({ number: -1 })
  //   .then(res => {
  //     // console.log(res)
  //     return res[0].number + 1;
  //     // return res.map(r => r).length
  //   })
  //   .catch(err => console.log(err));
  // console.log(number)
  // const answers = req.body.answers.join();
  const [type, content, answers, user] = [
    req.body.type,
    req.body.content,
    req.body.answers,
    req.body.user,
  ];
  const newQuestion = {
    id: 7,
    question_type: type,
    content,
    answers,
    username: user,
    createdAt: Date(),                             
  };

  console.log(newQuestion)
  Question.create(newQuestion)
  // newQuestion
  //   .save()
  //   .then((result) => res.json(result))
  //   .catch((err) => console.log(err));
});

router.get("/all", (req, res) => {
  Question.findAll()
    .then(questions => res.json(questions))
    .catch(err => console.log(err))
})

router.get("/count", (req, res) => {
  Question.find()
    .then(questions => res.json({ length: (questions.map(res => res).length) }))
    .catch(err => res.status(404).json({ notripsfound: 'No trips found' }));
})

router.post("/delete/:number", (req, res) => {
  var num = req.params.number;
  console.log(req.params)
  Question.destroy(
    { where: {
      id: num 
      }
    })
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

module.exports = router;
