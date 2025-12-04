import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  book_id: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  status: { type: String, default: "pending" }, // pending/approved/rejected
  request_date: { type: Date, default: Date.now },
  return_date: Date
}, { timestamps: true });

const RentalRequest = mongoose.model("RentalRequest", rentalSchema);
export default RentalRequest;
