const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  number: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  content: { type: String, required: true },
  answers: { type: Array, required: false },
  user: { type: String, required: true },
  date: { type: Date, default: Date() },
});

const Question = mongoose.model("questions", QuestionSchema);

module.exports = Question;

//QUESTION TYPES:
//binary
//open
//single answer
//multiple answers