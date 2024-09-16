const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL);
const dbon = async () => {
  if (process.env.NODE_ENV !== "test") {
    try {
      await mongoose.connect("mongodb://localhost:27017");
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log(error);
    }
  }
};
const dboff = async () => {
  try {
    await mongoose.connection.close();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { dbon, dboff };
