import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import NavBar from "../../Components/NavBar";
import { FaDotCircle } from "react-icons/fa";
import HomePhoneSection from "../../Components/HomePhoneSection";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function index() {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [selectedvariant, setselectedVariant] = useState();
  const query = router.query.slug;
  const arr = String(query).split("-");
  const [data, setData] = useState();
  const [slug, setSlug] = useState(arr);

  const getproduct = async () => {
    const response = await fetch(
      `/api/getsingleproduct?category=laptop&brand=${arr[0]}&model=${arr[1]}`
    );
    setData(await response.json());
  };
  useEffect(() => {
    getproduct();
  }, [router.query.slug]);
  useEffect(() => {
    setImages([]);
    data?.data?.images?.map((i) => {
      setImages((prev) => [
        ...prev,
        {
          original: i,
          thumbnail: i,
        },
      ]);
    });
    setselectedVariant(data?.data?.variants[0]);
    // setImages(data?.data?.images);
  }, [data]);

  useEffect(() => {
    console.log({ selectedvariant, hos: data?.data?.variants[0] });
  }, [selectedvariant]);

  return (
    <div>
      <NavBar />

      <div className="container my-4">
        <div className="row">
          <div className="col">
            <ImageGallery items={images} />
          </div>
          <div className="col">
            <h5 className="fw-bold text-uppercase">
              {data?.data?.brand} &nbsp;
              {data?.data?.model}{" "}
            </h5>
            <p className="text-secondary">
              Refurbys Warranty, Good, 4 GB / 64 GB, Black
            </p>
            <p className="text-danger">
              <FaDotCircle />
              &nbsp; Online Exclusive Price!
            </p>
            <span>
              <span className="fs-3 fw-bold">
                ₹{selectedvariant?.discountedPrice}
              </span>{" "}
              &nbsp;
              <strike className="text-secondary">
                {selectedvariant?.price}
              </strike>
              &nbsp;
              <span className="text-success fw-bold">
                Save ₹
                {selectedvariant?.price - selectedvariant?.discountedPrice} (
                {Math.round(
                  (selectedvariant?.discountedPrice / selectedvariant?.price) *
                    100
                )}
                % Off)
              </span>
            </span>
            <h4 className="my-lg-4">Storage</h4>
            <p>
              {data?.data?.storageSpace?.map((i, index) => (
                <button
                  onChange={() =>
                    setselectedVariant(data?.data?.variants[index])
                  }
                  type="button"
                  class="btn btn-outline-success"
                >
                  {i}
                </button>
              ))}
              &nbsp;
            </p>
            <h4 className="my-lg-4">Color</h4>
            <p>
              {data?.data?.colors?.map((i) => (
                <button
                  type="button"
                  class="btn btn-outline-success text-uppercase mx-1"
                >
                  {i}
                </button>
              ))}
            </p>
            <p className="my-4">
              <button
                type="button"
                class="btn btn-lg btn-outline-dark shadow-lg rounded rounded-pill"
              >
                Add to Cart
              </button>
              &nbsp;
              <button
                type="button"
                class="btn-lg btn btn-outline-dark shadow-lg rounded rounded-pill"
              >
                Buy Now
              </button>
            </p>
          </div>
        </div>
      </div>
      <HomePhoneSection />
    </div>
  );
}
