import { Schema, model } from "mongoose";

export const ROLES = ["creador", "admin"];

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Role", roleSchema);
