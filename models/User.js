const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"]},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"]},
  password: { type: String, required: true}, 
}, { timestamps: true})


mongoose.model('User', UserSchema);