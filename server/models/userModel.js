const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  givenName: { type: String },
  familyName: { type: String },
  nickName: { type: String },
  name: { type: String },
  picture: { type: String },
  email: { type: String },
  date: { type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
