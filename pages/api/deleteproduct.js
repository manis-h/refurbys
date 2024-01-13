import { db } from "./middleware/db";
import Mobile from "./models/mobileModel";

export default async function deleteproducts(req, res) {
  db();
  const { id, type } = req?.query;
  console.log({ id });
  if (!id) {
    return res.status(404).json({
      message: "id not found",
    });
  }
  const data = await Mobile.findByIdAndDelete(id);
  return res.status(200).json({
    data,
    message: "Successfully Uploaded Mobile Model",
  });
}
