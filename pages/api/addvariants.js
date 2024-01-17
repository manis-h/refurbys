import { db } from "./middleware/db";
import Mobile from "./models/mobileModel";

export default async function editproducts(req, res) {
  db();
  let { id, type, variants } = JSON.parse(req.body);
  let mobile = await Mobile.findById(id);
  console.log({ id });
  mobile.variants = variants;
  await mobile.save();
  return res.status(200).json({
    mobile,
  });
}
