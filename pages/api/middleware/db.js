import mongoose from "mongoose";

export const db = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017", {
      dbName: "refurbys",
    })
    .then(() => {
      console.log("Database connected");
    })

    .catch((e) => {
      console.log(e);
    });
};
