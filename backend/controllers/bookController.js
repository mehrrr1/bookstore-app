import Book from "../models/Book.js";

// Get 20 latest books for homepage
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }).limit(20);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a book (admin only)
export const addBook = async (req, res) => {
  try {
    const existingBook = await Book.findOne({ ISBN: req.body.ISBN });
    if (existingBook) return res.status(400).json({ message: "Book with this ISBN already exists" });

    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get single book by ID
export const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
