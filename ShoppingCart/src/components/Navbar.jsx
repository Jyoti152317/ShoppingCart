import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black shadow-md">
      {/* Title */}
      <h1 className="text-xl font-bold text-white">Shopping Cart</h1>

      {/* Links */}
      <div className="flex gap-6">
        <Link
          to="/"
          className="text-white hover:text-blue-600 transition font-medium"
        >
          Home
        </Link>

        <Link
          to="/cart"
          className="text-white hover:text-blue-600 transition font-medium"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
