const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
  number: { type: Number, required: true },
  user: { type: String, required: true },
  questions: { type: Array, required: true },
  date: { type: Date, default: Date() },
});

const Survey = mongoose.model("surveys", SurveySchema);

module.exports = Survey;