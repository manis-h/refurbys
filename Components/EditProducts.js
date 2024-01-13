import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function EditProducts({
  brand,
  model,
  images,
  colors,
  storage,
}) {
  console.log(brand, model, images, colors, storage);
  const [variants, setvariants] = useState(1);
  const [form, setForm] = useState({});
  useEffect(() => {
    setForm({
      brand,
      model,
      images,
      colors,
      storage,
    });
  }, []);
  return (
    <div>
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
              value={brand || ""}
              type="text"
              class="form-control"
              id="brand"
              placeholder="name@example.com"
            />
            ;<label for="brand">Brand</label>
          </div>
        </div>
        <div className="col">
          <div class="form-floating mb-3">
            <input
              onChange={(e) =>
                setForm({
                  ...form,
                  model: e.target.value,
                })
              }
              value={model || ""}
              type="text"
              class="form-control"
              id="brand"
              placeholder="name@example.com"
            />
            ;<label for="brand">Model</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div class="mb-3">
            <label for="brand">Colors</label>
            <input
              type="text"
              value={colors || ""}
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
              value={form?.storage || ""}
              onChange={(e) => {
                setForm({
                  ...form,

                  storage: e.target.value.split(","),
                });
              }}
              isMulti
              options={[]}
            />
          </div>
        </div>
        {images?.map((i) => (
          <>
            <img
              width={"20px"}
              height={"20px"}
              src={`uploads/${brand}-${model}/${i?.name}`}
              class="img-fluid rounded-start"
              alt="..."
            />
          </>
        ))}
        <div></div>

        <div className="col mt-3"></div>
      </div>
    </div>
  );
}
