// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const ResultSchema = new Schema({
//   number: { type: Number, required: true },
//   user: { type: String, required: true },
//   answers: { type: Array, required: true },
//   date: { type: Date, default: Date() },
// });

// const Result = mongoose.model("results", ResultSchema);

// module.exports = Result;

const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize('postgres://arabaghdassarian:@localhost:5432/loxz_survey');

const Result = db.define('Result', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING
  },
  answers: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  createdAt: {
    type: DataTypes.DATE
  },
})

module.exports = Result;