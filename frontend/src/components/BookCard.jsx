import React from "react";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
      onClick={() => navigate(`/book/${book._id}`)}
    >
      <img src={book.image || "/book-placeholder.png"} alt={book.title} className="w-full h-48 object-cover rounded"/>
      <h2 className="mt-2 font-bold text-lg">{book.title}</h2>
      <p className="text-gray-600">{book.author}</p>
      <p className="mt-1 text-sm text-gray-500">{book.availability_status}</p>
    </div>
  );
};

export default BookCard;
