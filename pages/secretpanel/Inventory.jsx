import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditProducts from "../../Components/EditProducts";

export default function Inventory() {
  const [data, setData] = useState();
  const getproducts = async () => {
    const response = await fetch("/api/getproducts");
    setData(await response.json());
  };
  const deleteproducts = async (id) => {
    const response = await fetch(`/api/deleteproduct?id=${id}`);
    getproducts();
  };
  useEffect(() => {
    getproducts();
  }, []);
  const [selectedItem, setSelectedItem] = useState();
  useEffect(() => {
    selectedItem && setEditOpen(true);
    console.log({ selectedItem });
  }, [selectedItem]);
  const [openEdit, setEditOpen] = useState();
  return (
    <div>
      Inventory
      {data?.data?.map((i) => (
        <div class="card mb-3" style={{ maxWidth: " 540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={`uploads/${i?.brand}-${i?.model}/${i?.images?.[0]?.name}`}
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
                  <small class="btn btn-primary ">Manage Inventory</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
