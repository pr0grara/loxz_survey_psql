// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const QuestionSchema = new Schema({
//   number: { type: Number, required: true, unique: true },
//   type: { type: String, required: true },
//   content: { type: String, required: true },
//   answers: { type: Array, required: false },
//   user: { type: String, required: true },
//   date: { type: Date, default: Date() },
// });

// const Question = mongoose.model("questions", QuestionSchema);

// module.exports = Question;

//QUESTION TYPES:
//binary
//open
//single answer
//multiple answers

const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize('postgres://arabaghdassarian:@localhost:5432/loxz_survey');

const Question = db.define('Question', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  question_type: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.STRING
  },
  answers: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  username: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  },
})

module.exports = Question;