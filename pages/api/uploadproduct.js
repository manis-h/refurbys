import multer from "multer";
import Mobile from "./models/mobileModel";
import formidable from "formidable";
import uploadImages from "./upload";
import { db } from "./middleware/db";
// import uploadImages, { upload } from "./upload";
// upload = multer({ dest: "uploads/" + req.body.brand });
export const config = {
  api: {
    bodyParser: false,
    urlencoded: true,
  },
};

export default async function uploadProducts(req, res) {
  db();
  console.log(req?.query?.brand, req?.query?.model);
  const upload = multer({
    dest: `public/uploads/${req?.query?.brand}-${req?.query?.model}`,
  });
  // const upload = multer({ dest: "public/uploads/phone" });
  upload.fields([{ name: "files", maxCount: 5 }])(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ error: "Multer error" });
    } else if (err) {
      return res.status(500).json({ error: "Unknown error" });
    }
    const files = req.files;
    // console.log(req.file, "file");
    // console.log(req.files, "files");
    if (!files) {
      return res.status(400).json({ error: "No file provided" });
    }

    try {
      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error saving file:", error);
      return res.status(500).json({ error: "Error saving file" });
    }
  });

  const data = await new Promise((resolve, reject) => {
    const form = formidable({});

    form.parse(req, (err, fields, files) => {
      if (err) reject({ err });
      resolve({ err, fields, files });
    });
  });
  let { brand, model, storageSpace, ram, colors, description } = data?.fields;

  const mobile = new Mobile({
    brand: brand[0],
    model: model[0],
    storageSpace: storageSpace[0],
    // ram,
    colors: colors[0],
    description,
    images: req?.files,
  });
  await mobile.save();

  console.log("done----------------->");
  console.log(req.fields);
  console.log(req.files);

  return res.status(200).json({
    images: data?.files?.files,
    brand,
    model,
    storageSpace,
    ram,
    colors,
    description,
    mobile,
    message: "Successfully Uploaded Mobile Model",
  });
}
