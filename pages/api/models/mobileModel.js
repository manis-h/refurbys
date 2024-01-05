// models/user.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  brand: {
    type: String,
    // required: true,
  },
  model: {
    type: String,
    // required: true,
  },
  storageSpace: [
    { type: String },
    // required: true,
  ],
  // ram: [
  //   {
  //     type: String,
  //     // required: true,
  //   },
  // ],
  description: String,
  colors: { type: [], required: true },
  images: { type: [], required: true },
  variants: [
    {
      // storage: { type: String, required: true },
      // ram: { type: String, required: true },
      // color: { type: String, required: true },
      // condition: { type: String, required: true },
    },
  ],
});

let Mobile;

try {
  Mobile = mongoose.model("Mobiles");
} catch (error) {
  Mobile = mongoose.model("Mobiles", userSchema);
}

module.exports = Mobile;
