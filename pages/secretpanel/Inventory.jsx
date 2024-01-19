"use client";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";
import EditProducts from "../../Components/EditProducts";

import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "@firebase/storage";
import { storage } from "../index";
import { v4 } from "uuid";
export default function Inventory() {
  const [variants, setVariants] = useState({});
  const [variantarr, setvariantArr] = useState([]);
  const [productType, setProductType] = useState("mobile");
  const [file, setFile] = useState();
  const [data, setData] = useState();
  const getproducts = async () => {
    const response = await fetch(`/api/getproducts?category=${productType}`);
    setData(await response.json());
  };
  useEffect(() => {
    getproducts();
  }, [productType]);
  const [imageArray, setImageArray] = useState([]);
  const deleteproducts = async (id) => {
    const response = await fetch(`/api/deleteproduct?id=${id}`);
    getproducts();
  };
  const [selectedItem, setSelectedItem] = useState();
  useEffect(() => {
    setImageArray([]);
    getItems();
    setvariantArr(selectedItem?.variants);
  }, [selectedItem]);
  useEffect(() => {
    selectedItem && setEditOpen(true);
    console.log({ selectedItem });
  }, [selectedItem]);
  const [openEdit, setEditOpen] = useState(false);
  const SubmitImage = () => {
    const imgRef = ref(
      storage,
      `files/${selectedItem?.brand}-${selectedItem?.model}/${v4()}`
    );
    uploadBytes(imgRef, file).then((val) => {
      getDownloadURL(val.ref).then((url) => {
        setImageArray((data) => [...data, url]);
      });
    });
  };
  const getItems = () => {
    selectedItem?.brand &&
      selectedItem?.model &&
      listAll(
        ref(storage, `files/${selectedItem?.brand}-${selectedItem?.model}`)
      ).then((imgs) => {
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
  }, [selectedItem]);
  const uploadImages = async () => {
    const body = {
      id: selectedItem?._id,
      images: imageArray,
    };
    try {
      const response = await fetch(`/api/uploadimages`, {
        method: "POST",
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log(data);

      // Optionally, display a success message or handle the response accordingly
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const deleteFile = (path) => {
    const desertRef = ref(storage, path);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        console.log("File deleted successfully");
        setImageArray([]);
        getItems();
      })
      .catch((error) => {
        console.log(error);
        // Uh-oh, an error occurred!
      });
  };
  const sendVariants = async () => {
    const body = {
      id: selectedItem?._id,
      variants: variantarr,
    };
    try {
      const response = await fetch(`/api/addvariants`, {
        method: "POST",
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log(data);

      // Optionally, display a success message or handle the response accordingly
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  useEffect(() => {
    console.log({ variants });
  }, [variants]);

  return (
    <div>
      {/* Sidebar */}
      {/* /<!-- Modal --> */}
      <div>Showing results for {productType}</div>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          onChange={(e) => {
            setProductType(e.target.value);
          }}
        >
          <option selected>Choose</option>
          <option value="mobile">Mobile</option>
          <option value="tablet">Tablet</option>
          <option value="laptop">Laptop</option>
        </select>
        <label for="floatingSelect">Product Type</label>
      </div>
      <div
        class="modal fade modal-lg"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p className="card-text fw-bold">
                      Brand- &nbsp;{selectedItem?.brand}
                    </p>
                  </div>
                  <div className="col">
                    <p className="card-text fw-bold">
                      Model- &nbsp;{selectedItem?.model}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="card-text fw-bold">
                      Storage- &nbsp;{selectedItem?.storageSpace}
                    </p>
                  </div>
                  <div className="col">
                    <p className="card-text fw-bold">
                      Colors- &nbsp;{selectedItem?.colors}
                    </p>
                    {console.log({ selectedItem })}
                  </div>
                </div>
                <div className="row my-2">
                  <h5 className="text-center">Upload Photos</h5>

                  <div className="col m-4">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button
                      onClick={() => {
                        SubmitImage();
                      }}
                    >
                      Upload Photos
                    </button>
                    <br />
                    <br />
                    {imageArray?.map((i) => (
                      <span>
                        <img width={128} height={128} src={i} alt="" />
                        <FaTrash onClick={() => deleteFile(i)} color={"red"} />
                      </span>
                    ))}
                  </div>
                  <div className="row">
                    {variantarr?.map((i, index) => (
                      <>
                        <div className="col">
                          <div class="form-floating mb-3">
                            <input
                              onChange={(e) => {
                                let arr = variantarr;
                                arr[index].qty = e.target.value;
                                console.log(arr);
                                setvariantArr(arr);
                              }}
                              value={variantarr[index]?.qty}
                              type="number"
                              class="form-control"
                              id="qty"
                              placeholder="name@example.com"
                            />
                            <label for="qty">qty</label>
                          </div>
                        </div>
                        <div className="col">
                          <div class="form-floating mb-3">
                            <input
                              onChange={(e) => {
                                let arr = variantarr;
                                arr[index].price = e.target.value;
                                console.log(arr);
                                setvariantArr(arr);
                              }}
                              value={variantarr[index]?.price || undefined}
                              type="number"
                              class="form-control"
                              id="Price"
                              placeholder="name@example.com"
                            />
                            <label for="Price">Price</label>
                          </div>
                        </div>
                        <div className="col">
                          <div class="form-floating mb-3">
                            <input
                              onChange={(e) => {
                                let arr = variantarr;
                                arr[index].discountedPrice = e.target.value;
                                console.log(arr);
                                setvariantArr(arr);
                              }}
                              value={variantarr[index]?.discountedPrice}
                              type="number"
                              class="form-control"
                              id="Price"
                              placeholder="name@example.com"
                            />
                            <label for="Price">Discounted Price</label>
                          </div>
                        </div>
                        <div className="col">
                          <div class="form-floating">
                            <select
                              onChange={(e) => {
                                let arr = variantarr;
                                arr[index].storage = e.target.value;
                                console.log(arr);
                                setvariantArr(arr);
                              }}
                              class="form-select"
                              id="floatingSelect"
                              aria-label="Floating label select example"
                            >
                              {selectedItem?.storageSpace?.map((i) => (
                                <option
                                  selected={i == variantarr[index].storage}
                                  value={i}
                                >
                                  {i}
                                </option>
                              ))}
                            </select>
                            <label for="floatingSelect">
                              &nbsp; Select Storage{" "}
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          <div class="form-floating">
                            <select
                              onChange={(e) => {
                                let arr = variantarr;
                                arr[index].storage = e.target.value;
                                console.log(arr);
                                setvariantArr(arr);
                              }}
                              class="form-select"
                              id="floatingSelect"
                              aria-label="Floating label select example"
                            >
                              {selectedItem?.colors?.map((i) => (
                                <option
                                  onChange={(e) => {
                                    let arr = variantarr;
                                    arr[index].color = e.target.value;
                                    console.log(arr);
                                    setvariantArr(arr);
                                  }}
                                  value={i}
                                  selected={i == variantarr[index].color}
                                >
                                  {i}
                                </option>
                              ))}
                            </select>
                            <label for="floatingSelect">
                              &nbsp; Select Color
                            </label>
                          </div>
                        </div>
                      </>
                    ))}
                    <h5 className="text-center">
                      Add Available Variants <FaPlusCircle />
                    </h5>
                    <div className="col">
                      <div class="form-floating mb-3">
                        <input
                          onChange={(e) =>
                            setVariants({
                              ...variants,
                              qty: e.target.value,
                            })
                          }
                          type="number"
                          class="form-control"
                          id="qty"
                          placeholder="name@example.com"
                        />
                        <label for="qty">qty</label>
                      </div>
                    </div>
                    <div className="col">
                      <div class="form-floating mb-3">
                        <input
                          onChange={(e) =>
                            setVariants({
                              ...variants,
                              price: e.target.value,
                            })
                          }
                          type="number"
                          class="form-control"
                          id="Price"
                          placeholder="name@example.com"
                        />
                        <label for="Price">Price</label>
                      </div>
                    </div>
                    <div className="col">
                      <div class="form-floating mb-3">
                        <input
                          onChange={(e) =>
                            setVariants({
                              ...variants,
                              discountedPrice: e.target.value,
                            })
                          }
                          type="number"
                          class="form-control"
                          id="Price"
                          placeholder="name@example.com"
                        />
                        <label for="Price">Discounted Price</label>
                      </div>
                    </div>
                    <div className="col">
                      <div class="form-floating">
                        <select
                          onChange={(e) =>
                            setVariants({
                              ...variants,
                              storage: e.target.value,
                            })
                          }
                          class="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                        >
                          {selectedItem?.storageSpace?.map((i) => (
                            <option value={i} selected>
                              {i}
                            </option>
                          ))}
                        </select>
                        <label for="floatingSelect">
                          &nbsp; Select Storage{" "}
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div class="form-floating">
                        <select
                          onChange={(e) =>
                            setVariants({
                              ...variants,
                              color: e.target.value,
                            })
                          }
                          class="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                        >
                          {selectedItem?.colors?.map((i) => (
                            <option value={i} selected>
                              {i}
                            </option>
                          ))}
                        </select>
                        <label for="floatingSelect">&nbsp; Select Color</label>
                      </div>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-lg btn-primary"
                        onClick={() => {
                          setvariantArr([...variantarr, variants]);
                          setVariants({});
                        }}
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => {
                  uploadImages();
                  sendVariants();
                }}
                type="button"
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body"></div>
      </div>
      Inventory
      {data?.data?.map((i) => (
        <div class="card mb-3" style={{ maxWidth: " 540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={i?.images[0]}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  {i.brand} {i?.model}
                </h5>
                <p className="card-text fw-bold">Brand- &nbsp;{i.brand}</p>

                <p className="card-text fw-bold">Model- &nbsp;{i.model}</p>
                <div>
                  <span
                    className="mx-2 text-primary"
                    onClick={() => {
                      setSelectedItem(i);
                    }}
                  >
                    Edit
                  </span>
                  <span
                    onClick={() => deleteproducts(i?._id)}
                    classname="mx-2 text-danger"
                  >
                    Delete
                  </span>
                </div>
                <p class="card-text my-1">
                  <small
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    class="btn btn-primary "
                    onClick={() => {
                      setSelectedItem(i);
                      setEditOpen(true);
                    }}
                  >
                    Manage Inventory
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
