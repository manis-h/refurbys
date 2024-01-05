// middleware/uploadMiddleware.js
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Customize the destination folder based on your requirements
    const folderName = "uploads";
    const uploadPath = path.join(process.cwd(), folderName);

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Customize the filename if needed
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "uploads/" });

export const multipleUpload = upload.array("files", 5); // 'files' is the field name for the files

export default upload;
