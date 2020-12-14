const express = require("express");
const bodyParser = require("body-parser");
const Survey = require("../../models/Survey");
const router = express.Router();

var jsonParser = bodyParser.json();

router.get("/test", (req, res) => {
  res.json({ msg: "This is results route" });
});

router.get("/data/:survey_no", (req, res) => {
  console.log(req.params)
  // res.json(req.params)
  var num = req.params.survey_no;
  Survey.findOne({ number: num })
    // .then(result => res.json({"yo": "yooooo"}))
    .then(result => res.json(result))
    .catch(err => console.log(err))
});

router.post("/new", jsonParser, (req, res) => {
  // console.log(req.body);
  const [number, user, questions] = [
    req.body.number,
    req.body.user,
    req.body.questions,
  ];
  const newSurvey = new Survey({
    number,
    user,
    questions,
  });
  // console.log(newResult);
  newSurvey
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

router.get("/count", (req, res) => {
  Survey.find()
    .then(surveys => res.json({ length: (surveys.map(res => res).length) }))
    .catch(err => res.status(404).json({ notripsfound: 'No trips found' }));
})

module.exports = router;
