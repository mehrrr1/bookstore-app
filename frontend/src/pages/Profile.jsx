import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      const res = await axios.get(`http://localhost:5000/api/users/${userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [userId]);

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>
        <p><span className="font-semibold">Name:</span> {user.name}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">Role:</span> {user.role}</p>
        <h3 className="mt-4 text-xl font-bold">Rented Books</h3>
        {user.rented_books?.length === 0 ? (
          <p>You haven't rented any books yet.</p>
        ) : (
          <ul className="list-disc pl-5">
            {user.rented_books.map(book => (
              <li key={book._id}>{book.title} by {book.author}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
