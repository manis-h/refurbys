import { db } from "./middleware/db";
import Laptop from "./models/laptopModel";
import Mobile from "./models/mobileModel";
import Tablet from "./models/tabletModel";
import User from "./models/userModel";

// export default async function getproducts(req, res) {
//   db();
//   const { type } = req?.query;
//   const data = await User.find();
//   return res.staus(200).json({
//     success: true,
//     data,
//   });
// }
export default async function getproducts(req, res) {
  const { category } = req.query;
  db();
  if (category == "mobile") {
    let data = await Mobile.find();
    return res.status(200).json({
      data,
      message: "Product details",
    });
  } else if (category == "laptop") {
    let data = await Laptop.find();
    return res.status(200).json({
      data,
      message: "Product details",
    });
  } else if (category == "tablet") {
    data = await Tablet.find();
    return res.status(200).json({
      data,
      message: "Product details",
    });
  }
}
