// import React, { useState } from "react";

// export default function uploads() {
//   const [file, setFile] = useState([]);
//   function handleChange(e) {
//     console.log(e.target.files);
//     setFile(e.target.files[0]);
//   }
//   const [images, setImages] = useState(3);
//   const [photo, setPhoto] = useState();
//   const [category, setCategory] = useState();
//   const [form, setForm] = useState({
//     brand: "",
//     model: "",
//     storage: [],
//     ram: [],
//     colors: [],
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log({ form });
//     const formData = new FormData();
//     formData.append("file", file);
//   };
//   return (
//     <div>
//       {" "}
//       <form onSubmit={handleSubmit}>
//         <h1 className="text-center fw-bold " style={{ color: "lightgreen" }}>
//           Upload Products
//         </h1>
//         <div className="container">
//           <div className="row my-4">
//             <div class="form-floating">
//               <select
//                 class="form-select"
//                 id="floatingSelect"
//                 aria-label="Floating label select example"
//               >
//                 <option value="mobile" selected>
//                   Mobile
//                 </option>
//                 <option value="tablet">Tablet</option>
//                 <option value="laptop">Laptop</option>
//               </select>
//               <label for="floatingSelect">&nbsp; Select Category</label>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col">
//               <div class="form-floating mb-3">
//                 <input
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       brand: e.target.value,
//                     })
//                   }
//                   type="text"
//                   class="form-control"
//                   id="brand"
//                   placeholder="name@example.com"
//                 />
//                 <label for="brand">Brand</label>
//               </div>
//             </div>
//             <div className="col">
//               <div class="form-floating">
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="Model"
//                   placeholder="text"
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       model: e.target.value,
//                     })
//                   }
//                 />
//                 <label for="Model">Model</label>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col">
//               <div class="mb-3">
//                 <label for="brand">Colors</label>
//                 <CreatableSelect
//                   onChange={(e) => {
//                     e.map((i) => {
//                       setForm({
//                         ...form,

//                         colors: [...form.colors, i.value],
//                       });
//                     });
//                   }}
//                   isMulti
//                   options={[]}
//                 />
//               </div>
//             </div>
//             <div className="col">
//               <div class="mb-3">
//                 <label for="brand">Storage</label>
//                 <CreatableSelect
//                   onChange={(e) => {
//                     e.map((i) => {
//                       setForm({
//                         ...form,

//                         storage: [...form.storage, i.value],
//                       });
//                     });
//                   }}
//                   isMulti
//                   options={[]}
//                 />
//               </div>
//             </div>

//             <div className="col">
//               <div class="mb-3">
//                 <label for="brand">Ram</label>
//                 <CreatableSelect
//                   onChange={(e) => {
//                     e.map((i) => {
//                       setForm({
//                         ...form,

//                         ram: [...form.ram, i.value],
//                       });
//                     });
//                   }}
//                   isMulti
//                   options={[]}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <h1 className="text-center">
//               Upload Photos
//               <FaPlusCircle onClick={() => setImages(images + 1)} />
//             </h1>
//             {[...Array(images)]?.map(() => (
//               <div className="col m-4">
//                 <input type="file" onChange={handleChange} />
//               </div>
//             ))}{" "}
//           </div>
//           <div className="row">
//             <button role="submit" classname="text-center">
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
