import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "student",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await api.post("/auth/register", form);

      setMessage(res.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.log(err);

      if (err.response) {
        setError(
          err.response?.data?.detail ||
            JSON.stringify(err.response.data)
        );
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-700/20 blur-[120px]" />

        <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">

        <div className="grid max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl lg:grid-cols-2">

          {/* LEFT PANEL */}

          <div className="hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900 p-12 text-white lg:flex lg:flex-col lg:justify-between">

            <div>

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl">
                  🚀
                </div>

                <div>

                  <h1 className="text-4xl font-bold">
                    IntelliCampus AI
                  </h1>

                  <p className="mt-2 text-cyan-100">
                    Create your intelligent campus account.
                  </p>

                </div>

              </div>

              <div className="mt-12">

                <h2 className="text-3xl font-bold">
                  Join the Future of Campus Management
                </h2>

                <p className="mt-5 leading-8 text-cyan-100">
                  Access AI-powered tools including chatbot,
                  PDF assistant, faculty appointments,
                  student analytics and role-based dashboards.
                </p>

              </div>

              <div className="mt-12 space-y-4">

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  🤖 AI Powered Chat
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  📄 Smart PDF Assistant
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  📈 Performance Prediction
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  📅 Appointment Booking
                </div>

              </div>

            </div>

            <p className="text-sm text-cyan-100">
              FastAPI • React • Gemini AI • JWT Authentication
            </p>

          </div>

          {/* RIGHT PANEL */}

          <div className="bg-white p-8 sm:p-12">

            <div className="mx-auto max-w-md">

              <div className="mb-10 text-center lg:text-left">

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-3xl text-white shadow-xl lg:mx-0">
                  👤
                </div>

                <h2 className="text-4xl font-bold text-slate-900">
                  Create Account
                </h2>

                <p className="mt-3 text-slate-500">
                  Start your IntelliCampus AI journey today.
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div>

                  <label className="mb-2 block font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullname"
                    value={form.fullname}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-medium text-slate-700">
                    Password
                  </label>

                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Create password"
                      required
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 pr-16 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-600"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>

                  </div>

                </div>
                                <div>

                  <label className="mb-2 block font-medium text-slate-700">
                    Register As
                  </label>

                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="student">🎓 Student</option>
                    <option value="faculty">👨‍🏫 Faculty</option>
                    <option value="admin">🛠️ Admin</option>
                  </select>

                </div>

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                {message && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <div className="flex items-center gap-3">

                      <svg
                        className="h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          className="opacity-20"
                        />

                        <path
                          fill="currentColor"
                          className="opacity-90"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />

                      </svg>

                      Creating Account...

                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>

              </form>

              <div className="mt-8 text-center">

                <p className="text-slate-600">

                  Already have an account?

                  <Link
                    to="/login"
                    className="ml-2 font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Sign In
                  </Link>

                </p>

              </div>

              <div className="mt-10">

                <div className="mb-4 h-px bg-slate-200"></div>

                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Built With
                </p>

                <div className="flex flex-wrap justify-center gap-3">

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                    ⚛ React
                  </span>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                    ⚡ FastAPI
                  </span>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                    🤖 Gemini AI
                  </span>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                    🔐 JWT
                  </span>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                    🛢 MySQL
                  </span>

                </div>

              </div>

              <div className="mt-10 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-5">

                <h3 className="text-sm font-semibold text-slate-800">
                  Why IntelliCampus AI?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Create your account to access AI-powered learning tools,
                  intelligent chat, PDF question answering, appointment
                  scheduling, student performance prediction, and role-based
                  dashboards—all from one modern platform.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RegisterForm;