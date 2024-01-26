import Mobile from "./models/mobileModel";
import Laptop from "./models/laptopModel";
import Tablet from "./models/tabletModel";
import User from "./models/userModel";

export default async function getsingleProduct(req, res) {
  let { brand, model, category } = req.query;
  console.log({ brand, model, category });
  if (!brand) {
    return res.status(404).json({
      message: "Brand not found",
    });
  }
  if (!model) {
    return res.status(404).json({
      message: "model not found",
    });
  }
  if (!category) {
    return res.status(404).json({
      message: "category not found",
    });
  }
  var data;
  if (category == "mobile") {
    let data = await Mobile.findOne({
      brand: brand,
      model: model,
    });

    return res.status(200).json({
      data,
      message: "Product details",
    });
  } else if (category == "laptop") {
    let data = await Laptop.findOne({
      brand: brand,
      model: model,
    });
    return res.status(200).json({
      data,
      message: "Product details",
    });
  } else if (category == "tablet") {
    data = await Tablet.findOne({
      brand: brand,
      model: model,
    });
    return res.status(200).json({
      data,
      message: "Product details",
    });
  }

  return res.status(200).json({
    data,
  });
}
