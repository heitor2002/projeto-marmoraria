import mongoose, { Schema } from "mongoose";

const imageSchema = new Schema(
  {
    urlImage: String,
  }
);

const Images = mongoose.models.Images || mongoose.model("Images", imageSchema, "images");

export default Images;