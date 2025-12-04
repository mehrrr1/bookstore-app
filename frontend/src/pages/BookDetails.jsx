import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(`http://localhost:5000/api/books/${id}`);
      setBook(res.data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <img src={book.image || "/book-placeholder.png"} alt={book.title} className="w-full h-64 object-cover rounded"/>
        <h2 className="text-2xl font-bold mt-4">{book.title}</h2>
        <p className="text-gray-600">Author: {book.author}</p>
        <p className="text-gray-600">Genre: {book.genre}</p>
        <p className="text-gray-600">Publication Year: {book.publicationYear}</p>
        <p className="text-gray-600">ISBN: {book.ISBN}</p>
        <p className="text-gray-600 mt-2">Status: {book.availability_status}</p>
      </div>
    </div>
  );
};

export default BookDetails;
