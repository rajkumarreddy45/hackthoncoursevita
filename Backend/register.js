const express = require("express");
const RegisterModel = require("../models/UserModel");
const app = express();

app.post("/register", async (req, res) => {
  //console.log(req.body)
  try {
    const { username, email, password, recruiter } = req.body;
    let exist = await RegisterModel.findOne({ email: email });
    // console.log(exist);
    if (exist) {
      return res.status(400).send("User already exists");
    } else {
      let newUser = new RegisterModel({
        username: username,
        password: password,
        email: email,
        recruiter: recruiter,
      });
      console.log("hello", newUser);
      await newUser.save();
      return res.status(200).send("Registered Successfully");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

module.exports = app;
