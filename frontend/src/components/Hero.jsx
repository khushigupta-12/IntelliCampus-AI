import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-100">

      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-6xl font-bold leading-tight">

          AI Powered Smart

          <span className="text-blue-600">

            {" "}Campus Management

          </span>

        </h1>

        <p className="text-xl text-gray-600 mt-6 max-w-2xl">

          Book faculty appointments, manage schedules,
          chat with AI, and analyze campus data —
          all from one platform.

        </p>

        <div className="flex gap-6 mt-10">

          <Link
            to="/register"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700"
          >
            Get Started
          </Link>

          <button className="border border-blue-600 px-8 py-4 rounded-xl">

            Learn More

          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;