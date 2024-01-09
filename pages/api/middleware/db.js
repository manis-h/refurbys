import mongoose from "mongoose";

export const db = () => {
  mongoose
    .connect(
      "mongodb+srv://newuser:okaydone@cluster0.pq1kopd.mongodb.net/test",
      {
        dbName: "refurbys",
      }
    )
    .then(() => {
      console.log("Database connected");
    })

    .catch((e) => {
      console.log(e);
    });
};
