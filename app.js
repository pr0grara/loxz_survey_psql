require("dotenv").config();
const { Sequelize } = require("sequelize");
const express = require('express');
const bodyParser = require('body-parser');
const answers = require('./routes/api/answers');
const results = require('./routes/api/results');
const surveys = require('./routes/api/surveys');
const questions = require('./routes/api/questions');
const path = require('path');
// const React = require("react");
// const ReactDOM = require("react-dom");
// const App = ("./src/loxz-app.js");

// document.addEventListener("DOMContentLoaded", () => {
//   const root = document.getElementById("root");
//   ReactDOM.render(<App />, root);
// });

const app = express();

const db = new Sequelize('postgres://arabaghdassarian:@localhost:5432/loxz_survey');

try {
  db.authenticate()
    .then(console.log("succesfully connected to db"));
} catch {
  console.log("didn't work")
}

app.get("/", (req, res) => {
  app.use(express.static('frontend/dist'))
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.use('/api/answers', answers);
app.use('/api/results', results);
app.use('/api/surveys', surveys);
app.use('/api/questions', questions);

var port = process.env.PORT || 9000
app.listen(port, () => console.log(`Server running on port ${port}`))