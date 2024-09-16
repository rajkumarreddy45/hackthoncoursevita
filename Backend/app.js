const express = require("express");
const db = require("./db");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const Profile = require("./Routes/profile");
const login = require("./Routes/login");
const Register = require("./Routes/register");
const app = express();
app.use(express.json()); // For parsing JSON bodies
// const social = require("./routes/Facebook");
app.use(cors());
// app.use(
//   "/",

// );
app.post("/", async (req, res) => {
  console.log(req.body);
  return res.json(true)
});
app.use("/", login);
app.use("/", Register);
app.use("/", Profile);
const axios = require("axios");
db.dbon();
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`server now on port ${port}!`);
});
