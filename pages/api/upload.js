import formidable from "formidable";
import multer from "multer";
import { arrayBuffer } from "stream/consumers";
// import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
    urlencoded: true,
  },
};
import { createUploadthing } from "uploadthing/next-legacy";

const f = createUploadthing();

export default async function uploadImages(req, res, folder) {
  imageUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", "metadata.userId");

      console.log("file url", "file.url");

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: "metadata.userId" };
    }
  );
}
