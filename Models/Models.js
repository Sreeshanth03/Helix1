const mongoose = require("mongoose");
const User_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, "Name is required"],
    
  },
  mobile: {
    type: Number,
    required: [true, "Mobile Number is required"],
    unique: true,
  },
  email: { type: String, required: [true,"Email is required"], unique: true },
  address: { type: String, required: true,minlength: [5, "Address at least 5 characters long"] },
  country: { type: String, required: true,minlength:[3,"Country is required"]},
});
const User_Model = mongoose.model("Users", User_Schema);
module.exports = { User_Model };
