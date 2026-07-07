import { Link } from "react-router-dom";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SchoolIcon from "@mui/icons-material/School";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center">

      <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            🚀 AI Powered Campus Platform
          </span>

          <h1 className="text-6xl font-extrabold leading-tight mt-8 text-gray-900">

            Smarter Campus

            <br />

            <span className="text-blue-600">
              Better Learning
            </span>

          </h1>

          <p className="text-xl text-gray-600 mt-8 leading-9 max-w-xl">

            IntelliCampus AI helps students and faculty with
            AI-powered academic assistance, appointment scheduling,
            performance prediction, PDF question answering,
            and smart faculty recommendations—all in one platform.

          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl shadow-lg"
            >
              Get Started
            </Link>

            <a
              href="#features"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-8 py-4 rounded-xl"
            >
              Explore Features
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">

            <SmartToyIcon
              sx={{
                fontSize: 50,
                color: "#2563eb",
              }}
            />

            <h2 className="text-2xl font-bold mt-5">
              AI Assistant
            </h2>

            <p className="text-gray-600 mt-3">
              Ask academic questions and receive intelligent responses using Google Gemini AI.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">

            <SchoolIcon
              sx={{
                fontSize: 50,
                color: "#16a34a",
              }}
            />

            <h2 className="text-2xl font-bold mt-5">
              Faculty Finder
            </h2>

            <p className="text-gray-600 mt-3">
              Get faculty recommendations based on your subject and academic needs.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">

            <AnalyticsIcon
              sx={{
                fontSize: 50,
                color: "#ea580c",
              }}
            />

            <h2 className="text-2xl font-bold mt-5">
              AI Prediction
            </h2>

            <p className="text-gray-600 mt-3">
              Predict academic performance using intelligent machine learning models.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">

            <EventAvailableIcon
              sx={{
                fontSize: 50,
                color: "#9333ea",
              }}
            />

            <h2 className="text-2xl font-bold mt-5">
              Smart Scheduling
            </h2>

            <p className="text-gray-600 mt-3">
              Book faculty appointments with an easy and organized scheduling system.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;