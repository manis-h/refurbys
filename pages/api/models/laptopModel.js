import mongoose from "mongoose";
//
const schema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },

  model: {
    type: String,
    required: true,
  },
  storageSpace: {
    type: [],
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: String,
  images: { type: [], required: true },
  colors: { type: [], required: true },
  variants: [
    {
      storage: { type: String, required: true },
      color: { type: String, required: true },
      condition: { type: String },
      price: { type: Number, required: true },
      discountedPrice: { type: Number },
      qty: Number,
    },
  ],
});
const Laptop = mongoose.models.Laptop || mongoose.model("Laptop", schema);

export default Laptop;
