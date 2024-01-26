"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import UploadPanel from "./UploadPanel";
import Inventory from "./Inventory";
// import Sidebar from "./Sidebar";
// import Uploadproducts from "./Uploadproducts";
export default function page() {
  const [activeState, setActiveState] = useState(0);
  console.log(process.env.DATABASE);
  return (
    <div>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar setActiveState={setActiveState} />
          <div class="col py-3">
            {activeState == 0 && <UploadPanel />}
            {activeState == 1 && <Inventory />}
          </div>
        </div>
      </div>
    </div>
  );
}
