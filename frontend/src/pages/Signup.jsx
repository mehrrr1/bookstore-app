import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ setUser }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", termsAccepted: false });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/signup", formData);
      localStorage.setItem("userId", res.data._id);
      setUser(res.data);
      navigate("/home");
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        {message && <p className="mb-4 text-red-600">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" value={formData.name}
                 onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required/>
          <input type="email" name="email" placeholder="Email" value={formData.email}
                 onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required/>
          <input type="password" name="password" placeholder="Password" value={formData.password}
                 onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required/>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
            <span className="text-gray-600 text-sm">I accept terms and conditions</span>
          </label>
          <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
