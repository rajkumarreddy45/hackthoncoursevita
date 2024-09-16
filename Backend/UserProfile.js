const mongoose = require("mongoose");

// Define the Project schema
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  githubLink: { type: String },
});

// Define the UserProfile schema
const userProfileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  image: { type: String },
  about: { type: String },
  linkedin: { type: String },
  github: { type: String },
  leetcode: { type: String },
  experience: { type: String },
  companyOrCollege: { type: String },
  projects: [projectSchema], // Array of projects
});

// Create a model based on the schema
const UserProfileModel = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfileModel;
