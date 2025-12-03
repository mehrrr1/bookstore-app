import RentalRequest from "../models/RentalRequest.js";
import Book from "../models/Book.js";

// Create rental request
export const createRental = async (req, res) => {
  try {
    const rental = await RentalRequest.create(req.body);
    
    // Update book status to rented
    await Book.findByIdAndUpdate(req.body.book_id, { availability_status: "rented" });
    
    res.status(201).json(rental);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
