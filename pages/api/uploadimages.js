import Mobile from "./models/mobileModel";
import Tablet from "./models/tabletModel";
import Laptop from "./models/laptopModel";

export default async function uploadImages(req, res) {
  let { type, id, images } = JSON.parse(req.body);
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
  data.images = images;
  await data.save();
  return res.status(200).json({
    id,
    images,
    message: "Successfully Uploaded Images",
    data,
  });
}
