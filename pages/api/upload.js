import multer from "multer";
// import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
    urlencoded: true,
  },
};

export default async function uploadImages(req, res, folder) {
  console.log({ body: req?.fields });
  const upload = multer({ dest: "uploads/" + req?.fields?.brand });

  console.log(req.file, "sfile");
  console.log(req.files, "sfiles");

  upload.fields([{ name: "files", maxCount: 5 }])(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ error: "Multer error" });
    } else if (err) {
      return res.status(500).json({ error: "Unknown error" });
    }
    const files = req.files;
    console.log(req.file, "file");
    console.log(req.files, "files");
    if (!files) {
      return res.status(400).json({ error: "No file provided" });
    }

    try {
      // You can perform additional processing here (e.g., save to a database, etc.)
      console.log("File uploaded successfully");
      // return res.status(200).json({
      //   lol: "lol",
      //   message: "File uploaded successfully",
      // });
    } catch (error) {
      console.error("Error saving file:", error);
      return res.status(500).json({ error: "Error saving file" });
    }
  });
}
