import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema(
  {
    productName: String,
    productCategory: String,
    urlImage: String,
  }
);

const Products = mongoose.models.Images || mongoose.model("Products", productsSchema, "products");

export default Products;