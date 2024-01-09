"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import UploadPanel from "./UploadPanel";
import Inventory from "./Inventory";
// import Sidebar from "./Sidebar";
// import Uploadproducts from "./Uploadproducts";
export default function page() {
  const [activeState, setActiveState] = useState(0);

  return (
    <div>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar setActiveState={setActiveState} />
          <div class="col py-3">
            {activeState == 0 && <UploadPanel />}
            {activeState == 1 && <Inventory />}
            <h3>Left Sidebar with Submenus</h3>
            <p class="lead">
              An example 2-level sidebar with collasible menu items. The menu
              functions like an "accordion" where only a single menu is be open
              at a time. While the sidebar itself is not toggle-able, it does
              responsively shrink in width on smaller screens.
            </p>
            <ul class="list-unstyled">
              <li>
                <h5>Responsive</h5> shrinks in width, hides text labels and
                collapses to icons only on mobile
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
