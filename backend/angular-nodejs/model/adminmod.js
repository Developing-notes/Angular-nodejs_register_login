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
});
module.exports = mongoose.model("admin", newschema); 


