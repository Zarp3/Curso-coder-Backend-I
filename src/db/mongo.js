import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("MongoDB conectado"))
  .catch(error => console.log(error));
