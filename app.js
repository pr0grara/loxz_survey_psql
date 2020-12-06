require("dotenv").config();
const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require('body-parser');
const answers = require('./routes/api/answers');
const results = require('./routes/api/results');
const path = require('path');
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

app.get("/", (req, res) => {
  app.use(express.static('frontend/dist'))
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.use('/api/answers', answers);
app.use('/api/results', results);

app.listen(9000)