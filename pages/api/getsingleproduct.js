import Mobile from "./models/mobileModel";

export default async function getsingleProduct(req, res) {
  let { brand, model } = req.query;
  console.log({ brand, model });
  const mobile = await Mobile.findOne({
    brand: brand,
    model: model,
  });
  return res.status(200).json({
    mobile,
  });
}
