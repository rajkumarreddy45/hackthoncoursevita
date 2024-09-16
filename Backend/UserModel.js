const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");
// const { boolean } = require("webidl-conversions");
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  recruiter: { type: Boolean, required: true },
});
userSchema.plugin(findOrCreate);
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
