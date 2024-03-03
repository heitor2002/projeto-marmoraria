import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema(
  {
    productName: String,
    productCategory: String,
    productImage: String,
  }
);

const Products = mongoose.models.Products || mongoose.model("Products", productsSchema, "products");

export default Products;