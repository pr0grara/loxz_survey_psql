const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  number: { type: Number, required: true },
  user: { type: String, required: true },
  answers: { type: Array, required: true },
  date: { type: Date, default: Date() },
});

const Result = mongoose.model("results", ResultSchema);

module.exports = Result;