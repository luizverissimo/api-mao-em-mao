const express = require("express");
const cors = require("cors");
const passaport = require("passport");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
require("../config/passport")(passaport);

const users = require("./routes/users");

app.use(cors());
app.use(passaport.initialize());
app.use(express.json());
app.use(users);

const db = require("../config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

module.exports = app;
