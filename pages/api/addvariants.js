import { db } from "./middleware/db";
import Mobile from "./models/mobileModel";
import Tablet from "./models/tabletModel";
import Laptop from "./models/laptopModel";

export default async function editproducts(req, res) {
  db();
  let { id, type, variants } = JSON.parse(req.body);
  var data;
  if (type == "mobile") {
    data = await Mobile.findById(id);
  } else if (type == "tablet") {
    data = await Tablet.findById(id);
  } else if (type == "laptop") {
    data = await Laptop.findById(id);
  } else {
    return res.status(404).json({
      message: "Enter Product Types",
      success: false,
    });
  }
  console.log({ id });
  console.log({ data });
  data.variants = variants;
  await data.save();
  return res.status(200).json({
    data,
  });
}
