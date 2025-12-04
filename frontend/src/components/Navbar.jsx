import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Logo" className="w-10 h-10"/>
        <h1 className="text-xl font-bold">Bookstore Library</h1>
      </div>
      <div className="space-x-4">
        <Link to="/home" className="hover:text-gray-200">Home</Link>
        {user ? (
          <>
            <Link to="/profile" className="hover:text-gray-200">Profile</Link>
            <button onClick={handleLogout} className="hover:text-gray-200">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-200">Login</Link>
            <Link to="/signup" className="hover:text-gray-200">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
