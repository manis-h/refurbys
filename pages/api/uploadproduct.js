import multer from "multer";
import Mobile from "./models/mobileModel";
import formidable from "formidable";
import uploadImages from "./upload";
import { db } from "./middleware/db";
import Tablet from "./models/tabletModel";
import Laptop from "./models/laptopModel";
// import uploadImages, { upload } from "./upload";
// upload = multer({ dest: "uploads/" + req.body.brand });
// export const config = {
//   api: {
//     bodyParser: false,
//     urlencoded: true,
//   },
// };
// const upload = multer({
//   dest: `public/uploads/${req?.query?.brand}-${req?.query?.model}`,
// });
// const uploads = upload.fields([{ name: "files", maxCount: 5 }])(
//   req,
//   res,
//   async (err) => {
//     if (err instanceof multer.MulterError) {
//       return res.status(500).json({ error: "Multer error" });
//     } else if (err) {
//       return res.status(500).json({ error: "Unknown error" });
//     }
//     const files = req.files;
//     // console.log(req.file, "file");
//     // console.log(req.files, "files");
//     if (!files) {
//       return res.status(400).json({ error: "No file provided" });
//     }

//     try {
//       console.log("File uploaded successfully");
//     } catch (error) {
//       console.error("Error saving file:", error);
//       return res.status(500).json({ error: "Error saving file" });
//     }
//   }
// );
// const data = await new Promise((resolve, reject) => {
//   const form = formidable({});

//   form.parse(req, (err, fields, files) => {
//     if (err) reject({ err });
//     resolve({ err, fields, files });
//   });
// });
export default async function uploadProducts(req, res) {
  db();
  console.log(typeof req.body);

  let {
    category,
    brand,
    model,
    storageSpace,
    ram,
    colors,
    description,
    images,
    price,
  } = JSON.parse(req?.body);
  if (!category) return res.status(404).json({});
  const mobile = new Mobile({
    brand: brand,
    model: model,
    storageSpace: storageSpace,
    // ram,
    colors: colors,
    // description,
    // images: images,
  });

  const tablet = new Tablet({
    brand: brand,
    model: model,
    storageSpace: storageSpace,
    // ram,
    colors: colors,
    description,
    images: images,
  });
  const laptop = new Laptop({
    brand: brand,
    model: model,
    storageSpace: storageSpace,
    // ram,
    colors: colors,
    description,
    images: images,
  });

  // console.log(mobile, "==================================>");
  // console.log(JSON.stringify(images));
  // await mobile.save();
  if (category == "mobile") {
    await mobile.save();
  } else if (category == "laptop") {
    await laptop.save();
  } else if (category == "tablet") {
    await tablet.save();
  }

  console.log("done----------------->");
  // console.log(req.fields);
  // console.log(req.files?.files);

  console.log({ images });
  return res.status(200).json({
    mobile,
    message: "Successfully Uploaded Mobile Model",
  });
}
