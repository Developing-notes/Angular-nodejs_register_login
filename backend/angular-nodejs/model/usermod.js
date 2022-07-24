var mongoose = require('../config/config');
const newschema = new mongoose.Schema({
  //write schema
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username:
  {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  user_status: {
    type: Number,
    default: 0
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  gender: { type: String, enum: ["Male", "Female"] },

  dob: {
    type: Date
  },
  mobile_number: {
    type: Number
  },
  role: {
    type: String
  },
  profile_image: {
    type: String,
  },
  aadharfront_image: {
    type: String
  },
  aadharback_image: {
    type: String
  },
  selfie_image: {
    type: String
  }
});
module.exports = mongoose.model("lists", newschema); //collection create


