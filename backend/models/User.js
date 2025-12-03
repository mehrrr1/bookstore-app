import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
  rented_books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  role: { type: String, default: "user" }, // user/admin
  status: { type: String, default: "active" }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
