import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, require: true },
    userEmail: { type: String, require: true, unique: true },
    userPassword: { type: String, require: true },
  },
  { timestamps: true }
);

export default mongoose.models.UserSCHEMA || mongoose.model("user", userSchema);
