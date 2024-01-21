const mongoose = require("mongoose");

const Form = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  interest: { type: String, require: true },
  message: { type: String, require: true }

 
}, {timestamps:true})
module.exports=mongoose.model("form",Form)
