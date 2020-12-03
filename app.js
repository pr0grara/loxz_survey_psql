require("dotenv").config();
const mongoose = require("mongoose");
const express = require('express');
// const React = require("react");
// const ReactDOM = require("react-dom");
// const App = ("./src/loxz-app.js");

// document.addEventListener("DOMContentLoaded", () => {
//   const root = document.getElementById("root");
//   ReactDOM.render(<App />, root);
// });

const app = express();

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("connected to MongoDB")
);

app.get('/', (req, res) => {
  res.send('frontend')
})

app.listen(9001)