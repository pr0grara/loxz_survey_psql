// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const AnswerSchema = new Schema({
//   user: { type: String, required: true },
//   question: { type: String, required: true },
//   content: { type: String || Array, required: true },
//   analysis: { type: Object },
//   resultNo: { type: Number, required: true },
//   date: { type: Date, default: Date() },
// });

// const Answer = mongoose.model("answers", AnswerSchema);

// module.exports = Answer; 

const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize('postgres://arabaghdassarian:@localhost:5432/loxz_survey');

const Answer = db.define('Answer', {
  user: {
    type: DataTypes.STRING
  },
  question: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  analysis: {
    type: DataTypes.JSON
  },
  resultNo: {
    type: DataTypes.INTEGER
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  },
})

module.exports = Answer;

// class Answer extends Model { }

// Answer.init({
//   // Model attributes are defined here
//   user: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   question: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   content: {
//     type: DataTypes.ARRAY,
//     allowNull: false
//   },
//   analysis: {
//     type: DataTypes.JSON,
//   },
//   resultNo: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   date: {
//     type: DataTypes.DATE,
//     allowNull: false
//   },
// }, {
//   // Other model options go here
//   sequelize, // We need to pass the connection instance
//   modelName: 'Answer' // We need to choose the model name
// });

// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true