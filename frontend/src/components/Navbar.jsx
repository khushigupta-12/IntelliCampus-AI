import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-2xl font-bold text-blue-600">
          IntelliCampus AI
        </h1>

        <div className="flex gap-6">

          <Link to="/">Home</Link>

          <a href="#features">Features</a>

          <Link to="/login">Login</Link>

          <Link to="/register">Register</Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;