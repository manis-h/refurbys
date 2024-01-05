"use client";
import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import FormTextEditor from "../../Components/FormTextEditor";

export default function UploadPanel() {
  const [value, setValue] = useState("");
  const [file, setFile] = useState([]);
  function handleChange(e) {
    console.log(e.target.files);
    // setPhotos([...photos, e.target.files[0]]);
    setFile([...file, e.target.files[0]]);
  }
  const [images, setImages] = useState(3);
  const [photos, setPhotos] = useState();
  const [category, setCategory] = useState();
  const [form, setForm] = useState({
    brand: "",
    model: "",
    storage: [],
    ram: [],
    colors: [],
  });
  const [variants, setvariants] = useState(1);
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ form });
    const formData = new FormData();
    // formData.append("files", file);
    file?.map((i) => {
      formData.append(`files`, i);
    });

    formData.append("brand", form?.brand);
    formData.append("model", form?.model);
    formData.append("storageSpace", form?.storage);
    formData.append("colors", form?.colors);
    try {
      const response = await fetch(
        `/api/uploadproduct?brand=${form?.brand}&model=${form?.model}`,
        {
          method: "POST",
          body: formData,
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
                ;<label for="brand">Brand</label>
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
              <div className="col">
                <div class="mb-3">
                  <label for="brand">Colors</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setForm({
                        ...form,

                        colors: e.target.value.split(" "),
                      });
                    }}
                    isMulti
                    options={[]}
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <label for="brand">Storage</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setForm({
                        ...form,

                        storage: e.target.value.split(" "),
                      });
                    }}
                    isMulti
                    options={[]}
                  />
                </div>
              </div>

              <div className="col mt-3"></div>
            </div>
          ))}

          <div className="row">
            <h1 className="text-center">
              Upload Photos
              <FaPlusCircle onClick={() => setImages(images + 1)} />
            </h1>
            {[...Array(images)]?.map(() => (
              <div className="col m-4">
                <input type="file" onChange={handleChange} />
              </div>
            ))}{" "}
          </div>
          <div className="row">
            <button role="submit" classname="text-center">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
