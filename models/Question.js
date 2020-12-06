const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  type: { type: String, required: true },
  content: { type: String, required: true },
  answer: { type: String, required: true },
  date: { type: Date, default: Date() },
});

const Question = mongoose.model("questions", QuestionSchema);

module.exports = Question;
