// importing modules
const mongoose = require('mongoose');
const { replacer } = require('./utlity');

// importing all env variables
require('dotenv').config();

// database variables
const database = "shorty";
const password = encodeURIComponent(process.env.DB_PASSWORD);
const mongoUri = replacer(process.env.MONGO_URI, { "<db_password>": password, "<db_name>": database });

// connecting to database
mongoose.connect(mongoUri)
  .then(() => console.log("connected to database!"))
  .catch(error => console.log("error: ", error));

// creating URL schema
const urlSchema = new mongoose.Schema({
  key: { type: String, required: true },
  url: { type: String, required: true },
});

// creating URL model
const Url = mongoose.model('Url', urlSchema);

// exporting Url model
module.exports = Url;