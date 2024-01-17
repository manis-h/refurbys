"use client";
import React, { useEffect, useState } from "react";
import { UploadButton } from "@bytescale/upload-widget-react";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "@firebase/storage";
import { v4 } from "uuid";
import { storage } from "../index";
export default function page() {
  const [file, setFile] = useState();
  const [imgArray, setImageArray] = useState([]);

  const handleSubmit = () => {
    const imgRef = ref(storage, `files/${v4()}`);
    uploadBytes(imgRef, file);
  };
  const deleteFile = (path) => {
    const desertRef = ref(storage, path);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        console.log("File deleted successfully");

        // getItems();
      })
      .catch((error) => {
        console.log(error);
        // Uh-oh, an error occurred!
      });
  };
  const getItems = () => {
    setImageArray();
    listAll(ref(storage, "files")).then((imgs) => {
      console.log(imgs?.items);
      imgs?.items?.map((val) => {
        getDownloadURL(val).then((url) => {
          console.log(url);
          setImageArray((data) => [...data, url]);
        });
      });
    });
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSubmit}>Submit</button>
      {imgArray?.map((i) => (
        <img onClick={() => deleteFile(i)} src={i} />
      ))}
    </div>
  );
}
