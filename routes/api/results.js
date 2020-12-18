const express = require("express");
const bodyParser = require("body-parser");
const Result = require("../../models/Result");
const router = express.Router();

var jsonParser = bodyParser.json();

router.get("/test", (req, res) => {
  res.json({ msg: "This is results route" });
});

router.get("/data/:result_no", (req, res) => {
  // console.log(req.params)
  // res.json(req.params)
  var num = req.params.result_no;
  Result.findOne({ number: num })
    .then(result => res.json(result))
    .catch(err => console.log(err))
});

router.post("/new", jsonParser, (req, res) => {
  const [number, user, answers] = [
    req.body.number,
    req.body.user,
    req.body.answers,
  ];
  const newResult = new Result({
    number,
    user,
    answers,
  });
  console.log(newResult);
  newResult
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

router.get("/count", (req, res) => {
  Result.find().sort({number: -1})
    .then(results => res.json(results[0].number))
    .catch(err => res.status(404).json({ notripsfound: 'No trips found' }));  
})

module.exports = router;
