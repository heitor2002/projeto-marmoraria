import mongoose, { Schema } from "mongoose";

const projectsSchema = new Schema(
  {
    name: String,
    category: String,
    branch: String,
    images: Array,
    views: Number,
  }
);

const Projects = mongoose.models.Projects || mongoose.model("Projects", projectsSchema, "projects");

export default Projects;
