import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:5000/api/books");
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.genre?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="max-w-5xl mx-auto">
        <input type="text" placeholder="Search by title or genre" value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="w-full p-3 rounded-lg mb-6 border border-gray-300 shadow"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map(book => <BookCard key={book._id} book={book} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
