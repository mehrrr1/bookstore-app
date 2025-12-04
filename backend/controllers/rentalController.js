import RentalRequest from "../models/RentalRequest.js";
import Book from "../models/Book.js";
import User from "../models/User.js";

// Create rental request
export const createRental = async (req, res) => {
  try {
    const { user_id, book_id, return_date } = req.body;

    const book = await Book.findById(book_id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    if (book.availability_status !== "available") return res.status(400).json({ message: "Book is not available" });

    const rental = await RentalRequest.create({ user_id, book_id, return_date });

    // Update book status to rented
    book.availability_status = "rented";
    await book.save();

    // Add book to user's rented_books
    const user = await User.findById(user_id);
    user.rented_books.push(book_id);
    await user.save();

    res.status(201).json(rental);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
