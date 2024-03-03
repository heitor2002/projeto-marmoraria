import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
  {
    name: String,
    password: String,
    email: String,
    hierarchy: String
  }
);

const Users = mongoose.models.Users || mongoose.model("Users", usersSchema, "users");

export default Users;