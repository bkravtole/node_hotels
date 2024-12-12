const mongoose = require("mongoose");
//person Schema
const persondata = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "manager", "waiter"],
    required: true,
  },
  email: { 
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("personData", persondata);
