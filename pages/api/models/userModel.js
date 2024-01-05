import mongoose from "mongoose";
//
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
let User;
try {
  User = mongoose.model("User");
} catch (error) {
  User = mongoose.model("User", schema);
}

// const User = mongoose.models.User || mongoose.model("User", schema);

export default User;
