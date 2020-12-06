const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  user: { type: String, required: true },
  question: { type: String, required: true },
  content: { type: String, required: true },
  analysis: { type: Object },
  resultNo: { type: Number, required: true },
  date: { type: Date, default: Date() },
});

const Answer = mongoose.model("answers", AnswerSchema);

module.exports = Answer;