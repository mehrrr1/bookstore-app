import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publicationYear: { type: Number },
  genre: { type: String },
  ISBN: { type: String, unique: true },
  image: { type: String },
  availability_status: { type: String, default: "available" } // available or rented
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);
export default Book;
