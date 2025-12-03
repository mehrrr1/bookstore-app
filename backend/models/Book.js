import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publication_year: { type: Number, required: true },
  genre: { type: String, required: true },
  ISBN: { type: String, required: true },
  availability_status: { type: String, default: "available" },
  image_url: {
    type: String,
    default: "https://via.placeholder.com/150",
  },
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
