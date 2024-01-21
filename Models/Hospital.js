const mongoose = require("mongoose");

const data= new mongoose.Schema(
  {
    hospital_Name: {
      type: String,
      require: true,
    },
    hospital_Number: {
      type: Number,
      require: true,
    },
    hospital_Email: {
      type: String,
      require: true,
    },

    appointments: { type: String, require: true },
    prescription: { type: String, require: true },
    beds: { type: String, require: true },
    room: { type: String, require: true },
    bill: { type: String, require: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("form", Form);
