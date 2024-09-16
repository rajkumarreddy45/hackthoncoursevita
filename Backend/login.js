const express = require("express");
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
app = express();
const cors = require("cors");
app.use(cors());
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // console.log(req.body);
    let exist = await UserModel.findOne({ username: req.body.username });
    // console.log(exist);
    if (!exist) {
      await res.send("user doesn't exist");
    } else {
      if (exist.password === req.body.password) {
        // console.log(exist.id);
        let payload = {
          user: {
            id: exist.id,
          },
        };
        await jwt.sign(
          payload,
          "jwtsecret",
          { expiresIn: 3600000 },
          async (err, token) => {
            if (err) throw err;
            return await res.json(true);
          }
        );
      } else {
        await res.send("incorrect password");
      }
    }
  } catch (err) {
    console.log(err);
    await res.send("Server Error");
  }
});
module.exports = app;
