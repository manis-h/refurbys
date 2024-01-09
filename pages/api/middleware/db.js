export const db = () => {
  mongoose
    .connect(process.env.DATABASE, {
      dbName: "refurbys",
    })
    .then(() => {
      console.log("Database connected");
    })

    .catch((e) => {
      console.log(e);
    });
};
