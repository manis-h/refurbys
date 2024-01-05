import React, { useState } from "react";

export default function page() {
  const [file, setFile] = useState([]);

  const handleFileChange = (event) => {
    setFile([...file, event.target.files[0]]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    file?.map((i) => {
      formData.append(`files`, i);
    });
    formData.append("brand", "Xiaomi");
    console.log(formData.get("files"));
    // file?.map((i) => {
    //   formData.append(`file${index}`, i);
    // });

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      // Optionally, display a success message or handle the response accordingly
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input type="file" onChange={handleFileChange} />
      <input type="file" onChange={handleFileChange} />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
