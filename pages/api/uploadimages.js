import Mobile from "./models/mobileModel";

export default async function uploadImages(req, res) {
  let { category, id, images } = JSON.parse(req.body);
  let data = await Mobile.findById(id);
  //   data = {
  //     ...data,
  //     images: images,
  //   };
  data.images = images;
  await data.save();
  return res.status(200).json({
    id,
    images,
    message: "Successfully Uploaded Images",
    data,
  });
}
