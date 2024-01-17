"use client";
import React, { useEffect, useState } from "react";
import { FaCross, FaPlusCircle, FaTrash } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import FormTextEditor from "../../Components/FormTextEditor";
import { storage } from "../index";
import { v4 } from "uuid";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "@firebase/storage";

export default function UploadPanel() {
  const [value, setValue] = useState("");
  const [file, setFile] = useState();
  const [form, setForm] = useState({
    brand: "",
    model: "",
    storage: [],
    ram: [],
    colors: [],
    price: "",
  });
  const [imgArray, setImageArray] = useState([]);
  const getItems = () => {
    form?.brand &&
      form?.model &&
      listAll(ref(storage, `files/${form?.brand}/${form?.model}`)).then(
        (imgs) => {
          console.log(imgs?.items);
          imgs?.items?.map((val) => {
            getDownloadURL(val).then((url) => {
              console.log(url);
              setImageArray((data) => [...data, url]);
            });
          });
        }
      );
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
  const SubmitImage = () => {
    const imgRef = ref(storage, `files/${form?.brand}/${form?.model}${v4()}`);
    uploadBytes(imgRef, file).then((val) => {
      getDownloadURL(val.ref).then((url) => {
        console.log(url);
        setImageArray((data) => [...data, url]);
      });
    });
  };
  useEffect(() => {
    getItems();
  }, [form?.model, form?.brand]);
  const [images, setImages] = useState(3);
  const [photos, setPhotos] = useState();
  const [category, setCategory] = useState();
  const [variants, setvariants] = useState(1);
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ form });
    if (!category) alert("Please Enter a Category");
    if (!form?.brand) alert("Please Enter Brand");

    if (!form?.model) alert("Please Enter Model");

    if (!form?.colors) alert("Please Enter Colors");

    if (!form?.storage) alert("Please Enter Storage");

    // if (!form?.price) alert("Please Enter Price");
    const body = {
      brand: form?.brand.trim()?.toLocaleLowerCase(),
      model: form?.model.trim()?.toLocaleLowerCase(),
      storageSpace: form?.storage,
      colors: form?.colors,
      // images: imgArray,
      category: category,
      // price: form?.price,
    };
    console.log({ body });
    // return;
    try {
      const response = await fetch(
        `/api/uploadproduct?brand=${form?.brand}&model=${form?.model}`,
        {
          method: "POST",
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();
      console.log(data);

      // Optionally, display a success message or handle the response accordingly
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <h1 className="text-center fw-bold " style={{ color: "lightgreen" }}>
          Upload Products
        </h1>
        <div className="container">
          <div className="row my-4">
            <div class="form-floating">
              <select
                onChange={(e) => setCategory(e.target.value)}
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option value="mobile" selected>
                  Mobile
                </option>
                <option value="tablet">Tablet</option>
                <option value="laptop">Laptop</option>
              </select>
              <label for="floatingSelect">&nbsp; Select Category</label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div class="form-floating mb-3">
                <input
                  onChange={(e) =>
                    setForm({
                      ...form,
                      brand: e.target.value,
                    })
                  }
                  type="text"
                  class="form-control"
                  id="brand"
                  placeholder="name@example.com"
                />
                <label for="brand">Brand</label>
              </div>
            </div>
            <div className="col">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="Model"
                  placeholder="text"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      model: e.target.value,
                    })
                  }
                />
                <label for="Model">Model</label>
              </div>
            </div>
          </div>

          {[...Array(variants)]?.map(() => (
            <div className="row">
              <div className="col  ">
                <div class="form-floating">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => {
                      setForm({
                        ...form,
                        colors: e.target.value.split(","),
                      });
                    }}
                    isMulti
                    options={[]}
                  />
                  <label for="brand">Colors</label>
                </div>
                {/* <div class="form-floating "></div>z */}
              </div>
              <div className="col">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setForm({
                        ...form,

                        storage: e.target.value.split(","),
                      });
                    }}
                    isMulti
                    options={[]}
                  />
                  <label for="brand">Storage</label>
                </div>
              </div>

              {/* <div className="col ">
                <div class="form-floating mb-3">
                  <label for="brand">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setForm({
                        ...price,

                        storage: e.target.value,
                      });
                    }}
                    isMulti
                    options={[]}
                  />
                </div>
              </div> */}
            </div>
          ))}

          <div className="row">
            <button role="submit" classname="text-center btn btn-lg">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
