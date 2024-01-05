// import React from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// function FormTextEditor({
//   inputType,
//   formData,
//   setFormData,
//   validator,
//   errors,
//   setErrors,
//   name,
//   placeholder,
//   required,
//   rows,
// }) {
//   return (
//     <div className="form-group">
//       {placeholder && (
//         <label style={{ fontSize: 14, textTransform: "capitalize" }}>
//           {placeholder}
//         </label>
//       )}
//       <CKEditor
//         editor={ClassicEditor}
//         data={formData?.[name] || ""}
//         // onReady={(editor) => {
//         //   // You can store the "editor" and use when it is needed.
//         //   console.log("Editor is ready to use!", editor);
//         // }}
//         onChange={(event, editor) => {
//           if (name) {
//             setFormData((prev) => ({ ...prev, [name]: editor.getData() }));
//           }
//         }}

//         // onBlur={(event, editor) => {
//         //   console.log("Blur.", editor);
//         // }}
//         // onFocus={(event, editor) => {
//         //   console.log("Focus.", editor);
//         // }}
//       />
//     </div>
//   );
// }

// export default FormTextEditor;
