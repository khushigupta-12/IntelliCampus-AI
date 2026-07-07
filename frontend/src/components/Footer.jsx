import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              IntelliCampus AI
            </h2>

            <p className="mt-5 leading-8">
              An AI-powered campus management platform designed to
              simplify academic assistance, appointment scheduling,
              faculty recommendations, PDF question answering, and
              student performance prediction.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                className="hover:text-blue-400 transition"
              >
                Home
              </Link>

              <a
                href="#features"
                className="hover:text-blue-400 transition"
              >
                Features
              </a>

              <Link
                to="/login"
                className="hover:text-blue-400 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="hover:text-blue-400 transition"
              >
                Register
              </Link>

            </div>

          </div>

          {/* Technologies */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Built With
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-slate-800 px-4 py-2 rounded-full">
                React.js
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-full">
                FastAPI
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-full">
                MySQL
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-full">
                Gemini AI
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-full">
                SQLAlchemy
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-full">
                JWT
              </span>

            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/khushigupta-12/IntelliCampus-AI"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://intellicampus-frontend-vo6w.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-slate-900 transition"
              >
                Live Demo
              </a>

            </div>

          </div>

        </div>

        <hr className="border-slate-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p>
            © 2026 IntelliCampus AI. All Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Developed by <span className="text-blue-400 font-semibold">Khushi Gupta</span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;