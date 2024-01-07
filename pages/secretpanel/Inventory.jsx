import React, { useEffect, useState } from "react";

export default function Inventory() {
  const [data, setData] = useState();
  const getproducts = async () => {
    const response = await fetch("/api/getproducts");
    setData(await response.json());
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <div>
      Inventory
      {data?.data?.map((i) => (
        <div class="card mb-3" style={{ maxWidth: " 540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={i?.filePath + "/" + i?.newFilename}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  {i.brand} {i?.model}
                </h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
