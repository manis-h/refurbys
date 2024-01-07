import { db } from "./middleware/db";
import Mobile from "./models/mobileModel";
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
  db();
  const data = await Mobile.find();
  return res.status(200).json({
    data,
    message: "Successfully Uploaded Mobile Model",
  });
}
