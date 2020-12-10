const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' })

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("connected to MongoDB")
);
